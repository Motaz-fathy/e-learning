import React from "react";
import { LoginForm } from "./LoginForm";
import { SvgSection } from "./SvgSection";

export const Login = () => {


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="w-1/2 max-sm:w-0">
        <SvgSection />
      </section>
      <LoginForm />
    </div>
  );
};
