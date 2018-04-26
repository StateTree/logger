import diff from 'diff';
import PivotedLinkedList from 'pivoted-linked-list';

function applyDiff(steps, callback) {
	const {context, logList, setter} = this;

	const listEntry = logList.shiftPivot(steps);
	const diffObject = listEntry.element;

	// now after reaching the Log entry apply the diff to current state
	setter.call(context, diffObject, callback);
};

export default class ListLogger {
	constructor(saveCallback){
		this.context;
		this.getter;
		this.setter;
		this.diffMethod;

		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = saveCallback;
		this.enable = true;
	}
}

ListLogger.prototype.setContext = function(context, getter, setter, diffMethod){
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
};

ListLogger.prototype.setSaveCallback = function(saveCallback){
	this.saveDiffCallback = saveCallback
};

ListLogger.prototype.removeSaveCallback = function(){
	this.saveDiffCallback = null;
};

ListLogger.prototype.undo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, -steps, callback);
};

ListLogger.prototype.redo = function(steps, callback){
	if (isNaN(steps)) {
		steps = 1;
	}
	applyDiff.call(this, steps, callback);
};

ListLogger.prototype.save = function(){
	if(this.enable){
		let getDiff = this.diffMethod ? this.diffMethod : diff;
		if(this.context){
			const state = this.getter.call(this.context);
			const diff = getDiff(this.prevState, state);

			if (diff.value !== undefined) { // Change occurred log them
				this.logList.insert(diff);
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(diff);
	}
};

ListLogger.prototype.getCurrentLog = function(){
	if(this.logList ){
		return this.logList.getPivotElement();
	}
	return null;
};


