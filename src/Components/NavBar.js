import { useState, React } from "react";
import "../Styles/NavBar.css";
import Logo from "../logos/logo192.png";
import { Link } from "react-router-dom";

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
      <div>
        <a>
          <img src={Logo} width={70} />
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