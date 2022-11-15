import React from "react";
import "../Styles/Footer.css";
import BookForm from "./BookForm";
import { BsFacebook} from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
<section className="footerSection">
  <footer className="footer">
        <section>
            <div className="iconsection">
                <span className="Icon">
                    <BsFacebook/>
                </span>
                <span className="Icon">
                    <AiFillTwitterSquare/>
                </span>
                <span className="Icon">
                    <AiFillInstagram/>
                </span>
            </div>
            <div className="infoAddress">
                Questions?
                <br />
                massagemiracles@gmail.com
                <br />
                <a href="tel:+2147483647">(214)748-3647</a><br />
                235 N. Hender Road
                Winchester, CA 19406<br />
                </div>
        </section>
        <section>
            <p>
                <div className="openDaysAndTime">  
                Monday 10:00 am - 7:00 pm <br />
                Tuesday 10:00 am - 7:00 pm<br />
                Wednesday 10:00 am - 7:00 pm<br />
                Thursday 10:00 am - 7:00 pm<br />
                Friday 10:00 am - 6:00 pm<br />
                Saturday 10:00 am - 6:00 pm<br />
                SundayClosed
                </div>  
            </p>
        </section>
        <section className="MakeAppintment">
            <p>
            Make An Appointment
            </p>
        <BookForm />
        </section>
        <section className="TermsAndConditions">
            <p>Terms and Conditions | © 2020 Copyright | Miracles Massage</p>
        </section>
  </footer>
</section>
  );
};

export default Footer;

