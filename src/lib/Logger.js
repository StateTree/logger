import diff from 'diff';
import LogEntry from './LogEntry';

function applyDiff(steps, callback) {
	const {context, undoLog, redoLog, getter, setter} = this;
	let { prevState } = this;
	const absSteps = Math.abs(steps);
	let stepsRemaining = Math.min(absSteps, steps < 0 ? undoLog.length : redoLog.length);
	if (stepsRemaining > 0) {
		let logEntry, diff;
		while (stepsRemaining-- > 0) {
			if (steps < 0) { // undo
				logEntry = undoLog.pop();
				redoLog.unshift(logEntry);
				diff = logEntry.prev;
			} else { //redo
				logEntry = redoLog.shift();
				undoLog.push(logEntry);
				diff = logEntry.next;
			}

			if (stepsRemaining === 0) {
				this.prevState = diff.value;
			}
		}
		// since primitive are immutable we don't call them in spread declaration above
		this.diffApplied = true;
		// now after reaching the Log entry apply the diff to current state
		setter.call(context, diff, callback);
	} else {
		// since primitive are immutable we don't call them in spread declaration above
		this.diffApplied = false;
	}

};

export default class Logger {
	constructor(saveCallback){
		this.context;
		this.getter;
		this.setter;
		this.diffMethod;

		this.undoLog = [];
		this.redoLog = [];

		this.prevState = null;
		this.nextId = 0;

		this.saveDiffCallback = saveCallback;

		this.diffApplied = false;
		this.enable = true;
	}
}

Logger.prototype.setContext = function(context, getter, setter, diffMethod){
	if(!getter){
		console.warn('Context getter function is required');
		return;
	}

	if(!setter){
		console.warn('Context setter function is required');
		return;
	}
	this.context = context;
	this.getter = getter;
	this.setter = setter;
	this.diffMethod = diffMethod;
	this.prevState = getter.call(context);
};

Logger.prototype.setSaveCallback = function(saveCallback){
	this.saveDiffCallback = saveCallback
};

Logger.prototype.removeSaveCallback = function(){
	this.saveDiffCallback = null;
};

Logger.prototype.undo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, -steps, callback);
};

Logger.prototype.redo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, steps, callback);
};

Logger.prototype.save = function(){
	if(this.diffApplied){
		this.diffApplied = false;
		return;
	}

	if(this.enable){
		let log;
		let getDiff = this.diffMethod ? this.diffMethod : diff;
		if(this.context){
			const state = this.getter.call(this.context);
			const diffObject = getDiff(this.prevState, state);
			// Change occurred log them
			if (diffObject.current !== undefined) {
				log = new LogEntry(this.nextId++, diffObject.current, diffObject.prev);
				this.undoLog.push(log);
				this.prevState = state;
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(log);
	}
};


