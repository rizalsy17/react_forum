import axios from 'axios';

const baseURL = 'https://forum-api.dicoding.dev/v1';

// Register User
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${baseURL}/register`, {
      name,
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getAllUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/users`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Get own profile
  export const getOwnProfile = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const createThread = async (token, title, body, category) => {
    try {
      const response = await axios.post(`${baseURL}/threads`, {
        title,
        body,
        category
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // See All Threads
  export const getAllThreads = async () => {
    try {
      const response = await axios.get(`${baseURL}/threads`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // See Detail Thread
  export const getThreadDetail = async (threadId) => {
    try {
      const response = await axios.get(`${baseURL}/threads/${threadId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const createComment = async (token, threadId, content) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/comments`, {
        content
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const upVoteThread = async (token, threadId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/up-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Down-vote Thread
  export const downVoteThread = async (token, threadId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/down-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Neutralize Thread vote
  export const neutralizeThreadVote = async (token, threadId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/neutral-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Up-vote Comment
  export const upVoteComment = async (token, threadId, commentId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/comments/${commentId}/up-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Down-vote Comment
  export const downVoteComment = async (token, threadId, commentId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/comments/${commentId}/down-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Neutralize Comment vote
  export const neutralizeCommentVote = async (token, threadId, commentId) => {
    try {
      const response = await axios.post(`${baseURL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const getLeaderboards = async () => {
    try {
      const response = await axios.get(`${baseURL}/leaderboards`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

