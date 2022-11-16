import "../Styles/NavBar.css";
import Logo from "../logos/logoMiracles.png";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
const NavBar = () => {
  let linksStyle = {
    fontSize: "1.3em",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    transitionDuration: "450ms",
    transitionProperty: "color, fontSize",
  };
  let activeStyle = {
    textDecoration: "none",
    transitionDuration: "450ms",
    transitionProperty: "color, fontSize",
    fontSize: "1.6em",
    fontWeight: "bold",
    color: "black",
  };
  let logoStyle = {
    paddingTop: "10px",
    paddingBottom: "10px",
  };
  return (
    <nav className="navBar">
      <MobileMenu />
      <div>
        <NavLink to="/">
          <img src={Logo} style={logoStyle} width={220} height={80} alt="Miracles Massage Logo" />
        </NavLink>
      </div>
      <nav className="links">
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : linksStyle)}
          to="/"
          end
        >
          <div className="navTab">Home</div>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : linksStyle)}
          to="/services"
        >
          <div className="navTab">Services</div>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : linksStyle)}
          to="/about"
        >
          <div className="navTab">About</div>
        </NavLink>
      </nav>
    </nav>
  );
};

export default NavBar;
