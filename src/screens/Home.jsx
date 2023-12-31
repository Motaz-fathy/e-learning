import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";

export const Home = () => {
  const {data} = useSelector(state => state.LoginReducer)
  const username = data?.data?.username
  return (
  <div className="flex flex-col items-center gap-2">
  <Navbar />
    <div className="bg-gray-200 dark:bg-black  w-full min-h-screen flex flex-col items-center ">
      <Header />

    </div>
  </div>
  );
};
