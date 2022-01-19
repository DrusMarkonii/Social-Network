import allTypes from './actions/allTypes';

const defaultState = {
  isAuth: false,
  currentUser: {},
};

function userReducer({ state = defaultState, action }: any) {
  switch (action.type) {
  case allTypes.AUTH:
    return action.payload;
  default:
    return state;
  }
}

export default userReducer;
