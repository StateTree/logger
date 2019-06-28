function copyJson(json){
	const stringJson = JSON.stringify(json);
	return JSON.parse(stringJson);
}

function arrayToObject(array , idName, replaceWithId = false, returnIds = false){
	let object = null;
	let ids = returnIds ? [] : undefined;
	if(array){
		object = {};
		let index, id, child;
		for(index = 0; index < array.length; index++){
			child = array[index];
			if(typeof child === 'string'){
				id = child;
			} else {
				id = child[idName];
			}
			object[id] = child;
			replaceWithId && (array[index] = id);
			returnIds && ids.push(id);
		}
	}
	if(returnIds){
		return {
			obj: object,
			keys: ids
		}
	}
	return object;
}

export function combineDiffLogs (baseDiff, diffToAdd, objectVerifier, isCollectionObject = false) {
	const baseType = typeof (baseDiff); // the type of null is 'object'
	const diffType = typeof (diffToAdd);

	if (baseDiff == null || diffToAdd == null || baseType !== diffType || !isCollectionObject ) {
		baseDiff = diffType === 'object' ?  copyJson(diffToAdd) : diffToAdd // reached bottom most level
	} else  {
		const baseLookup = arrayToObject(baseDiff, 'id', true);
		const arrayAsObj = arrayToObject(diffToAdd, 'id', false, true);
		const diffLookUp = arrayAsObj.obj;
		const diffToAddKeys = arrayAsObj.keys;

		// apply each stateAsJson diff appearing in diffToAdd
		for (let i = 0; i < diffToAddKeys.length; i++) {
			const id = diffToAddKeys[i];
			const oldState = baseLookup[id];
			const newState = diffLookUp[id];

			if(oldState){
				if (typeof oldState !== 'string') {
					if(typeof newState !== 'string'){
						if (newState['classDefName']!== oldState['classDefName']) { // delete operation where classNames are not equal
							baseLookup[id] = copyJson(newState);
						} else {
							const isCollectionObject = newState['classDefName'] === objectVerifier;
							oldState['value'] = combineDiff(oldState['value'], newState['value'],objectVerifier, isCollectionObject);
						}
					}
				} else {
					(oldState !== newState) && (baseLookup[id] = copyJson(newState));
				}
			} else {
				baseLookup[id] = copyJson(newState);
				baseDiff.push(id);
			}

		}

		// change baseDiff back from names to typed states
		for (let i = 0; i < baseDiff.length; i++) {
			baseDiff[i] = baseLookup[baseDiff[i]];
		}

	}

	return baseDiff;
};

export function deepClone(source){
	if (typeof source !== 'object' || source === null) {
		return source
	}
	if (Array.isArray(source)) {
		return deepArray(source)
	}
	return deepObject(source)
}

function deepArray(source){
	return source.map((value) => {
		return deepClone(value)
	})
}

function deepObject(source){
	const result = {}
	Object.keys(source).forEach((key) => {
		const value = source[key]
		result[key] = deepClone(value)
	}, {})
	return result

}