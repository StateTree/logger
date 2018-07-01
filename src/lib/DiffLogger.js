import PivotedLinkedList from 'pivoted-linked-list';

function shiftAndApplyLog(steps, callback) {
	if(steps === 0){
		return;
	}
	const {context, logList } = this;
	const logEntry = logList.shiftPivot(steps);
	const forwardBackwardDiff = logEntry.element;
	const {forward, backward} = forwardBackwardDiff;
	let diffState;//State as JSON
	if(steps < 0){
		diffState = backward
	} else if( steps > 0){
		diffState = forward
	}
	const diffValue = diffState.value ;
	const diffLoggerInstance = this;
	context.applyDiff.call(context, diffValue, function(){
		updateLastActiveState.call(diffLoggerInstance);
		callback()
	});

};

function updateLastActiveState(){
	this.lastActiveState = this.context.getState();
}

function preInsert(log1, log2){
	if(log1, log2) {
		const log1Forward = log1.element.forward;

		log1.element.forward = log2.element.backward;
		log2.element.backward = log1Forward;
	}
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
		let forwardBackwardDiff;
		if(this.context){
			forwardBackwardDiff = this.context.getDiff(this.lastActiveState, true);
			const {forward, backward} = forwardBackwardDiff;

			if (typeof forward === "object" && typeof backward === "object") { // Change occurred log them
				this.logList.insert(forwardBackwardDiff,preInsert);
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


