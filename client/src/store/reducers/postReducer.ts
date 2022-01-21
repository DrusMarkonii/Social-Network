interface PostState {
  posts: any[];
}

interface PostAction {
  type: string;
  payload?: any
}

const FETCH_POSTS = 'FETCH_POSTS';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const initialStatePost: PostState = {
  posts: [],
};

// eslint-disable-next-line default-param-last
export const postsReducer = (state = initialStatePost, action: PostAction) => {
  switch (action.type) {
  case FETCH_POSTS:
    return { ...state, posts: [...state.posts, ...action.payload] };
  default:
    return state;
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
export const addPostsAction = (payload:any) => ({type: FETCH_POSTS, payload })
export default postsReducer;
