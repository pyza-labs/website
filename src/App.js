import React from "react";
import { Home } from "./containers";
import { Navbar } from "./components";
import { Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <Footer />
    </div>
  );
};

export default App;
