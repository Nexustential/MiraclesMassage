import { useState, React } from "react";
import "../Styles/Home.css";
import Logo from "../Logos/logo192.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div>
        <a>
          <img src={Logo} width={70} />
        </a>
      </div>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/book">Book</Link>
        <Link to="/about">About</Link>
      </nav>
    </nav>
  );
};

export default NavBar;
