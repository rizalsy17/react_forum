import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/AuthReducer';
import threadReducer from '../Reducers/ThreadReducer';
import commentReducer from '../Reducers/CommentReducer';
import leaderboardReducer from '../Reducers/LeaderboardReducer';

const checkAuthStatus = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { isAuthenticated: true, token } : { isAuthenticated: false, token: null };
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    thread: threadReducer,
    comment: commentReducer,
    leaderboard: leaderboardReducer,
  },
  preloadedState: {
    auth: checkAuthStatus(),
  },
});

export default store;
