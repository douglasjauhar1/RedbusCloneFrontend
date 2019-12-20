// import { fetchApi } from "../Service/api";
import { axiosDelete, axiosPost, axiosGet } from "../../Utils/API"
const axios = require('axios')

export const createNewUser = (payload) => {
    return async (dispatch) => {

        try {
          dispatch({
            type: "CREATE_USER_LOADING"
          });
          const response = await axiosPost('signup', payload, null)
          const resGetUser = await axiosGet('profile', response.data.result.token)
          console.log("username"+payload.username);
          console.log(resGetUser);
          console.log(response)
          if(response.data.status === 200) {
            dispatch({
                type: "CREAT_USER_SUCCESS"
            });
            dispatch({
                type: "AUTH_USER_SUCCESS",
                token: response.data.result.token
            });
            dispatch({
                type: "GET_USER_SUCCESS",
                payload: resGetUser.data.result[0]
            });

            return response;
          } else {
            throw response;
          }

        } catch (error) {
            dispatch({
                type: "CREAT_USER_FAIL",
                payload: error
            });
            return error;
        }
    }
}

export const loginUser = (payload) => {
    // console.log(payload)
    return async (dispatch) => {

        try {
          dispatch({
            type: "LOGIN_USER_LOADING"
          });
          const response = await axiosPost('signin', payload, null)
          const resGetUser = await axiosGet('profile', response.data.result.token)
        
            
          if(response.data.status === 200) {
            dispatch({
                type: "LOGIN_USER_SUCCESS",
            });
            dispatch({
                type: "AUTH_USER_SUCCESS",
                token: response.data.result.token
            });
            dispatch({
                type: "GET_USER_SUCCESS",
                payload: resGetUser.data.result[0]
            });
            return response;
          } else {
            
            throw response;
          }

        } catch (error) {
            dispatch({
                type: "LOGIN_USER_FAIL",
                payload: error
            });
            return error;
        }
    }
}

export const logoutUser = () => {
    return async (dispatch, getState) => {
        const state = getState();
        console.log(state);
        
        try {
            const {authReducer: {authData: {token}}} = state;
            const response = await axiosDelete("logout", token)
            dispatch({
                type: "USER_LOGGED_OUT_SUCCESS"
            });
        } catch (e) {
            console.log(e);
        }
    }
}
