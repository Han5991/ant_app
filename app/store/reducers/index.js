import {combineReducers} from 'redux';
import User from './user_reducer';
import Diaries from './diary_reducers';

const rootReducer = combineReducers({
  User,
  Diaries,
});

export default rootReducer;
