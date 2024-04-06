// reducers/rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import threadReducer from './ThreadReducer';
import commentReducer from './CommentReducer';

const RootReducer = combineReducers({
  auth: authReducer,
  threads: threadReducer,
  comments: commentReducer
});

export default RootReducer;
