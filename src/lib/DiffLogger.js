import PivotedLinkedList from 'pivoted-linked-list';

function shiftAndApplyLog(steps, callback) {
	const {context, logList } = this;
	const logEntry = logList.shiftPivot(steps);
	const diffState = logEntry.element; //State as JSON
	const diffValue = diffState ? diffState.value : undefined;
	const diffLoggerInstance = this;
	context.setState.call(context, diffValue, function(){
		updateLastActiveState.call(diffLoggerInstance);
		callback()
	});

};

function updateLastActiveState(){
	this.lastActiveState = this.context.getState();
}

export default class DiffLogger {
	constructor(context,saveCallback){
		if(!context){
			console.error("Context cant be null");
		}

		if(!context.setState){
			console.error("Context needs to implement setState method");
		}

		if(!context.getState){
			console.error("Context needs to implement getState method");
		}

		if(!context.getDiff){
			console.error("Context needs to implement getDiff method");
		}

		this.context = context;

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
		let diffValue;
		if(this.context){
			diffValue = this.context.getDiff(this.lastActiveState);

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


