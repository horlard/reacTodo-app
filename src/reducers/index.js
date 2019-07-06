import {combineReducers} from 'redux';
import FacebookAuth from './facebookauthReducer';

export default combineReducers({
    facebookAuth : FacebookAuth
})