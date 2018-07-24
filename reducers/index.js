import { combineReducers } from 'redux';
import children from './childrenReducer';
const rootReducer = combineReducers({
   children,
});

export default rootReducer;