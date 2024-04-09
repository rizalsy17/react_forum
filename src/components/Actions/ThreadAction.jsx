// actions/threadActions.js

import { getAllThreads, createThread, getThreadDetail, upVoteThread, downVoteThread, neutralizeThreadVote as neutralizeThreadVoteAPI } from '../../api/api';

export const FETCH_THREADS_REQUEST = 'FETCH_THREADS_REQUEST';
export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
export const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';
export const NEUTRALIZE_THREAD_VOTE_SUCCESS = 'NEUTRALIZE_THREAD_VOTE_SUCCESS';
export const NEUTRALIZE_THREAD_VOTE_FAILURE = 'NEUTRALIZE_THREAD_VOTE_FAILURE';


export const fetchThreadsRequest = () => ({
  type: FETCH_THREADS_REQUEST
});

export const fetchThreadsSuccess = (threads) => ({
  type: FETCH_THREADS_SUCCESS,
  payload: threads
});

export const fetchThreadsFailure = (error) => ({
  type: FETCH_THREADS_FAILURE,
  payload: error
});

export const neutralizeThreadVoteSuccess = (data) => ({
    type: NEUTRALIZE_THREAD_VOTE_SUCCESS,
    payload: data
  });
  
  export const neutralizeThreadVoteFailure = (error) => ({
    type: NEUTRALIZE_THREAD_VOTE_FAILURE,
    payload: error
  });
  

export const fetchThreads = () => {
  return async (dispatch) => {
    dispatch(fetchThreadsRequest());
    try {
      const response = await getAllThreads();
      dispatch(fetchThreadsSuccess(response.data.threads));
    } catch (error) {
      dispatch(fetchThreadsFailure(error));
    }
  };
};

export const createNewThread = (token, title, body, category) => {
  return async (dispatch) => {
    try {
      const response = await createThread(token, title, body, category);
      dispatch(createThreadSuccess(response.data));
    } catch (error) {
      dispatch(createThreadFailure(error));
    }
  };
};

export const fetchThreadDetail = (threadId) => {
  return async (dispatch) => {
    try {
      const response = await getThreadDetail(threadId);
      dispatch(fetchThreadDetail(response.data));
    } catch (error) {
      dispatch(fetchThreadDetail(error));
    }
  };
};

export const voteUpThread = (token, threadId) => {
  return async (dispatch) => {
    try {
      const response = await upVoteThread(token, threadId);
      dispatch(voteUpThreadSuccess(response.data));
    } catch (error) {
      dispatch(voteUpThreadFailure(error));
    }
  };
};

export const voteDownThread = (token, threadId) => {
  return async (dispatch) => {
    try {
      const response = await downVoteThread(token, threadId);
      dispatch(voteDownThread(response.data));
    } catch (error) {
      dispatch(voteDownThread(error));
    }
  };
};

export const neutralizeThreadVote = (token, threadId) => {
    return async (dispatch) => {
      try {
        const response = await neutralizeThreadVoteAPI(token, threadId);
        dispatch(neutralizeThreadVoteSuccess(response.data));
      } catch (error) {
        dispatch(neutralizeThreadVoteFailure(error));
      }
    };
};
