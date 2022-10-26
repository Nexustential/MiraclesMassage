import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/Services.scss";


function Services() {
  
  const [book, setBook] = useState("BOOK NOW!");
  const [book1, setBook1] = useState("BOOK NOW!");
  const [book2, setBook2] = useState("BOOK NOW!");
  
  const [call, setCall] = useState("")
  const [call1, setCall1] = useState("")
  const [call2, setCall2] = useState("")

  const [service, setService] = useState("Full service catalog and money saving packages")
  
  const callPrompt = ("Call or text us today at:")
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
          <Card.Img variant="top" src={require("../images/massage1.jpg")} />
          <Card.Body>
            <Card.Title>Swedish</Card.Title>
            <Card.Text>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
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
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
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
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante.
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
