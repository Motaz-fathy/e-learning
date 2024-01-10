import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Saidbar } from "./components/Saidbar";
import { Container } from "./components/Container";
export const Main = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [profile, set_profile] = useState(false);
  const [toggle_content, set_toggle_conntent] = useState(0);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="relative flex min-h-screen max-sm:z-[9999999] w-full rtl:overflow-y-hidden  dark:bg-gray-600">
      {/* Sidebar */}
      <Saidbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        set_toggle_conntent={set_toggle_conntent}
      />

      {/* Main Content */}
      <main className="relative flex flex-col flex-grow w-4/6 dark:bg-gray-600">
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
