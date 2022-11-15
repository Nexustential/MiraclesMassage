import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../Styles/Footer.css";

const Footer = () => {
  const iconStyle = {
    boxShadow: "0 0 4px black",
    borderRadius: "100%",
  };
  return (
    <div className="footerContainer">
      <div className="iconsContainer">
        <span>
          <FaFacebook style={iconStyle} />
        </span>
        <span>
          <AiFillTwitterCircle style={iconStyle} />
        </span>
        <span>
          <AiFillGoogleCircle style={iconStyle} />
        </span>
        <span>
          <AiFillInstagram style={iconStyle} />
        </span>
        <span>
          <AiFillGithub style={iconStyle} />
        </span>
      </div>
      <div className="textContainer">
        <span>
          © 2023 Copyright:{" "}
          <a className="linkFooter" href="https://mdbootstrap.com/">
            Coders.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
