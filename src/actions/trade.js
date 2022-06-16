import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL } from '../Constants/ProductConstants.js'

export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        const { data } = await axios.get("/trade");


        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};


export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "LoginRequest",
        });

        const { data } = await axios.post(
            "/user/login",
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        dispatch({
            type: "LoginSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get("/user/myProfile");

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message,
        });
    }
};

export const logoutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutUserRequest",
        });

        await axios.get("/user/logout");

        dispatch({
            type: "LogoutUserSuccess",
        });
    } catch (error) {
        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message,
        });
    }
};