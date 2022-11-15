import React, { useState } from "react";
import { Card, Button} from "react-bootstrap";
import "../Styles/ServicesPage.css";
import Price from "../Components/PricingForServicesPage";
import { Fade } from "react-reveal";
import Footer from "../Components/Footer";


function ServiceCards(){
  const servicesInfo = [
    {
      Image: require("../images/swedish.jpg"),
      title: "SWEDISH",
      text: "Swedish massage is one of the most commonly offered massage techniques. It’s sometimes called a classic massage. The technique aims to promote relaxation by releasing muscle tension. Swedish massage may loosen up tight muscles caused by daily activities such as sitting at the computer or exercising.",
      price: "60 min: $70 | 90 min: $100"
    },
    {
      Image: require("../images/deeptissue.jpg"),
      title: "DEEP TISSUE",
      text: "In order to reach the deep muscle tissue, a therapist will massage layer by layer of muscle, applying more and more pressure and employing special techniques with the fingers, fists, and maybe even elbows to reach and stretch that deep tissue.This type of massage facilitates healing by releasing contracted areas of muscle and tissue. It can help increase blood flow to the soft tissues and may help to reduce inflammation.",
      price: "60 min: $70 | 90 min: $100"
    },
    {
      Image: require("../images/sports.jpg"),
      title: "SPORTS",
      text: "Sports massage is proven to release and reduce tension in muscles, improve circulation and encourage the removal of waste products such as lactic acid during high intensity activity and can help to relax the body. All of this helps promote recovery and reduces the chance of muscle injury.",
      price: "60 min: $80 | 90 min: $120"
    },
    {
      Image: require("../images/thai.jpg"),
      title: "THAI",
      text: "Thai massage combines compression, acupressure, and passive stretching. These increase the range of motion in your joints and muscles. This can also improve your posture. Helps with back pain.",
      price: "60 min: $80 | 90 min: $120"
    },
    {
      Image: require("../images/structural.jpg"),
      title: "STRUCTURAL",
      text: "What is a structural massage? Structural massage is a non-invasive technique that identifies the source of pain based on structural imbalances and uses body positioning to relieve tension. When you go in for a structural massage session, a professional will identify the cause of your pain by locating a tender spot.",
      price: "60 min: $80 | 90 min: $120"
    },
    {
      Image: require("../images/triggerPoint.jpg"),
      title: "TRIGGER POINT",
      text: "A trigger point is a tight area within your muscle tissue that causes pain in other parts of your body as well. They might show up as sharp, intense spasms, or as a dull generalized ache. Either way, they’re a real pain.  ",
      price: "60 min: $80 | 90 min: $120"
    }
  ];

  const [bookButtons, setBookButtons] = useState(new Array(servicesInfo.length).fill(false));

  //to handle the button click so each individual button works separately
  const handleButtonClick = (index) => {
    const newBookButtons = [...bookButtons];
    newBookButtons[index] = !newBookButtons[index];
    setBookButtons(newBookButtons);
  }

  
  const RenderCard = (card, index) => {
    return (
      
      <div className="servicesPage1 container" key={index}>
        <Fade distance="70%" duration={1000}>
        <Card  className="servicesCardStyle">
          <Card.Body>
            <Card.Img className="servicesImageStyle" src={card.Image} />
            <div className="servicesTextStyleForCard">
              <Card.Title className="servicesTextStyleForCardTitle">{card.title}</Card.Title>
              <Card.Text>
                {card.text}
                <br />
                <br />
                <div className="price">
                  {card.price}
                </div>
              </Card.Text>
              <Button href="tel:+2147483647" variant="secondary" className="servicesButtonStyle" onClick={() => handleButtonClick(index)}>
                <div className="bookButton">
                {bookButtons[index] ? "214-748-3647" : "BOOK NOW"}
                </div>
              </Button>
            </div>
          </Card.Body>
        </Card>
        </Fade>
      </div>
    );
  };

  return(
  <div>
    {servicesInfo.map(RenderCard)}
  </div>
  )

}

function ServicesPage() {

  return (
  <div className="servicesPage">
      <Price />
      <ServiceCards />
    
      <Footer />
  </div>
  )
}

export default ServicesPage;
