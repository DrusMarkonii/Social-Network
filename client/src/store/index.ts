import { createStore, combineReducers } from 'redux';
import userReducers from './reducers/userReducer';
// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducers
});

const store = createStore(rootReducer);

export default store;
