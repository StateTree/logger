import diff from '@statetree/diff';
import Logger from './../lib';
import {DiffLogger} from './../lib';

function saveCallback(log){
	console.log('Diff Log: ', log)
}

var obj = {
	value: {
		one: 1,
		two: 2
	},
	getState: function(){
		return {...this.value};
	},

	setState: function(key, val){
		this.value[key] = val;
	},

	applyDiff: function(val){
		this.value = val;
	}
}


var state = obj.getState();
console.log('StateO: ', state);
var logger = new Logger(state);
logger.setSaveCallback(saveCallback)

obj.setState('three', 3);
state = obj.getState();
console.log('State1: ', state);
logger.save(obj.getState());

obj.setState('four' ,4);
state = obj.getState();
console.log('State2: ', state);
logger.save(obj.getState());

obj.setState('five' ,5);
state = obj.getState();
console.log('State3: ', state);
logger.save(obj.getState());


let log;
log = logger.undo();
obj.applyDiff(log);
console.log('After 1 Undo: ',  obj.value);

log =  logger.undo();
obj.applyDiff(log);
console.log('After 2 Undo: ', obj.value);


log =  logger.redo();
obj.applyDiff(log);
console.log('After 1 redo: ',  obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After 2 redo: ',obj.value);


log =  logger.undo(2);
obj.applyDiff(log);
console.log('After Undo 2 Steps: ',obj.value);

log =  logger.redo(2);
obj.applyDiff(log);
console.log('After Redo 2 Steps: ', obj.value);

obj.setState('six' , 6);
logger.save(obj.getState());

log =  logger.undo();
obj.applyDiff(log);
console.log('After Undo: ', obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After redo: ', obj.value);


obj.setState('six' , 66);
logger.save(obj.getState());

log =  logger.undo();
obj.applyDiff(log);
console.log('After Undo: ', obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After redo: ', obj.value);

obj.setState('six' , {
	num: 6
});
logger.save(obj.getState());

log =  logger.undo();
obj.applyDiff(log);
console.log('After Undo: ', obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After redo: ', obj.value);

obj.setState('six' , {
	num: 66
});
obj.setState('five' , {
	num: 55
});
logger.save(obj.getState());

log =  logger.undo();
obj.applyDiff(log);
console.log('After Undo: ', obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After redo: ', obj.value);









