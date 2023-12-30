import React, { useEffect, useState } from "react";
import { SvgSection } from "./SvgSection";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {RegisterAction} from '../../store/Actions/AuthActions'
import axios from "axios";
import { SelectCountry } from "../../shared/SelectCountry";
import { formatDate } from "../../shared/Functions";
export const Register = () => {

  const [countries , set_contries] = useState([])
  const [country,set_country] = useState({})
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password : "",
    confirm_password : "" ,
    confirm_password : "" ,
    birth_date : "" ,
    gender: "",
    role: "",
    country: "",
    marital_status: ""
  });
  console.log("country" , country)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for the current field
  };
  useEffect(() => {
    get_countries()
  } , [])
  const get_countries = async () => {
   try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const {data} = await axios.get('https://hamdyadam.pythonanywhere.com/users/countries/list-create/' , config)
    set_contries(data?.data?.results)
    console.log(data?.data?.results)
   } catch (error) {
    console.log(error)
   }
  }
  const validateStep1 = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "user name is required";
      isValid = false;
    }

    if (formData.first_name.trim() === "") {
      newErrors.first_name = "First name is required";
      isValid = false;
    }

    if (formData.last_name.trim() === "") {
      newErrors.last_name = "Last name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    
    if (formData.password.trim() === "") {
      newErrors.password = "password must be at last 8 char";
      isValid = false;
    }

    if (formData.confirm_password.trim() === "") {
      newErrors.confirm_password = "confirm_password must be identical password  ";
      isValid = false;
    }

    if (formData.phone_number.trim() === "") {
      newErrors.phone_number = "Phone number is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.birth_date.trim() === "") {
      newErrors.birth_date = "birth date is required";
      isValid = false;
    }

    if (formData.gender.trim() === "") {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (formData.role.trim() === "") {
      newErrors.role = "Role is required";
      isValid = false;
    }

    if (formData.country.trim() === "") {
      newErrors.country = "Country is required";
      isValid = false;
    }

    if (formData.marital_status.trim() === "") {
      newErrors.marital_status = "Marital status is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      // Perform registration logic here
      console.log("Registration successful");
    }
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
 const handelSubmit = (e) => {
  e.preventDefault()
  dispatch(RegisterAction(
    formData?.username ,
    formData?.first_name ,
    formData?.last_name ,
    formData?.email , 
    formData?.password ,
    formData?.confirm_password ,
    formData?.phone_number,
    formatDate(formData?.birth_date),
    country?.id ,
    formData?.role,
    formData?.gender,
    formData?.marital_status   
       ))
 }
  return (
    <div className="w-full  flex items-center justify-between min-h-screen bg-gray-100 gap-5">
      <div className="w-1/2 max-sm:hidden">
        <SvgSection />{" "}
      </div>
      <form className="w-1/2 max-sm:w-full flex flex-col items-center ">
        {currentStep === 1 &&
          <div className="w-full max-w-md bg-white p-8 shadow max-sm:w-full flex flex-col items-center ">
            <h2 className="w-full flex justify-center items-center">Signup</h2>

            <div className="w-full">
              <label htmlFor="username">User name </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`${errors.username
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.username &&
                <p className="text-red-500">
                  {errors.username}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className={`${errors.first_name
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.first_name &&
                <p className="text-red-500">
                  {errors.first_name}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className={`${errors.last_name
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.last_name &&
                <p className="text-red-500">
                  {errors.last_name}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${errors.email
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.email &&
                <p className="text-red-500">
                  {errors.email}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className={`${errors.phone_number
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.phone_number &&
                <p className="text-red-500">
                  {errors.phone_number}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`${errors.password
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.password &&
                <p className="text-red-500">
                  {errors.password}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="confirm_password">confirm password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                className={`${errors.confirm_password
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.confirm_password &&
                <p className="text-red-500">
                  {errors.confirm_password}
                </p>}
            </div>

            <button
              type="button"
              className="h-10 hover:bg-sky-700 text-white font-bold  rounded 
        w-full flex justify-center items-center bg-sky-300 my-3
        focus:outline-none focus:ring focus:border-blue-500"
              onClick={handleNext}
            >
              Next
            </button>

            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                you have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>}

        {currentStep === 2 &&
          <div className="w-full max-w-md bg-white p-8 shadow max-sm:w-full flex flex-col items-center">
            <h2> Personal Info</h2>

            <div className="w-full">
              <label htmlFor="birth_date">birth date </label>
              <input
                type="date"
                id="birth_date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleChange}
                className={`${errors.birth_date
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              />
              {errors.birth_date &&
                <p className="text-red-500">
                  {errors.birth_date}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${errors.gender
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender &&
                <p className="text-red-500">
                  {errors.gender}
                </p>}
            </div>

            <div className="w-full">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`${errors.role
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
              </select>
              {errors.role &&
                <p className="text-red-500">
                  {errors.role}
                </p>}
            </div>

            {/* <div className="w-full">
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`${errors.country
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              >
                <option value="">Select country </option>
               {countries?.length > 0 && countries?.map((item) => {
                  return <option  className="w-full h-10 hover:bg-gray-400" onClick={() => {
                    set_country(item)
                  }}>{item?.name}</option>
               }) }
              </select>
              {errors.country &&
                <p className="text-red-500">
                  {errors.country}
                </p>}
            </div> */}
            <div className="w-full ">
            <label htmlFor="marital_status">Country</label>
             <SelectCountry items={countries} set_country={set_country}/>
            </div>
            <div className="w-full">
              <label htmlFor="marital_status">marital_status</label>
              <select
                id="marital_status"
                name="marital_status"
                value={formData.marital_status}
                onChange={handleChange}
                className={`${errors.marital_status
                  ? "border-red-500"
                  : "border-gray-300"} w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500`}
              >
                <option value="">Select marital_status</option>
                <option value="single">single</option>
                <option value="married">married</option>
              </select>
              {errors.marital_status &&
                <p className="text-red-500">
                  {errors.marital_status}
                </p>}
            </div>

            <div className="w-full flex justify-center items-center gap-5 mt-5">
              <button
                type="button"
                className=" h-10 hover:bg-sky-700 text-white font-bold  rounded 
        w-full flex justify-center items-center bg-sky-300 my-3
        focus:outline-none focus:ring focus:border-blue-500"
                onClick={handlePrev}
              >
                Previous
              </button>
              <button
                type="button"
                className=" h-10 hover:bg-sky-700 text-white font-bold  rounded 
        w-full flex justify-center items-center bg-sky-300 my-3
        focus:outline-none focus:ring focus:border-blue-500"
                onClick={handelSubmit}
              >
                Register
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">
                you have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>}
      </form>
    </div>
  );
};
