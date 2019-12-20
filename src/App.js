import React from "react";
import { Home } from "./containers";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />

      <Home />
    </div>
  );
};

export default App;
