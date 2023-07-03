import axios from "axios";
import store from "../app/store";



export const signInAPI = (data,callback, callbackErr) => {
    return (dispatch) => {
        axios.post(`https://stylewe-laravel.vercel.app/api/auth/signup`, data)
            .then(function (res) {
                store.dispatch({
                    type: 'NEW_USER',
                    payload: res
                })
                localStorage.setItem('api_token', JSON.stringify(res.data.api_token))
            })
            .catch(function (err) {

            })
    }
}
export const LoginAPI = (data,callback, callbackErr) => {
    return (dispatch) => {
        axios.post(`https://stylewe-laravel.vercel.app/api/auth/login`, data)
            .then(function (res) {
                store.dispatch({
                    type: 'LOGIN',
                    payload: res,
                    ...state,
                    isAuthenticated: true
                })

            })
            .catch(function (err) {

            })
    }
}


