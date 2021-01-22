import axios from 'axios';

import { ActionTypes } from './action.types';

export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: ActionTypes.FETCHING_SMURFS }); // fetching data
    promise
      .then(res => {
        dispatch({
          type: ActionTypes.FETCH_SUCCESS,
          payload: res.data,
        }); // dispatching data
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ActionTypes.FETCH_ERROR });
      }); // errors if fetching is broken
  };
};

export const addSmurf = newSmurf => dispatch => {
  return dispatch => {
    axios.post('http://localhost:333/smurfs', newSmurf).then(res => {
      dispatch({ type: ActionTypes.ADD_SMURF, payload: res.data }); // adds the new created smurf
    });
  };
};

//Task List:

// Complete
