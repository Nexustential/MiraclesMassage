import { useState } from "react";
import Hamburger from "hamburger-react";
import "../Styles/MobileMenu.css";

const LinksToShow = () => {
  return (
    <div className="overlay">
      <h1 className="overlayContent">/ Links Sample /</h1>
    </div>
  );
};

const MobileMenu = () => {
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

export default MobileMenu;
