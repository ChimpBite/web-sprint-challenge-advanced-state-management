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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

//Task List:

//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
