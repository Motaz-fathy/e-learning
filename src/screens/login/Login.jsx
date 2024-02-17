import React from "react";
import { LoginForm } from "./LoginForm";
import { SvgSection } from "./SvgSection";
import { Bluring_effect } from "../../shared/Bluring_effect";
import { Bluring_circl } from "../../shared/Bluring_circl";
export const Login = () => {


  return (
    <div className="relative overflow-hidden isolate  w-full flex items-center justify-between min-h-screen bg-gray-100 ">
      <Bluring_effect />
      <Bluring_circl color={'blue'} />
      <SvgSection />
       <LoginForm />
    </div>
  );
};
