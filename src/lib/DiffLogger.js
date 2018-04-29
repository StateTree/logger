import diff from 'diff';
import PivotedLinkedList from 'pivoted-linked-list';

function shiftAndApplyLog(steps, callback) {
	const {context, logList, setter } = this;

	const logEntry = logList.shiftPivot(steps);
	const diffObject = logEntry.element;
	const diffState = diffObject.value;

	setter.call(context, diffState, callback);
};

export default class DiffLogger {
	constructor(saveCallback){
		this.context;
		this.setter;
		this.diffMethod;

		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = saveCallback;
		this.enable = true;
	}
}

DiffLogger.prototype.setContext = function(context, setter, diffMethod){


	if(!setter){
		console.warn('Context setter function is required');
		return;
	}
	this.context = context;
	this.setter = setter;
	this.diffMethod = diffMethod;
};

DiffLogger.prototype.setSaveCallback = function(saveCallback){
	this.saveDiffCallback = saveCallback
};

DiffLogger.prototype.removeSaveCallback = function(){
	this.saveDiffCallback = null;
};

DiffLogger.prototype.undo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, -steps, callback);
};

DiffLogger.prototype.redo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	shiftAndApplyLog.call(this, steps, callback);
};

DiffLogger.prototype.save = function(){
	if(this.enable){
		let getDiff = this.diffMethod ? this.diffMethod : diff;
		if(this.context){
			const currentDiff = this.getCurrentLog();
			const currentDiffValue = currentDiff ? currentDiff.value : undefined;
			const diff = getDiff(currentDiffValue);

			if (diff.value !== undefined) { // Change occurred log them
				this.logList.insert(diff);
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(diff);
	}
};


DiffLogger.prototype.getCurrentLog = function(){
	if(this.logList ){
		return this.logList.getPivotElement();
	}
	return null;
};


