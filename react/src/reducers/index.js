import combineReducers from 'redux';
// import additional reducers
import userWantsLogin from './userWantsLogin';

const rootReducer = combineReducers({
  wantsLogin: userWantsLogin
});

export default rootReducer;
