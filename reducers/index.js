import { combineReducers } from 'redux';
import children from './childrenReducer';
import form from './formReducer';
import NavigationReducer from "./navigationReducer";
import data from './dataReducer';

const rootReducer = combineReducers({
    children,
    form,
    data,
    NavigationReducer
});

export default rootReducer;