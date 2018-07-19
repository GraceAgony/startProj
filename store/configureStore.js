<<<<<<< HEAD
import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    return store;
}
=======
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers/index.js';

export default createStore(reducers);
>>>>>>> master
