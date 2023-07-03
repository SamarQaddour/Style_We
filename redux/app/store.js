import {composeWithDevTools} from "redux-devtools-extension";
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from "../reducers/index";
const initalState = {};
const middleWare =[thunk];
const store = createStore(rootReducers, initalState, composeWithDevTools(applyMiddleware(...middleWare)));


export default store;
