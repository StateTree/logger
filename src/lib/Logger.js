import PivotedLinkedList from 'pivoted-linked-list';
import {deepClone} from './helper';
import {getDiff, combineDiff, applyDiff} from '@statetree/diff';

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
	let logEntry, baseDiff;
	while(steps > 0){
		if(direction === 'backward'){
			logEntry = logList.pivot;
			logList.shiftPivot(-1);
		} else if(direction === 'forward'){
			logEntry = logList.shiftPivot(1);
		}
		const forwardBackwardDiff = logEntry.element;
		const diffToAdd = forwardBackwardDiff[direction];
		baseDiff = combineDiff(baseDiff, diffToAdd);
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
	constructor(initialState, isCopy = false){
		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = null;
		this.enable = true;

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
	const diffState = getLog(this.logList, -steps, "undo");
	const activeState = applyDiff(this.lastActiveState, diffState);
	this.lastActiveState = activeState;
	return deepClone(activeState);
};

Logger.prototype.redo = function(steps){
	if (isNaN(steps)) {
		steps = 1;
	}
	const diffState =  getLog(this.logList, steps, "redo");
	const activeState = applyDiff(this.lastActiveState, diffState);
	this.lastActiveState = activeState;
	return deepClone(activeState);
};


Logger.prototype.save = function(newState){
	if(this.enable){
		let forwardBackwardDiff = getDiff(this.lastActiveState, newState);
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


