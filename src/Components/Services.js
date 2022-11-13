import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/Services.scss";
import BookForm from "./BookForm";


function Services() {
  
  const [book, setBook] = useState("BOOK NOW");
  const [book1, setBook1] = useState("BOOK NOW");
  const [book2, setBook2] = useState("BOOK NOW");
  
  const [call, setCall] = useState("")
  const [call1, setCall1] = useState("")
  const [call2, setCall2] = useState("")

  const [callNow, setCallNow] = useState("Call Now");
  const [callNow1, setCallNow1] = useState("Call Now");
  const [callNow2, setCallNow2] = useState("Call Now");
  
  const callPrompt = ("Book Online Or Call Us Any Time!");
  const phoneNumber = ('214-748-3647');

  function CallUs(){
    bookButtonVanish();
    bookingPopUp();
    setBook(`${phoneNumber}`);
    setCall(`${callPrompt}`);
  }

  function CallUs1(){
    bookButtonVanish1();
    bookingPopUp1();
    setBook1(`${phoneNumber}`);
    setCall1(`${callPrompt}`);
  }

  function CallUs2(){
    bookButtonVanish2();
    bookingPopUp2();
    setBook2(`${phoneNumber}`);
    setCall2(`${callPrompt}`);
  }

  function bookingPopUp(){
    const element = document.querySelector('.bookFormButton');
    element.style.display = 'contents';
  }

  function bookingPopUp1(){
    const element = document.querySelector('.bookFormButton1');
    element.style.display = 'contents';
  }

  function bookingPopUp2(){
    const element = document.querySelector('.bookFormButton2');
    element.style.display = 'contents';
  }

  function bookButtonVanish(){
    const element = document.querySelector('.bookButton');
    element.style.display = 'none';
  }

  function bookButtonVanish1(){
    const element = document.querySelector('.bookButton1');
    element.style.display = 'none';
  }

  function bookButtonVanish2(){
    const element = document.querySelector('.bookButton2');
    element.style.display = 'none';
  }

  return (
    <div className="services">
      <div className="serviceCardHeader">
        <h1>Our Most Popular Services</h1>
      </div>
      <div className="services1">
        <Card className="serviceCards">
          <Card.Img variant="top" src={require("../images/swedish.jpg")} />
          <Card.Body>
            <Card.Title className="cardTitle">Swedish</Card.Title>
            <Card.Text>
              Swedish massage is one of the most commonly offered massage techniques. It’s sometimes called a classic massage. The technique aims to promote relaxation by releasing muscle tension. 
            </Card.Text>
            <div className="callHook">
              {call}
            </div>
            <Button 
              variant="secondary" 
              className="bookButton"
              onClick={CallUs}
            >
              {book}
            </Button>
            <div className="bookFormButton">
              <BookForm />
              <Button variant="secondary" href="tel:+2147483647" className="callButton" onClick={() => setCallNow(`${phoneNumber}`)}>
                {callNow}
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="serviceCards">
          <Card.Img variant="top" src={require("../images/deeptissue.jpg")} />
          <Card.Body>
            <Card.Title className="cardTitle">Deep Tissue</Card.Title>
            <Card.Text>
              In order to reach the deep muscle tissue, a therapist will massage layer by layer of muscle, applying more and more pressure and employing special techniques with the fingers, fists, and even elbows.
            </Card.Text>
            <div className="callHook">
              {call1}
            </div>
            <Button 
              variant="secondary" 
              className="bookButton1"
              onClick={CallUs1}
            >
              {book1}
            </Button>
            <div className="bookFormButton1">
              <BookForm />
              <Button variant="secondary" href="tel:+2147483647" className="callButton" onClick={() => setCallNow1(`${phoneNumber}`)}>
                {callNow1}
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="serviceCards">
          <Card.Img variant="top" src={require("../images/thai.jpg")} />
          <Card.Body>
            <Card.Title className="cardTitle">Thai</Card.Title>
            <Card.Text>
              Thai massage combines compression, acupressure, and passive stretching. These methods increase the range of motion in your joints and muscles. This can greatly improve your posture and back.
            </Card.Text>
            <div className="callHook">
              {call2}
            </div>
            <Button 
              variant="secondary" 
              className="bookButton2"
              onClick={CallUs2}
            >
              {book2}
            </Button>
            <div className="bookFormButton2">
              <BookForm />
              <Button variant="secondary" href="tel:+2147483647" className="callButton" onClick={() => setCallNow2(`${phoneNumber}`)}>
                {callNow2}
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
