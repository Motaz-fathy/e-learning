import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Saidbar } from "./components/Saidbar";
import { Container } from "./components/Container";
export const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [profile, set_profile] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className=" flex h-screen max-sm:z-[9999999] w-full rtl:overflow-x-hidden">

      {/* Sidebar */}
      <Saidbar 
      showSidebar={showSidebar}
      setShowSidebar={setShowSidebar} 
      />

      {/* Main Content */}
      <main className="relative flex flex-col flex-grow w-4/5">
        
        {/* Navbar */}
        <Navbar
          toggleSidebar={toggleSidebar}
          profile={profile}
          set_profile={set_profile}
        />

        {/* Container */}
        <Container />

      </main>
    </div>
  );
};
