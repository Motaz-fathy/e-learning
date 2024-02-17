import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import {LoginAction} from '../../store/Actions/AuthActions'
import { useDispatch, useSelector } from "react-redux";
export const LoginForm = () => {
  const dispatch = useDispatch() 
  const {data , error , loading} = useSelector(state => state.LoginReducer)

  const success = data?.success

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

  const handleSubmit = async (values) => {
    await dispatch(LoginAction(values?.email , values?.password))

    if(data !== undefined && success === true) {
      navigate("/")
    }

  };

  return (
    <div className="w-1/2 max-w-md    max-sm:w-full flex flex-col items-center m-auto">
      <span className=" text-2xl font-bold mb-4 ">Sign in to your account</span>
      
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
          onClick={handleSubmit}
            type="submit"
            className="flex w-full justify-center rounded-md my-2 bg-sky-300   hover:bg-sky-200 px-3 py-1.5 text-sm font-semibold leading-6 dark:text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Login {!!loading && "..."}
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

      <div className="w-full mt-4 flex justify-center items-center gap-2">
      <button className="bg-gray-100 shadow-md bg-opacity-5 hover:bg-gray-200 text-black text-xs py-2    rounded w-1/3 flex justify-center items-center gap-2">
        <span>Google</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail" data-locator-target="vscode"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </button>
      <hr className="  bg-black w-5 " />
      <span>or</span>
      <hr className="  bg-black w-5 " />
      <button className="bg-gray-100 shadow-md bg-opacity-5 hover:bg-gray-200 text-black text-xs py-2    rounded w-1/3 flex justify-center items-center gap-2">
        <span>Facebook</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook" data-locator-target="vscode"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> 

      </button>
    </div>

    </div>
  );
};
