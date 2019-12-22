import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import reducers from './reducers';
import questions from '../data/questions';
import { composeWithDevTools } from 'redux-devtools-extension';
// Neveikia tas composeWithDevTools, not sure why.
// TO DO: fix;
export default createStore(reducers, { questions }, composeWithDevTools(
    applyMiddleware(logger)
));