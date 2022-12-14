import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import "../Styles/MobileMenu.css";
import { BiHome } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const closeNavbar = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="hamburgerMenu">
        <Hamburger
          duration={0.8}
          color="white"
          rounded
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <nav className={`overlay ${isOpen && "showContent"}`}>
        <NavLink onClick={closeNavbar} className="overlayContent" to="/">
          <span className="homeIcon">
            <BiHome />
          </span>
          Home
        </NavLink>
        <NavLink
          onClick={closeNavbar}
          className="overlayContent"
          to="/services"
        >
          <span className="homeIcon">
            <AiFillShopping />
          </span>
          Services
        </NavLink>
        <NavLink onClick={closeNavbar} className="overlayContent" to="/about">
          <span className="homeIcon">
            <BsGlobe2 />
          </span>
          About
        </NavLink>
      </nav>
    </>
  );
};

export default MobileMenu;
