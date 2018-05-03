import diff from 'diff';
import PivotedLinkedList from 'pivoted-linked-list';

function shiftAndApplyLog(steps, callback) {
	const {context, logList } = this;
	const logEntry = logList.shiftPivot(steps);
	const diffValue = logEntry.element;

	context.setState.call(context, diffValue, function(){
		updateLastActiveState.call(this);
		callback()
	});

};

function updateLastActiveState(){
	this.lastActiveState = this.context.getState();
}

export default class DiffLogger {
	constructor(context,saveCallback, diffFunction){
		if(!context){
			console.error("Context cant be null");
		}

		if(!context.setState){
			console.error("Context needs to implement setState method");
		}

		if(!context.getState){
			console.error("Context needs to implement getState method");
		}

		this.context = context;
		this.diffMethod = diffFunction;

		this.logList = new PivotedLinkedList([]);
		this.saveDiffCallback = saveCallback;
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
		let diffValue;
		if(this.context){
			//to-do getState Could be expensive process, if tree is big
			const currentState = this.context.getState();
			diffValue = getDiff(this.lastActiveState, currentState);

			if (diffValue !== undefined) { // Change occurred log them
				this.logList.insert(diffValue);
				updateLastActiveState.call(this)
			}
		}
		this.saveDiffCallback && this.saveDiffCallback(diffValue);
	}
};


DiffLogger.prototype.getCurrentLog = function(){
	if(this.logList ){
		return this.logList.getPivotElement();
	}
	return null;
};


