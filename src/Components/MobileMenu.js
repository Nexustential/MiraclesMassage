import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import "../Styles/MobileMenu.css";

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
          Home
        </NavLink>
        <NavLink
          onClick={closeNavbar}
          className="overlayContent"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink onClick={closeNavbar} className="overlayContent" to="/about">
          About
        </NavLink>
      </nav>
    </>
  );
};

export default MobileMenu;
