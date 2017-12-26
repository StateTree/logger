import Logger from './../lib';

var obj = {
	value: 0,
	getValue: function(){
		return this.value;
	},
	setValue: function(val){
		this.value = val;
	}
}

function saveCallback(log){
	console.log(log)
}

var logger = new Logger(null,saveCallback);
logger.setContext(obj,obj.getValue, obj.setValue);


obj.setValue(1);
logger.save();

obj.setValue(2);
logger.save();

obj.setValue(3);
logger.save();

obj.setValue(4);
logger.save();

obj.setValue(5);
logger.save();

console.log('Before Undo 2 Steps: ', obj.value);
logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);

logger.undo(7);
console.log('After Undo 7 Steps more than available steps: ', obj.value);
logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);
logger.redo(7);
console.log('After Redo 7 Steps more than available steps: ', obj.value);


