import { ActionTypes } from '../actions/action.types';

export const initialState = {
  smurfs: [],
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

//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
