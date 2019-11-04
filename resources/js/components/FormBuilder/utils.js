require('lodash.uniqueid');

export const applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
	let itemToAdd = payload;
  
    if (removedIndex !== null) {
		itemToAdd = result.splice(removedIndex, 1)[0];
	}
  
    if (addedIndex !== null) {
		// triggers when pallet item gets copied over only
		if(removedIndex == null) result.splice(addedIndex, 0, Object.assign({...itemToAdd}, {id: _.uniqueId('board_field_')}));
		// triggers when sorting only on the board
		else result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
};