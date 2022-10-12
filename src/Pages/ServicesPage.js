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
      <Card key={index} id="cardStyle">
        <Card.Body>
          <Card.Img id="imageStyle" src={card.Image} />
          <div id="textStyleForCard">
            <Card.Title id="textStyleForCardTitle">{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button 
              id="buttonStyle" 
              onClick={() => setBook("Call or text us today at 555-555-5555")}
            >{book}</Button>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return <div>{servicesInfo.map(renderCard)}</div>;
}

export default ServicesPage;
