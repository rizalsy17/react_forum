import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchThreads, voteUpThread, voteDownThread, neutralizeThreadVote } from '../Actions/ThreadAction'; 
import parse from 'html-react-parser';
import { useNavigate, Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';

function ThreadList() {
  const threads = useSelector(state => state.thread.threads); 
  const isLoading = useSelector(state => state.thread.loading); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [allCategories, setAllCategories] = useState([]); 

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchThreads()); 
    } else {
      navigate('/login');
    }
  }, [dispatch, isAuthenticated, navigate]);

  useEffect(() => {
    const getUsersFromThreads = () => {
      const usersData = {};
      threads.forEach(thread => {
        if (!usersData[thread.ownerId]) {
          usersData[thread.ownerId] = { name: thread.ownerName };
        }
      });
      setUsers(usersData);
    };
  
    if (threads.length > 0) {
      getUsersFromThreads();
    }
  }, [threads]);
  
  useEffect(() => {
    const categories = threads.map(thread => thread.category);
    const uniqueCategories = [...new Set(categories)];
    setAllCategories(uniqueCategories.filter(category => category.trim() !== ''));
  }, [threads]);

  const handleVoteUp = async (threadId) => {
    try {
      await dispatch(voteUpThread(threadId));
      dispatch(fetchThreads(threadId));
    } catch (error) {
      console.error('Gagal melakukan vote up:', error);
    }
  };
  
  const handleVoteDown = async (threadId) => {
    try {
      await dispatch(voteDownThread(threadId));
      dispatch(fetchThreads(threadId));
    } catch (error) {
      console.error('Gagal melakukan vote down:', error);
    }
  };
  
  const countNeutralizedComments = (threadId) => {
    const thread = threads.find(thread => thread.id === threadId);
    return thread ? thread.totalComments : 0;
  };

  const groupThreadsByCategory = () => {
    const groupedThreads = {};
    threads.forEach(thread => {
      if (!groupedThreads[thread.category]) {
        groupedThreads[thread.category] = [];
      }
      groupedThreads[thread.category].push(thread);
    });
    return Object.entries(groupedThreads).sort((a, b) => b[1].length - a[1].length);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="discussions-container">
          <h4 style={{color: '#666'}}>Daftar Kategori</h4>
          <div className="category-filter">
            <button onClick={() => handleCategoryFilter('')}>Semua</button>
            {allCategories.map(category => (
              <button key={category} onClick={() => handleCategoryFilter(category)}>#{category}</button>
            ))}
          </div>
          <h3 style={{ color: 'lightgreen' }}>Diskusi Tersedia</h3>
{groupThreadsByCategory().map(([category, categoryThreads]) => (
  <div key={category} className="category-wrapper">
    {selectedCategory === category || selectedCategory === '' ? (
      <>
        <h2 className="category-title">#{category}</h2>
        {categoryThreads.map((thread, index) => (
          <div key={thread.id} className="discussion-card" style={{ borderBottom: index !== threads.length - 1 ? '1px solid #ccc' : 'none', marginTop: '20px', paddingBottom: '20px' }}>
            <div className="discussion-header">
              <Link to={`/threads/${thread.id}`} className="discussion-title">{thread.title}</Link>
              <p>By: {thread.ownerName}</p>
            </div>
            <div className="discussion-body">
              <div className="discussion-content" style={{ color: '#666' }}>{parse(thread.body)}</div>
            </div>
            <div className="discussion-footer" style={{ marginTop: '10px' }}>
              <div className="action-container">
              <button 
  className="action-button" 
  style={{ 
    marginRight: '10px', 
    backgroundColor: thread.liked ? 'blue' : 'black'
  }} 
  onClick={() => handleVoteUp(thread.id)}
>
  <FontAwesomeIcon icon={faThumbsUp} style={{ color: thread.liked ? 'blue' : 'white' }} /> {thread.likes}
</button>
<button 
  className="action-button" 
  style={{ 
    marginRight: '10px', 
    backgroundColor: thread.unliked ? 'red' : 'black'
  }} 
  onClick={() => handleVoteDown(thread.id)}
>
  <FontAwesomeIcon icon={faThumbsDown} style={{ color: thread.unliked ? 'red' : 'white' }} /> {thread.unlikes}
</button>

                <span style={{ marginRight: '10px' }}>
                  <FontAwesomeIcon icon={faShare} style={{ color: 'green' }} /> {countNeutralizedComments(thread.id)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    ) : null}
  </div>
))}

        </div>
      )}
      <div className="create-thread-button">
        <FontAwesomeIcon icon={faPlus} style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} onClick={() => navigate('/create-thread')} />
      </div>
    </div>
  );
}

export default ThreadList;
