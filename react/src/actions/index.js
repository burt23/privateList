export const USER_WANTS_LOGIN = 'USER_WANTS_LOGIN';

export function userWantsLogin(selection = false) {
  return {
    type: USER_WANTS_LOGIN,
    payload: selection
  };
}
