import { Link } from "@reach/router";
import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar as NavbarB,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from "reactstrap";
import pyzaLogo from "../../assets/Logo.png";
import pyzaLogoOrange from "../../assets/LogoOrange.png";
import plusIcon from "../../assets/white.svg";
import Styles from "./Navbar.module.css";

export const Navbar = props => {
  const [expanded = false, setExpanded] = useState();

  return (
<<<<<<< HEAD
    <NavbarB
      className={Styles.container}
      aria-label={props.dark ? "dark" : "light"}
      dark
      expand="lg"
      fixed="top"
    >
=======
    <NavbarB className={Styles.container} aria-label={props.dark ? 'dark' : 'light'} dark expand="md" fixed="top">
>>>>>>> 1a549b2fcb0f3227cba50ce0d61c5be0e036c6d7
      <NavbarBrand>
        <Link className="navbar-brand" to="/">
          <img
            className={Styles.logo}
            alt="logo"
            src={props.dark ? pyzaLogoOrange : pyzaLogo}
          />
        </Link>
      </NavbarBrand>
      <NavbarToggler onClick={() => setExpanded(!expanded)} />
      <Collapse isOpen={expanded} navbar>
        <Nav className="mr-auto" navbar>
<<<<<<< HEAD
          <NavItem>
            <Link className="nav-link" to="#work">
              Work
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="#process">
              Process
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="#services">
              Services
            </Link>
=======
          <NavItem onClick={() => setExpanded(false)}>
            <Link className="nav-link" to="#work">Work</Link>
          </NavItem>
          <NavItem onClick={() => setExpanded(false)}>
            <Link className="nav-link" to="#process">Process</Link>
          </NavItem>
          <NavItem onClick={() => setExpanded(false)}>
            <Link className="nav-link" to="#services">Services</Link>
>>>>>>> 1a549b2fcb0f3227cba50ce0d61c5be0e036c6d7
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem onClick={() => setExpanded(false)} className={Styles.quote}>
            <Link className="nav-link" to="contact">
              <div className={Styles.quoteButton}>
                Ask for a Free Quote!
                <img alt="+" src={plusIcon} />
              </div>
            </Link>
          </NavItem>
<<<<<<< HEAD
          <NavItem>
            <Link className="nav-link" to="about">
              About Us
            </Link>
=======
          <NavItem onClick={() => setExpanded(false)}>
            <Link className="nav-link" to="about">About Us</Link>
>>>>>>> 1a549b2fcb0f3227cba50ce0d61c5be0e036c6d7
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarB>
  );
};
