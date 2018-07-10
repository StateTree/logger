import PivotedLinkedList from 'pivoted-linked-list';
import {combineDiff} from './helper';

function shiftAndApplyLog(steps,type, callback, objectVerifier) {
	const {context, logList } = this;
	let logEntry, baseDiff;
	if(steps === 0){
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
	} else {
		if((type === "undo")){
			steps = -steps;
			while(steps >= 0){
				logEntry = logList.pivot;
				logList.shiftPivot(-1 );
				const forwardBackwardDiff = logEntry.element;
				const diffState = forwardBackwardDiff.backward;
				const diffValue = diffState.value ;
				baseDiff = combineDiff(baseDiff, diffValue, objectVerifier);
				steps = steps - 1;
			}
		} else {
			while(steps > 0){
				logEntry = logList.shiftPivot(1);
				const forwardBackwardDiff = logEntry.element;
				const diffState = forwardBackwardDiff.forward;
				const diffValue = diffState.value ;
				baseDiff = combineDiff(baseDiff, diffValue);
				steps = steps - 1;
			}
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
				this.logList.insert(forwardBackwardDiff);
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


