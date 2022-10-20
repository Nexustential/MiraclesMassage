import { useState } from "react";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import "../Styles/MobileMenu.css";

const MobileMenu = (props) => {
  const [isOpen, setOpen] = useState(false);
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
      {isOpen && <LinksToShow />}
    </>
  );
};

const LinksToShow = (props) => {
  console.log(props.isOpen);
  return (
    <div className={"overlay" + (props.setOpen ? "overlayCloseContent" : "")}>
      <NavLink className="overlayContent" to="/">
        Home
      </NavLink>
      <NavLink className="overlayContent" to="/services">
        Services
      </NavLink>
      <NavLink className="overlayContent" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default MobileMenu;
