import { combineReducers } from 'redux';
import children from './childrenReducer';
import formChange from './formReducer'
const rootReducer = combineReducers({
   children,
    formChange
});

export default rootReducer;