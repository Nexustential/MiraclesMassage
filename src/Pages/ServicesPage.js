import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../Styles/ServicesPage.css';



function ServicesPage () {

const  servicesInfo = [
    {Image:require('../images/rock.jpg'), title:"ROCK HARD", text:"Rub you down with hot rocks"},
    {Image: require('../images/hotoil.jpg'), title:"SEXY BACK", text:"Hot oil back massage"},
    {Image:require('../images/relax.jpg'), title:"HAPPY ENDING", text:"After your massage you get a chocolate cake"},
    {Image:require('../images/rub.jpg'), title:"BACK DOOR", text:"Call for description"}
    
];

const renderCard = (card)=>{
    return(
  
    <Card className="cradStyle">
        <Card.Body>
        <Card.Img className='imageStyle' src={card.Image}/>
        <div className='textStyleForCard'>
        <Card.Title className='textStyleForCardTitle'>{card.title}</Card.Title>
        <Card.Text >{card.text}</Card.Text>
        <Button className='buttonStyle'>TIME TO RELAX BOOK NOW</Button>
        </div> 
        </Card.Body>
        
    </Card>
    

    )

}

  return (
    <div>
    {servicesInfo.map(renderCard)}
    </div>
  );
}

export default ServicesPage;