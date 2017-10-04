import { combineReducers } from 'redux';

// import additional reducers
import userWantsLogin from './userWantsLogin';
import userLists from './userLists';

const rootReducer = combineReducers({
  userWantsLogin,
  userLists
});

export default rootReducer;

console.log('root', rootReducer);
