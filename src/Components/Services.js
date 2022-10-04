import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../Styles/Services.css";

const Services = () => {
  return (
    <>
      <div>
        <h1 id="serviceCardHeader">Our Most Popular Services</h1>
      </div>
      <div className="services">
        <Card style={{ width: '19rem' }} id="serviceCards">
          <Card.Img variant="top" src={require("../images/massage1.jpg")} />
          <Card.Body>
            <Card.Title>Service 1</Card.Title>
            <Card.Text>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </Card.Text>
            <Button variant="primary" id="bookButton" href="/book">Book Now!</Button>
          </Card.Body>
        </Card>
      
        <Card style={{ width: '19rem' }} id="serviceCards">
          <Card.Img variant="top" src={require("../images/massage2.jpg")} />
          <Card.Body>
            <Card.Title>Service 2</Card.Title>
            <Card.Text>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </Card.Text>
            <Button variant="primary" id="bookButton" href="/book">Book Now!</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '19rem' }} id="serviceCards">
          <Card.Img variant="top" src={require("../images/massage3.jpg")} />
          <Card.Body>
            <Card.Title>Service 3</Card.Title>
            <Card.Text>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
            </Card.Text>
            <Button variant="primary" id="bookButton" href="/book">Book Now!</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Services;
