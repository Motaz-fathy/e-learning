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
  first_name,
  last_name,
  email,
  password,
  confirm_password,
  phone_number,
  birth_date,
  country,
  role,
  gender,
  marital_status
) => async dispatch => {
  console.log(birth_date)
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
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "confirm_password": confirm_password,
        "phone_number": phone_number,
        "dob": birth_date,
        "country": country,
        "role": role,
        "gender": gender,
        "marital_status": marital_status
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
