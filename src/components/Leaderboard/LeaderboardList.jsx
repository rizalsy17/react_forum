import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeaderboard } from '../Actions/LeaderboardAction';

function LeaderboardList() {
  const leaderboardData = useSelector(state => state.leaderboard.leaderboardData);
  const isLoading = useSelector(state => state.leaderboard.loading);
  const error = useSelector(state => state.leaderboard.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="leaderboard-list">
          {leaderboardData.map((item, index) => (
            <li key={index} className="leaderboard-item">
              <div className="user-info">
                <p className="user-name">{item.user.name}</p>
              </div>
              <div className="score-info">
                <p className="user-score">{item.score}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeaderboardList;
