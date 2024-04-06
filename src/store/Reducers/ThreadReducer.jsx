// threadReducer.js

// Initial state
const initialState = {
    threads: [],
    loading: false,
    error: null,
  };
  
  // Action types
  const FETCH_THREADS_REQUEST = 'FETCH_THREADS_REQUEST';
  const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
  const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';
  
  // Reducer function
  const ThreadReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_THREADS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_THREADS_SUCCESS:
        return {
          ...state,
          threads: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_THREADS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ThreadReducer;
  