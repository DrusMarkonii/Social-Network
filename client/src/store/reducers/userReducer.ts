// import { UserState, } from '../../types/user';

interface UserState {
  users: any[];
}

const FETCH_USERS = 'FETCH_USERS';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const initialState: UserState = {
  users: [],
};

const userReducer = ( action: any, state = initialState,) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: [...state.users, action.payload] };
  }
};

// type UserAction = {
//     type: typeof FETCH_USERS | typeof FETCH_USERS_SUCCESS | typeof FETCH_USERS_ERROR
// }

// const userReducer = (action:UserAction, state = initialState): UserState => {
//   switch (action.type) {
//   case FETCH_USERS:
//     return { loading: true, error: null, users: [] };
//   case FETCH_USERS_SUCCESS:
//     return { loading: false, error: null, users: action.payload };
//   case FETCH_USERS_ERROR:
//     return { loading: false, error: action.payload, users: [] };
//   default:
//     return state;
//   }
// };

export default userReducer;
