import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Main_about } from "../components/about/Main_about";
import { Service_main } from "../components/service/Service_main";
import { Main_proceses } from "../components/proceses/Main_proceses";
import { Main_play } from "../components/Play_video/Main_play";

export const Home = () => {
  const {data} = useSelector(state => state.LoginReducer)
  const username = data?.data?.username
  return (
  <div className="flex flex-col items-center " >
    {/* <Info /> */}
    
    <div className="bg-gray-200 dark:bg-gray-800  w-full min-h-auto flex flex-col items-center ">
      <Header />
      <Main_about />
      <Service_main />
      <Main_proceses />
      <Main_play />
    </div>
  </div>
  );
};
