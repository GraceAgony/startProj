import { combineReducers } from 'redux';
import children from './childrenReducer';
import form from './formReducer'
const rootReducer = combineReducers({
   children,
    form
});

export default rootReducer;