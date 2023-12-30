import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const {data} = useSelector(state => state.LoginReducer)
  const username = data?.data?.username
  return (
  <>
  <Navbar />
    <div className="light:bg-light-primary dark:bg-dark-primary  w-full flex flex-col items-center ">
      
        <div className="w-full  flex justify-center items-center  text-3xl font-bold ">Welcome @ <span className="text-xl "> {username} </span></div>
        <div className=" w-full  flex justify-center items-center text-2xl font-bold">
         This website is Coming SooN
        </div>
    </div>
  </>
  );
};
