// import { fetchApi } from "../Service/api";
import { axiosDelete, axiosPost, axiosGet } from "../../Utils/API"
const axios = require('axios')

export const createNewUser = (payload) => {
    return async (dispatch) => {

        try {
          dispatch({
            type: "CREATE_USER_LOADING"
          });
        //   const response = await fetchApi("/auth/register/", "POST", payload, 200);
          const resGetUser = await axiosGet('http://3.82.228.249:4000/company/user/' + payload.username)
          console.log("username"+payload.username);
          console.log(resGetUser);
          console.log(response)
          if(response) {
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
        //   const resGetUser = await axios.get('http://3.82.228.249:4000/company/user/' + payload.username)
            // console.log("level:"+response.responseBody.result.level);
            // console.log(response);
            
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
                payload: "Hello"
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
            const response = await axiosDelete("/auth/logout", token)
            dispatch({
                type: "USER_LOGGED_OUT_SUCCESS"
            });
        } catch (e) {
            console.log(e);
        }
    }
}
