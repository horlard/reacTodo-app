import {combineReducers} from 'redux';
import FacebookAuth from './facebookauthReducer';
import {reducer} from 'redux-form';
import ActionReducer from './actionReducer';

export default combineReducers({
    facebookAuth : FacebookAuth,
    form:reducer,
    actionReducer : ActionReducer


})