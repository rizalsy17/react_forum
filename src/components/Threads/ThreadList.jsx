import React, { useState, useEffect } from 'react';
import { getAllThreads } from '../../api/api'; // import API function

function ThreadList() {
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllThreads();
        setThreads(response.data.threads);
        setIsLoading(false); // Set isLoading to false when data is loaded
      } catch (error) {
        console.error(error); // handle error
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Thread List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>
              <h3>{thread.title}</h3>
              <p>{thread.body}</p>
              <p>Created at: {thread.createdAt}</p>
              <p>Total Comments: {thread.totalComments}</p>
              <p>Owner: {thread.owner.name}</p>
              {thread.owner.avatar && <img src={thread.owner.avatar} alt="Avatar" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThreadList;
