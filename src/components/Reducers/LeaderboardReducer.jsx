// LeaderboardReducer.jsx

import { FETCH_LEADERBOARD_REQUEST, FETCH_LEADERBOARD_SUCCESS, FETCH_LEADERBOARD_FAILURE } from '../Actions/LeaderboardAction';

const initialState = {
  loading: false,
  leaderboardData: [],
  error: null
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADERBOARD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        leaderboardData: action.payload,
        error: null
      };
    case FETCH_LEADERBOARD_FAILURE:
      return {
        ...state,
        loading: false,
        leaderboardData: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
