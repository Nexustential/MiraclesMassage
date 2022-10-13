import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../Styles/ServicesPage.css";

function ServicesPage() {

  const [book, setBook] = useState("BOOK NOW!");

  const servicesInfo = [
    {
      Image: require("../images/rock.jpg"),
      title: "ROCK HARD",
      text: "Rub you down with hot rocks",
    },
    {
      Image: require("../images/hotoil.jpg"),
      title: "SEXY BACK",
      text: "Hot oil back massage",
    },
    {
      Image: require("../images/relax.jpg"),
      title: "HAPPY ENDING",
      text: "After your massage you get a chocolate cake",
    },
    {
      Image: require("../images/rub.jpg"),
      title: "BACK DOOR",
      text: "Call for description",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="servicesPage1">
      <Card key={index} className="servicesCardStyle">
        <Card.Body>
          <Card.Img className="servicesImageStyle" src={card.Image} />
          <div className="servicesTextStyleForCard">
            <Card.Title className="servicesTextStyleForCardTitle">{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button 
              className="servicesButtonStyle" 
              onClick={() => setBook("Call or text us today at 555-555-5555")}
            >{book}</Button>
          </div>
        </Card.Body>
      </Card>
      </div>
    );
  };

  return <div>{servicesInfo.map(renderCard)}</div>;
}

export default ServicesPage;
