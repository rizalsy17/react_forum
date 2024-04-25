// ThreadAction.js

import { getAllThreads, getOwnProfile,createThread, getThreadDetail, upVoteThread as upVoteThreadAPI, downVoteThread as downVoteThreadAPI, neutralizeThreadVote as neutralizeThreadVoteAPI } from '../../api/api';

export const FETCH_THREADS_REQUEST = 'FETCH_THREADS_REQUEST';
export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
export const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';
export const FETCH_THREAD_DETAIL_REQUEST = 'FETCH_THREAD_DETAIL_REQUEST';
export const FETCH_THREAD_DETAIL_SUCCESS = 'FETCH_THREAD_DETAIL_SUCCESS';
export const FETCH_THREAD_DETAIL_FAILURE = 'FETCH_THREAD_DETAIL_FAILURE';
export const VOTE_UP_THREAD_SUCCESS = 'VOTE_UP_THREAD_SUCCESS';
export const VOTE_UP_THREAD_FAILURE = 'VOTE_UP_THREAD_FAILURE';
export const VOTE_DOWN_THREAD_SUCCESS = 'VOTE_DOWN_THREAD_SUCCESS';
export const VOTE_DOWN_THREAD_FAILURE = 'VOTE_DOWN_THREAD_FAILURE';
export const NEUTRALIZE_THREAD_VOTE_SUCCESS = 'NEUTRALIZE_THREAD_VOTE_SUCCESS';
export const NEUTRALIZE_THREAD_VOTE_FAILURE = 'NEUTRALIZE_THREAD_VOTE_FAILURE';
export const CREATE_THREAD_SUCCESS = 'CREATE_THREAD_SUCCESS';
export const CREATE_THREAD_FAILURE = 'CREATE_THREAD_FAILURE';

export const fetchThreadsRequest = () => ({
  type: FETCH_THREADS_REQUEST,
});

export const fetchThreadsSuccess = (threads) => ({
  type: FETCH_THREADS_SUCCESS,
  payload: threads,
});

export const fetchThreadsFailure = (error) => ({
  type: FETCH_THREADS_FAILURE,
  payload: error,
});

export const fetchThreadDetailRequest = () => ({
  type: FETCH_THREAD_DETAIL_REQUEST
});

export const fetchThreadDetailSuccess = (threadDetail) => ({
  type: FETCH_THREAD_DETAIL_SUCCESS,
  payload: threadDetail
});

export const fetchThreadDetailFailure = (error) => ({
  type: FETCH_THREAD_DETAIL_FAILURE,
  payload: error
});

export const createThreadSuccess = (thread) => ({
  type: CREATE_THREAD_SUCCESS,
  payload: thread
});

export const createThreadFailure = (error) => ({
  type: CREATE_THREAD_FAILURE,
  payload: error
});

export const voteUpThreadSuccess = (thread) => ({
  type: VOTE_UP_THREAD_SUCCESS,
  payload: thread
});

export const voteUpThreadFailure = (error) => ({
  type: VOTE_UP_THREAD_FAILURE,
  payload: error
});

export const voteUpThread = (threadId) => {
  return async (dispatch) => {
    try {
      const response = await upVoteThreadAPI(threadId);
      dispatch(voteUpThreadSuccess(response.data));
      dispatch(fetchThreads()); // Memperbarui daftar thread setelah pembaruan status
    } catch (error) {
      dispatch(voteUpThreadFailure(error));
    }
  };
};

export const voteDownThreadSuccess = (thread) => ({
  type: VOTE_DOWN_THREAD_SUCCESS,
  payload: thread
});

export const voteDownThreadFailure = (error) => ({
  type: VOTE_DOWN_THREAD_FAILURE,
  payload: error
});

export const voteDownThread = (threadId) => {
  return async (dispatch) => {
    try {
      const response = await downVoteThreadAPI(threadId);
      dispatch(voteDownThreadSuccess(response.data));
      dispatch(fetchThreads()); // Memperbarui daftar thread setelah pembaruan status
    } catch (error) {
      dispatch(voteDownThreadFailure(error));
    }
  };
};

export const neutralizeThreadVoteSuccess = (thread) => ({
  type: NEUTRALIZE_THREAD_VOTE_SUCCESS,
  payload: thread
});

const neutralizeThreadVoteFailure = (error) => ({
  type: NEUTRALIZE_THREAD_VOTE_FAILURE,
  payload: { vote: error } // Sertakan properti vote yang sesuai dengan error
});

export const neutralizeThreadVote = (threadId) => {
  return async (dispatch) => {
    try {
      const response = await neutralizeThreadVoteAPI(threadId);
      dispatch(neutralizeThreadVoteSuccess(response.data));
    } catch (error) {
      dispatch(neutralizeThreadVoteFailure(error));
    }
  };
};

export const fetchThreads = () => async (dispatch) => {
  dispatch(fetchThreadsRequest()); // Mulai fetching thread

  try {
    const profileData = await getOwnProfile(); // Dapatkan profil pengguna yang masuk
    const ownerName = profileData.name; // Ambil nama pengguna

    const response = await getAllThreads(); // Ambil daftar thread dari API
    const threads = response.data.threads;

    // Tambahkan nama pengguna ke setiap thread
    const threadsWithOwnerNames = threads.map(thread => ({ ...thread, ownerName }));

    dispatch(fetchThreadsSuccess(threadsWithOwnerNames)); // Dispatch action sukses dengan data thread
  } catch (error) {
    dispatch(fetchThreadsFailure(error)); // Dispatch action gagal dengan pesan error
  }
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
    dispatch(fetchThreadDetailRequest());
    try {
      const threadDetail = await getThreadDetail(threadId);
      dispatch(fetchThreadDetailSuccess(threadDetail));
    } catch (error) {
      dispatch(fetchThreadDetailFailure(error.message));
    }
  };
};
