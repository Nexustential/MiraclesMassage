import { useState, React } from "react";
import "./home.css";
import Logo from "./logos/logo192.png";

const Home = () => {
  return (
    <nav className="navBar">
      <div>
        <a>
          <img src={Logo} width={70} />
        </a>
      </div>
      <nav className="links">
        <a>Home</a>
        <a>Services</a>
        <a>Book</a>
        <a>About</a>
      </nav>
    </nav>
  );
};

export default Home;
