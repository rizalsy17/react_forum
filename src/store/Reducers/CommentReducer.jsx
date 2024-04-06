// commentReducer.js

// Initial state
const initialState = {
    comments: [],
    loading: false,
    error: null,
  };
  
  // Action types
  const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
  const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
  const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
  
  // Reducer function
  const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COMMENTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_COMMENTS_SUCCESS:
        return {
          ...state,
          comments: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_COMMENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CommentReducer;
  