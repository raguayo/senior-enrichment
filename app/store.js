//Store!
/* eslint-disable no-underscore-dangle */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, createLogger()));

export default store;
