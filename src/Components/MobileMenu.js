import { useState } from "react";
import Hamburger from "hamburger-react";
import "../Styles/MobileMenu.css";

const LinksToShow = () => {
  return <h2>Sample one!</h2>;
};

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburgerMenu">
      <Hamburger
        duration={0.8}
        color="white"
        rounded
        onToggle={(toggled) =>
          toggled ? console.log("function") : console.log("no-function")
        }
        toggled={isOpen}
        toggle={setOpen}
      />
    </div>
  );
};

export default MobileMenu;
