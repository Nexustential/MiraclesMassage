import { useState, React } from "react";
import "../Styles/NavBar.css";
import Logo from "../logos/logoMiracles.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  let linksStyle = {
    fontSize: "1.3em",
    color: "white",
    fontWeight: "bold",
  };
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };
  const condition = false;
  return (
    <nav className="navBar">
      <MobileMenu />
      <div>
        <a>
          <img src={Logo} width={150} height={80} />
        </a>
      </div>
      <nav className="links">
        <Link style={linksStyle} to="/">
          Home
        </Link>
        <Link style={linksStyle} to="/services">
          Services
        </Link>
        <Link style={linksStyle} to="/book">
          Book
        </Link>
        <Link style={linksStyle} to="/about">
          About
        </Link>
      </nav>
    </nav>
  );
};

export default NavBar;
