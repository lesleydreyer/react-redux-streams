import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';//import named import (reducer) and then rename it to formReducer to be less confusing since there's other reducers like auth
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
    //replaceMe: () => 'asdfsfsd' (basic reducer for getting project going before you have reducers coded)
});