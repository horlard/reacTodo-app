import {combineReducers} from 'redux';
import FacebookAuth from './facebookauthReducer';
import {reducer} from 'redux-form';

export default combineReducers({
    facebookAuth : FacebookAuth,
    form:reducer
})