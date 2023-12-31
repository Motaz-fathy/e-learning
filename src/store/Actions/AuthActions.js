import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from "./Types";

const url = "https://hamdyadam.pythonanywhere.com/";

// login action
export const LoginAction = (email, password) => async dispatch => {
  console.log(email, password);
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data } = await axios.post(
      `${url}users/login/`,
      { email: email, password: password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

// register action

export const RegisterAction = (
  username,
  email,
  password,
  confirm_password,
  phone_number,
  role,

) => async dispatch => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const  {data}  = await axios.post(
      `${url}users/register/`,
      {
        "username": username,
        "email": email,
        "password": password,
        "confirm_password": confirm_password,
        "phone_number": phone_number,
        "role": role,
      },
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        console.log("register action data ",data)

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
