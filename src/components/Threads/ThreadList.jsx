import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThreads } from '../Actions/ThreadAction'; 

function ThreadList() {
  const threads = useSelector(state => state.thread.threads); 
  const isLoading = useSelector(state => state.thread.loading); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchThreads()); 
  }, [dispatch]);

  
  return (
    <div className="container">
      <h2 className="title">Thread List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="discussions-container">
          {threads.map((thread) => (
            <div key={thread.id} className="discussion-card">
              <div className="discussion-header">
                <h3 className="discussion-title">{thread.title}</h3>
                <p className="created-by">Created by: {thread.ownerName}</p>
              </div>
              <div className="discussion-body">
                <p className="discussion-content">{thread.body}</p>
              </div>
              <div className="discussion-footer">
                <button className="action-button">Like</button>
                <button className="action-button">Unlike</button>
                <button className="action-button">Share</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThreadList;
