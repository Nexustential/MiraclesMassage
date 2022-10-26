import React from "react";
import "../Styles/Carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselFade = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" variant="dark">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage12.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage8.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage6.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselFade;
