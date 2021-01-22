import { createStore, applyMiddleware } from 'redux';

// redux dev tool extensions
import { composeWithDevTools } from 'redux-devtools-extension';

// redux logger
import logger from 'redux-logger';

// redux thunk for async
import thunk from 'redux-thunk';

// bring in reducer
import smurfReducer from './reducers/smurfReducer';

// keep middleware in one const
const middlewares = [thunk, logger];

const store = createStore(
  smurfReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
