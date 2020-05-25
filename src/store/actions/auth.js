import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId,
    };
};

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT,

    };
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        },expirationTime * 1000)
    };
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,

        }
        const key='AIzaSyCgTNhKT4929oCXB0-pze0cuEU_m06aoDU'
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+key;
        if (!isSignup){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+key;
        }
        axios.post(url,authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn));

        })
        .catch(err => {
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(err.response.data);
              } else if (err.request) {
                console.log(err.request);
              } else {
                console.log("Error", err.message);
              }
            dispatch(authFail(err.response.data.error));
        });
    };
};