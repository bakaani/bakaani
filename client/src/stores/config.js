import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const configureStore = (reducers) => {
  const middlewares = [thunk];
  return createStore(reducers, applyMiddleware(...middlewares));
}

export default configureStore;
