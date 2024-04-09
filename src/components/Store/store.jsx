import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/AuthReducer';
import threadReducer from '../Reducers/ThreadReducer';
import commentReducer from '../Reducers/CommentReducer';
import leaderboardReducer from '../Reducers/LeaderboardReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    thread: threadReducer,
    comment: commentReducer,
    leaderboard: leaderboardReducer,
  }
});

export default store;
