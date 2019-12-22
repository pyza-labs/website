import { Router } from '@reach/router';
import React from "react";
import { Footer, Navbar } from "./components";
import { AboutUs, Home } from "./containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" default/>
        <AboutUs path="about"/>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
