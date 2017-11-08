import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER} from '../constants';

const INITIAL_STATE = { email: '', password: '', user: '', err: '', isLoading: null };

export default (state=INITIAL_STATE, action) => {
    console.log(action.type);
    switch(action.type){
        case EMAIL_CHANGED:
            return {
                ...state, email: action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state, password: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state, user: action.payload, err: '', isLoading: false, email: '', password: ''
            }
        case LOGIN_USER_FAIL:
            return {
                ...state, err: 'Authentication Failed', password: '' , isLoading: false
            }
        case LOGIN_USER:
            return {
                ...state, isLoading: true
            }
        default:
            return state;
    }
}