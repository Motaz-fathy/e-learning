import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import {LoginAction} from '../../store/Actions/AuthActions'
import { useDispatch, useSelector } from "react-redux";
export const LoginForm = () => {
  const dispatch = useDispatch() 
  const {data , error } = useSelector(state => state.LoginReducer)
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "must be at least 8 characters long")
  });

  const handleSubmit = values => {
    dispatch(LoginAction(values?.email , values?.password))

    if(!!data) {
        navigate("/")
    }
  };
  
  return (
    <div className="w-1/2 max-w-md bg-white p-8 shadow max-sm:w-full flex flex-col items-center ">
      <span className=" text-2xl font-bold mb-4 ">Login</span>
      {!!error && <span className="text-md font-bold mb-4 text-red-500"> user not found </span>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-5/6 m-auto h-auto p-2 gap-3">
          <div className="">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <div className="">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mt-1"
            />
          </div>

          <button
            type="submit"
            className=" h-10 hover:bg-sky-700 text-white font-bold  rounded 
          w-full flex justify-center items-center bg-sky-300 my-3
          focus:outline-none focus:ring focus:border-blue-500"
          >
            Login
          </button>
        </Form>
      </Formik>

      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>

    </div>
  );
};
