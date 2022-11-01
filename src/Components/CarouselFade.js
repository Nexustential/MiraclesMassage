import React from "react";
import "../Styles/Carousel.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselFade = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel" variant="light">
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Miracles Massage</h3>
            <p>Relax and let your troubles melt away</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption id="carouselCaption2">
            <h3>Six types of therapy</h3>
            <p>Browse our full catalog to find the right fit for you</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            style={{ maxHeight: 500 }}
            src={require("../images/massage3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Couple's Special</h3>
            <p>
              Book a session with your significant other and receive a 15% discount!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselFade;
