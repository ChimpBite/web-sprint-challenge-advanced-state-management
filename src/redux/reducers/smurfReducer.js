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
  newSmurfs: {
    name: '',
    nickname: '',
    position: '',
    description: '',
  },
  fetchingSmurfs: false,
  error: '',
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCHING_SMURFS:
      return { ...state };
    case ActionTypes.FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case ActionTypes.FETCH_ERROR:
      return { ...state, error: action.payload };
    case ActionTypes.ADD_SMURF:
      // new Smurfs to state
      const newSmurfs = {
        name: action.payload,
        position: action.payload,
        nickname: action.payload,
        description: action.payload,
      };
      return { ...state.smurfs, newSmurfs };
    default:
      return state;
  }
};

export default smurfReducer;

//Task List:

//Complete
