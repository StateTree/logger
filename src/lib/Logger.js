import PivotedLinkedList from 'pivoted-linked-list';
import {deepClone} from './helper';
import {getObjectDiff, combineDiff, applyDiff} from '@statetree/diff';

function preInsert(currentLog, newLog, nextLog){
	if(currentLog, newLog, nextLog) { // middle insert
		const newLogForwardDiff = newLog.element.forward;
		const newLogBackwardDiff = newLog.element.backward;
		const nextLogForwardDiff = nextLog.element.forward;
		const nextLogBackwardDiff = nextLog.element.backward;
		const newCombinedForwardDiff = combineDiff(nextLogBackwardDiff, newLogForwardDiff)
		const newCombinedBackwardDiff = combineDiff(nextLogForwardDiff, newLogBackwardDiff)

		newLog.forward = newCombinedForwardDiff;
		newLog.backward = newCombinedBackwardDiff;
	}
}

function jump(steps, direction, logList){
	let logEntry, baseDiff = {};
	while(steps > 0){
		if(direction === 'backward'){
			logEntry = logList.pivot;
			logList.shiftPivot(-1);
		} else if(direction === 'forward'){
			logEntry = logList.shiftPivot(1);
		}
		baseDiff = combineDiff(baseDiff, logEntry.element);
		steps = steps - 1;
	}
	return baseDiff
}

function getLog(logList, steps, type) {
	if((type === "undo")){
		return jump(-steps,'backward',logList);
	} else {
		return jump(steps,'forward',logList);
	}
};

export default class Logger {
	constructor(context, isCopy = false){
		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = null;
		this.enable = true;
		let initialState;
		if(context && context.getState && context.applyDiff){
			this.context = context;
			initialState = context.getState();
		} else  {
			initialState = context;
		}
		this.lastActiveState = isCopy ? initialState : deepClone(initialState);
	}
}


Logger.prototype.setSaveCallback = function(saveCallback){
	this.saveDiffCallback = saveCallback
};

Logger.prototype.removeSaveCallback = function(){
	this.saveDiffCallback = null;
};

Logger.prototype.undo = function(steps){
	if (isNaN(steps)) {
		steps = 1;
	}
	const forwardBackwardDiff = getLog(this.logList, -steps, "undo");
	const diffState = forwardBackwardDiff['backward'];

	let activeState;
	if(this.context && this.context.applyDiff){
		activeState = this.context.applyDiff(diffState);
	} else {
		activeState = applyDiff(this.lastActiveState, diffState);
	}

	this.lastActiveState = activeState;
	return deepClone(activeState);
};

Logger.prototype.redo = function(steps){
	if (isNaN(steps)) {
		steps = 1;
	}
	const forwardBackwardDiff =  getLog(this.logList, steps, "redo");
	const diffState = forwardBackwardDiff['forward'];

	let activeState;
	if(this.context && this.context.applyDiff){
		activeState = this.context.applyDiff(diffState);
	} else {
		activeState = applyDiff(this.lastActiveState, diffState);
	}
	this.lastActiveState = activeState;
	return deepClone(activeState);
};


Logger.prototype.save = function(newState){
	if(this.enable){
		let forwardBackwardDiff = getObjectDiff(this.lastActiveState, newState);
		const {forward, backward} = forwardBackwardDiff;

		if (typeof forward === "object" && typeof backward === "object") { // Change occurred log them
			this.logList.insert(forwardBackwardDiff, preInsert);
			this.lastActiveState = deepClone(newState);
		}
		this.saveDiffCallback && this.saveDiffCallback(forwardBackwardDiff);
	}
};


Logger.prototype.getCurrentLog = function(){
	if(this.logList ){
		return this.logList.getPivotElement();
	}
	return null;
};

Logger.prototype.clear = function(){
	this.logList.reset();
}


