import diff from '@statetree/diff';
import Logger from './../lib';
import {DiffLogger} from './../lib';

var obj = {
	value: 0,
	id: "hi",
	getState: function(){
		return this.value;
	},
	setState: function(val){
		this.value = val;
	},
	applyDiff: function(val){
		this.value = val;
	},
	asJson:function (value, isDelete, onlyValue) {
		value = value === undefined ? this.getState() : value;
		if (onlyValue) {
			return value;
		}
		const json = {id: "hi"};
		json['classDefName'] = isDelete ? undefined : this.classDefName;
		json['displayName'] = isDelete ? undefined : this.displayName;
		json['value'] = isDelete ? undefined : value;
		return json;
	},
	getDiff: function(value){

		const currentValue = this.getState();


		const diffvalue = diff(value, currentValue)

		if(diffvalue !== undefined){
			return {
				forward:this.asJson(currentValue),
				backward:this.asJson(value)
			};
		} else {
			return {
				forward:this.id,
				backward:this.id
			};
		}
	}
}


function saveCallback(log){
	console.log(log)
}

var logger = new DiffLogger(obj);
logger.setSaveCallback(saveCallback)


obj.setState(1);
logger.save(true);

obj.setState(2);
logger.save(true);

obj.setState(3);
logger.save(true);

obj.setState(4);
logger.save(true);

obj.setState(5);
logger.save(true);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.undo();
console.log('After Undo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);

logger.undo(2);
console.log('After Undo 2 Steps: ', obj.value);

logger.redo(2);
console.log('After Redo 2 Steps: ', obj.value);

obj.setState(6);
logger.save(true);

logger.undo();
console.log('After Undo: ', obj.value);

logger.redo();
console.log('After redo: ', obj.value);


console.log('----------------------------------------')
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


var logger = new Logger(obj.getState());
logger.setSaveCallback(saveCallback)

obj.setState('three', 3);
logger.save(obj.getState());

obj.setState('four' ,4);
logger.save(obj.getState());

obj.setState('five' ,5);
logger.save(obj.getState());


let log;
log = logger.undo();
obj.applyDiff(log);
console.log('After 1 Undo: ', obj.value);

log =  logger.undo();
obj.applyDiff(log);
console.log('After 2 Undo: ', obj.value);


log =  logger.redo();
obj.applyDiff(log);
console.log('After 1 redo: ', obj.value);

log =  logger.redo();
obj.applyDiff(log);
console.log('After 2 redo: ', obj.value);


log =  logger.undo(2);
obj.applyDiff(log);
console.log('After Undo 2 Steps: ', obj.value);

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









