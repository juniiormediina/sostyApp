import {combineReducers} from 'redux';
import {userReducer} from './userReducer';

export const reducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof reducer>;
