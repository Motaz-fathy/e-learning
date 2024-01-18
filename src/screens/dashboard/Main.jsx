import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Saidbar } from "./components/Saidbar";
import { Container } from "./components/Container";
import { Bluring_effect } from "../../shared/Bluring_effect";
export const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [profile, set_profile] = useState(false);
  const [toggle_content, set_toggle_content] = useState(0);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="relative isolate flex min-h-screen  w-full rtl:overflow-y-hidden  dark:bg-gray-800">
      <Bluring_effect />
      {/* Sidebar */}
      <Saidbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        set_toggle_content={set_toggle_content}
      />

      {/* Main Content */}
      <main className="relative flex flex-col flex-grow w-4/6 ">
        {/* Navbar */}
        <Navbar
          toggleSidebar={toggleSidebar}
          profile={profile}
          set_profile={set_profile}
        />
        {/* Container */}
        <Container toggle_content={toggle_content} />
      </main>
    </div>
  );
};
