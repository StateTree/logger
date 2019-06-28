import PivotedLinkedList from 'pivoted-linked-list';
import {combineDiffLogs} from './helper';

function preInsert(currentLog, newLog, nextLog){
	if(currentLog, newLog, nextLog) { // middle insert
		const newLogForwardDiff = newLog.element.forward;
		const newLogBackwardDiff = newLog.element.backward;
		const nextLogForwardDiff = nextLog.element.forward;
		const nextLogBackwardDiff = nextLog.element.backward;
		const newCombinedForwardDiff = combineDiffLogs(nextLogBackwardDiff.value, newLogForwardDiff.value, this.objectVerifier, true)
		const newCombinedBackwardDiff = combineDiffLogs(nextLogForwardDiff.value, newLogBackwardDiff.value, this.objectVerifier, true)

		newLog.forward = newCombinedForwardDiff;
		newLog.backward = newCombinedBackwardDiff;
	}

}

function jump(steps,direction, logList,objectVerifier){
	let logEntry, baseDiff;
	while(steps > 0){
		if(direction === 'backward'){
			logEntry = logList.pivot;
			logList.shiftPivot(-1);
		} else if(direction === 'forward'){
			logEntry = logList.shiftPivot(1);
		}
		const forwardBackwardDiff = logEntry.element;
		const diffState = forwardBackwardDiff[direction];
		const diffValue = diffState.value ;
		const isLoggableCollectionObject = diffState['classDefName'] === objectVerifier;
		baseDiff = combineDiffLogs(baseDiff, diffValue, objectVerifier, isLoggableCollectionObject);
		steps = steps - 1;
	}
	return baseDiff;
}

function shiftAndApplyLog(steps,type, callback, objectVerifier) {
	const {context, logList } = this;
	if(objectVerifier){
		this.objectVerifier = objectVerifier;
	}
	let logEntry, baseDiff;
	if((type === "undo")){
		baseDiff = jump(-steps,'backward',logList,objectVerifier);
	} else {
		baseDiff = jump(steps,'forward',logList,objectVerifier);
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
	constructor(context, objectVerifier){
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
		this.objectVerifier = objectVerifier;

		updateLastActiveState.call(this)
		this.objectVerifier;
		preInsert = preInsert.bind(this);
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


