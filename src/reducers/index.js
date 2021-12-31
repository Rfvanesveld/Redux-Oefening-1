import counterReducer from "./counter";
import loggedReducer from "./islogged";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    myCount: counterReducer,
    islogged: loggedReducer
})

export default allReducers