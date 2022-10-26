import "../Styles/NavBar.css";
import Logo from "../logos/logoMiracles.png";
import { NavLink } from "react-router-dom";
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
  let logoStyle = {
    paddingTop: "10px",
    paddingBottom: "10px",
  };
  return (
    <nav className="navBar">
      <MobileMenu />
      <div>
        <a>
          <img src={Logo} style={logoStyle} width={220} height={80} />
        </a>
      </div>
      <nav className="links">
        <NavLink style={linksStyle} to="/">
          Home
        </NavLink>
        <NavLink style={linksStyle} to="/services">
          Services
        </NavLink>
        <NavLink style={linksStyle} to="/about">
          About
        </NavLink>
      </nav>
    </nav>
  );
};

export default NavBar;
