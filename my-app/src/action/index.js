export const add = amount => {
	return {
		type: 'ADD_COUNTER',
		payload: amount
	};
};

export const remove = amount => {
	return {
		type: 'REMOVE_COUNTER',
		payload: amount
	};
};
export const clearAll = amount => {
	return {
		type: 'CLEARALL_COUNTER',
		payload: amount
	};
};