import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Styles/Services.css";


const Services = () => {
  
  const [book, setBook] = useState("BOOK NOW!");
  const [book1, setBook1] = useState("BOOK NOW!");
  const [book2, setBook2] = useState("BOOK NOW!");
  
  const [call, setCall] = useState("")
  const [call1, setCall1] = useState("")
  const [call2, setCall2] = useState("")

  const [service, setService] = useState("Full service catalog and money saving packages")
  
  const phoneNumber = ('555-555-5555');

  function CallUs(){
    setBook(`${phoneNumber}`);
    setCall("Call or text us today at:");
  }

  function CallUs1(){
    setBook1(`${phoneNumber}`);
    setCall1("Call or text us today at:");
  }

  function CallUs2(){
    setBook2(`${phoneNumber}`);
    setCall2("Call or text us today at:");
  }
  
  return (
    <>
      <div>
        <h1 className="serviceCardHeader">Our Most Popular Services</h1>
      </div>
      <div className="services1">
        <Card style={{ width: "19rem" }} className="serviceCards">
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
            <a href="tel:+5555555555"><Button 
              variant="secondary" 
              className="bookButton"
              onClick={CallUs}
            >
              {book}
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "19rem" }} className="serviceCards">
          <Card.Img variant="top" src={require("../images/massage2.jpg")} />
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
            <a href="tel:+5555555555"><Button 
              variant="secondary" 
              className="bookButton"
              onClick={CallUs1}
            >
              {book1}
            </Button></a>
          </Card.Body>
        </Card>

        <Card style={{ width: "19rem" }} className="serviceCards">
          <Card.Img variant="top" src={require("../images/massage3.jpg")} />
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
            <a href="tel:+5555555555"><Button 
              variant="secondary" 
              className="bookButton"
              onClick={CallUs2}
            >
              {book2}
            </Button></a>
          </Card.Body>
        </Card>
        <div className="moreServicesButtonDiv">
          <Button variant="secondary" className="servicesButton" href="/services" onClick={() => setService("Loading...")}>
            {service}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Services;
