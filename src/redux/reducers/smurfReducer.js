import { ActionTypes } from '../actions/action.types';

export const initialState = {
  smurfs: [
    {
      id: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      name: 'Poppa Smurf',
      position: 'Village Leader',
      nickname: 'Pops',
      description:
        'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.',
    },
  ],
  fetchingSmurfs: false,
  error: '',
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: '',
      };
    case ActionTypes.FETCH_ERROR:
      return { ...state, error: action.payload, fetchingSmurfs: false };
    case ActionTypes.ADD_SMURF:
      return { ...state, fetchingSmurfs: true };
    case ActionTypes.ADD_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: '',
      };
    case ActionTypes.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default smurfReducer;

//Task List:

//Complete
