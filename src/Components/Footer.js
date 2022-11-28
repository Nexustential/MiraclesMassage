import React from "react";
import "../Styles/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="footerSection">
      <footer className="footer">
        <section>
          <div className="iconsection">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="Icon">
                <BsFacebook />
              </span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <span className="Icon">
                <AiFillTwitterCircle />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <span className="Icon">
                <AiFillInstagram />
              </span>
            </a>
          </div>
          <div className="footerContainer">
            <div className="infoAddress">
              Questions?
              <br />
              <HiOutlineMail style={{ marginRight: "5px" }} />
              <a href="mailto:miraclesmassage22@gmail.com">
                miraclesmassage22@gmail.com
              </a>
              <br />
              <AiOutlinePhone style={{ marginRight: "5px" }} />
              <a href="tel:+2147483647">(214) 748-3647</a>
              <br />
              <HiOutlineLocationMarker style={{ marginRight: "5px" }} />
              235 N. Hender Road Winchester, CA 19406
              <br />
            </div>
            <div className="openDaysAndTime">
              Monday - Thursday 10am - 7pm
              <br />
              Friday - Saturday 11am - 5pm
              <br />
              Sunday - Closed
            </div>
          </div>
        </section>
        <section className="TermsAndConditions">
          <p>
            <a href="/terms">Terms and Conditions</a> | Copyright © 2022 |
            Miracles Massage
          </p>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
