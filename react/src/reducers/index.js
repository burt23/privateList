import { combineReducers } from 'redux';

// import additional reducers
import userWantsLogin from './userWantsLogin';

const rootReducer = combineReducers({
	userWantsLogin
});

export default rootReducer;

console.log('root', rootReducer);
