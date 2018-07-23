import PivotedLinkedList from 'pivoted-linked-list';
import {combineDiff} from './helper';

function preInsert(currentLog, newLog, nextLog){
	if(currentLog, newLog, nextLog) { // middle insert
		const newLogForwardDiff = newLog.forward;
		const newLogBackwardDiff = newLog.backward;
		const nextLogForwardDiff = nextLog.forward;
		const nextLogBackwardDiff = nextLog.backward;
		const newCombinedForwardDiff = combineDiff(nextLogBackwardDiff.value, newLogForwardDiff.value)
		const newCombinedBackwardDiff = combineDiff(nextLogForwardDiff.value, newLogBackwardDiff.value)

		newLog.forward = newCombinedForwardDiff;
		newLog.backward = newCombinedBackwardDiff;
	}

}

function jump(steps,direction, logList,objectVerifier){
	let logEntry, baseDiff;
	while(steps >= 0){
		logEntry = logList.pivot;
		if(direction === 'backward'){
			logList.shiftPivot(-1);
		} else if(direction === 'forward'){
			logList.shiftPivot(1);
		}
		const forwardBackwardDiff = logEntry.element;
		const diffState = forwardBackwardDiff[direction];
		const diffValue = diffState.value ;
		const isLoggableCollectionObject = diffState['classDefName'] === objectVerifier;
		baseDiff = combineDiff(baseDiff, diffValue, objectVerifier, isLoggableCollectionObject);
		steps = steps - 1;
	}
	return baseDiff;
}

function shiftAndApplyLog(steps,type, callback, objectVerifier) {
	const {context, logList } = this;
	let logEntry, baseDiff;
	if(steps === 0){ // next and prev
		logEntry = logList.pivot;
		logList.shiftPivot(type === "undo" ? -1 : 1);
		const forwardBackwardDiff = logEntry.element;
		const {forward, backward} = forwardBackwardDiff;
		let diffState;//State as JSON
		if(type === "undo"){
			diffState = backward
		} else if( type === "redo"){
			diffState = forward
		}
		baseDiff = diffState.value ;
	} else { // jumping
		if((type === "undo")){
			baseDiff = jump(-steps,'backward',logList,objectVerifier);
		} else {
			baseDiff = jump(steps,'forward',logList,objectVerifier);
		}
	}

	const diffLoggerInstance = this;
	context.applyDiff.call(context, baseDiff, function(){
		updateLastActiveState.call(diffLoggerInstance);
		callback()
	});

};

function updateLastActiveState(){
	this.lastActiveState = this.context.getState();
}

export default class DiffLogger {
	constructor(context){
		if(!context){
			console.error("Context cant be null");
		}

		if(!context.applyDiff){
			console.error("Context needs to implement applyDiff method");
		}

		if(!context.getState){
			console.error("Context needs to implement getState method");
		}

		if(!context.getDiff){
			console.error("Context needs to implement getDiff method");
		}

		this.context = context;

		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = null;
		this.enable = true;

		updateLastActiveState.call(this)
	}
}


DiffLogger.prototype.setSaveCallback = function(saveCallback){
	this.saveDiffCallback = saveCallback
};

DiffLogger.prototype.removeSaveCallback = function(){
	this.saveDiffCallback = null;
};

DiffLogger.prototype.undo = function(steps, callback, objectVerifier){
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, -steps, "undo", callback, objectVerifier);
};

DiffLogger.prototype.redo = function(steps, callback, objectVerifier){
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, steps, "redo", callback, objectVerifier);
};


DiffLogger.prototype.save = function(){
	if(this.enable){
		let forwardBackwardDiff;
		if(this.context){
			forwardBackwardDiff = this.context.getDiff(this.lastActiveState, true);
			const {forward, backward} = forwardBackwardDiff;

			if (typeof forward === "object" && typeof backward === "object") { // Change occurred log them
				this.logList.insert(forwardBackwardDiff, preInsert);
				updateLastActiveState.call(this)
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(forwardBackwardDiff);
	}
};


DiffLogger.prototype.getCurrentLog = function(){
	if(this.logList ){
		return this.logList.getPivotElement();
	}
	return null;
};

DiffLogger.prototype.clear = function(){
	this.logList.reset();
}


