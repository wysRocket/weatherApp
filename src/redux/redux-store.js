import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from "./weather-reducer";

let reducers = combineReducers ({
    form: formReducer,
    weather: weatherReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;