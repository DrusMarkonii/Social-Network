const defaultState = {
  isAuth: false,
  currentUser: {},
};

function userReducer({ state = defaultState, action }:any) {
  switch (action.type) {
  default:
    return state;
  }
}

export default userReducer;
