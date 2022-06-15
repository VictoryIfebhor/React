import React from "react";

import { AppProvider } from "./util/context";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Submenu from "./components/Submenu";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
};

export default App;
