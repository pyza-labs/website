import { Router } from '@reach/router';
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-use';
import { Footer, Navbar } from "./components";
import { AboutUs, Home } from "./containers";

const App = () => {
  const [darkNavbar, setDarkNavbar] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDarkNavbar(window.scrollY > 800);
    })
  }, []);

  const { pathname } = useLocation();

  return (
    <div>
      <Navbar dark={pathname !== '/' ? true : darkNavbar}/>
      <Router>
        <Home path="/" default/>
        <AboutUs path="about"/>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
