import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/Services.scss";


function Services() {
  
  const [book, setBook] = useState("BOOK NOW");
  const [book1, setBook1] = useState("BOOK NOW");
  const [book2, setBook2] = useState("BOOK NOW");
  
  const [call, setCall] = useState("")
  const [call1, setCall1] = useState("")
  const [call2, setCall2] = useState("")

  const [service, setService] = useState("VIEW OUR FULL SERVICE CATALOG")
  
  const callPrompt = ("Call us today at:");
  const phoneNumber = ('214-748-3647');

  function CallUs(){
    setBook(`${phoneNumber}`);
    setCall(`${callPrompt}`);
  }

  function CallUs1(){
    setBook1(`${phoneNumber}`);
    setCall1(`${callPrompt}`);
  }

  function CallUs2(){
    setBook2(`${phoneNumber}`);
    setCall2(`${callPrompt}`);
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
            <Card.Title>Swedish</Card.Title>
            <Card.Text>
              Swedish massage is one of the most commonly offered massage techniques. It’s sometimes called a classic massage. The technique aims to promote relaxation by releasing muscle tension. 
            </Card.Text>
            <div className="callHook">
              {call}
            </div>
            <a href="tel:+2147483647">
              <Button 
                variant="secondary" 
                className="bookButton"
                onClick={CallUs}
              >
                {book}
              </Button>
            </a>
          </Card.Body>
        </Card>

        <Card className="serviceCards">
          <Card.Img variant="top" src={require("../images/deeptissue.jpg")} />
          <Card.Body>
            <Card.Title>Deep Tissue</Card.Title>
            <Card.Text>
              In order to reach the deep muscle tissue, a therapist will massage layer by layer of muscle, applying more and more pressure and employing special techniques with the fingers, fists, and even elbows.
            </Card.Text>
            <div className="callHook">
              {call1}
            </div>
            <a href="tel:+2147483647">
              <Button 
                variant="secondary" 
                className="bookButton"
                onClick={CallUs1}
              >
                {book1}
              </Button>
            </a>
          </Card.Body>
        </Card>

        <Card className="serviceCards">
          <Card.Img variant="top" src={require("../images/thai.jpg")} />
          <Card.Body>
            <Card.Title>Thai</Card.Title>
            <Card.Text>
              Thai massage combines compression, acupressure, and passive stretching. These methods increase the range of motion in your joints and muscles. This can greatly improve your posture and back.
            </Card.Text>
            <div className="callHook">
              {call2}
            </div>
            <a href="tel:+2147483647">
              <Button 
                variant="secondary" 
                className="bookButton"
                onClick={CallUs2}
              >
                {book2}
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Button variant="secondary" className="servicesButton" href="/services" onClick={() => setService("Loading...")}>
          {service}
        </Button>
      </div>
    </div>
  );
};

export default Services;
