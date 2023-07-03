import { combineReducers } from 'redux';
import userReducer from "./useReducer";



const rootReducers = combineReducers({
    userReducer: userReducer,
});

export default rootReducers;