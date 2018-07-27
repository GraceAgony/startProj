import { combineReducers } from 'redux';
import children from './childrenReducer';
import form from './formReducer';
import NavigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
   children,
    form,
    NavigationReducer
});

export default rootReducer;