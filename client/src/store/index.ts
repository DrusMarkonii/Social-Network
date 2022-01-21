import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  userReducers  from './reducers/userReducer';



const rootReducer = combineReducers({
  users: userReducers,
});

type RootState = ReturnType<typeof rootReducer>

export const useTypesSelector:TypedUseSelectorHook<RootState>  = useSelector

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
