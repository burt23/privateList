import { USER_WANTS_LOGIN } from '../actions';

const userWantsLogin = (state = false, action) => {
  switch(action.type) {
    case USER_WANTS_LOGIN:
      return action.payload
    default: 
      return state
  };
}

export default userWantsLogin;

