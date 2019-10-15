import { createStore } from 'redux';
import createRootReducer from '../reducers';

const configureStore = (history) => {
  return createStore(createRootReducer(history))
};

export { configureStore };
