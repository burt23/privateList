import { GET_LISTS } from '../actions';

const getLists = (state = ['one', 'two', 'three'], action) => {
	switch (action.type) {
		case GET_LISTS:
		  return action.payload;
		default: 
		  return state;
	}
};

export default getLists;