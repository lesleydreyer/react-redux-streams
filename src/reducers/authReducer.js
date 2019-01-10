import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

//state=INITIAL_STATE is a default value in case nothing else is there
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:  //could also skip the types.js and hard code string 'SIGN_OUT' and 'SIGN_IN'
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};