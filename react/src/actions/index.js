export const USER_WANTS_LOGIN = 'USER_WANTS_LOGIN';
export const USER_LISTS = 'USER_LISTS';

export function userWantsLogin(selection = false) {
  return {
    type: USER_WANTS_LOGIN,
    payload: selection
  };
}

export function userLists(arr = ['one', 'two', 'three']) {
  return {
    type: USER_LISTS,
    payload: arr
  };
}

