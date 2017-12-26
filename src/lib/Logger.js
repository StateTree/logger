import diff from 'diff';
import LogEntry from './LogEntry';

function applyDiff(steps) {
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
				prevState = getter.call(context);
			}
		}
		// now after reaching the Log entry apply the diff to current state
		setter.call(context, diff);
	}
};

export default class Logger {
	constructor(diffMethod, saveCallback){
		this.context;
		this.getter;
		this.setter;

		this.undoLog = [];
		this.redoLog = [];

		this.prevState = null;
		this.nextId = 0;

		this.diffMethod = diffMethod;
		this.saveDiffCallback = saveCallback;

		this.enable = true;
	}
}

Logger.prototype.setContext = function(context, getter, setter){
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


