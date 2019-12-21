import React from "react";
import { Home, AboutUs } from "./containers";
import { Navbar } from "./components";
import { Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
