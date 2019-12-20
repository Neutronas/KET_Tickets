import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducers from './reducers';
import questions from '../data/questions';

export default createStore(reducers, { questions }, applyMiddleware(logger));
