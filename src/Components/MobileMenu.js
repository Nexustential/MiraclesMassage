import { useState } from "react";
import Hamburger from "hamburger-react";
import "../Styles/MobileMenu.css";

const LinksToShow = (props) => {
  return <h1>Sample one!</h1>;
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
          toggled ? <LinksToShow /> : console.log("no-function")
        }
        toggled={isOpen}
        toggle={setOpen}
      />
    </div>
  );
};

export default MobileMenu;
