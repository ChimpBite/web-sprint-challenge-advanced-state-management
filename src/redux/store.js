import { createStore, applyMiddleware, combineReducers } from 'redux';

// redux dev tool extensions
import { composeWithDevTools } from 'redux-devtools-extension';

// redux logger
import logger from 'redux-logger';

// redux thunk for async
import thunk from 'redux-thunk';

// bring in reducer
import smurfReducer from './reducers/smurfReducer';

// combine reducers to keep all reducers in one spot
const rootReducer = combineReducers({
  smurfReducer,
});

// keep middleware in one const
const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
