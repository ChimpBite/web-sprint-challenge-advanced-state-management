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

// send data
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ActionTypes.ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ActionTypes.ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ActionTypes.ADD_ERROR, payload: err });
    });
};

// any form errors
export const addError = error => {
  return { type: ActionTypes.FORM_ERROR, payload: error };
};

//Task List:

// Complete
