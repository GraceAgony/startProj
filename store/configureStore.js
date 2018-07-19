import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index.js';

export default createStore(reducers);