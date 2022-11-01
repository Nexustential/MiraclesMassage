import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../Styles/About.css";

function About() {
  return (
    <div>
      <Container className='profile'>
    <Row className='justify-content-center'>
      <Col xs='auto'>
        <img className='img-large' src={require("../images/elmo.png")} alt=''></img>
      </Col>
      <Col md='auto'>
        <div >
        <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item style={{backgroundColor: 'rgb(115, 142, 165)'}}>
            <h1>Luis Mujica</h1>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>LMT</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <p>B.S. Health Sciences - VCF</p>
          </ListGroup.Item>
        </ListGroup>
        </Card>
        </div>
        </Col>
      </Row>
      </Container>

      <MDBContainer className="my-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          I became a massage therapist to live a pain-free and more active lifestyle. I knew this could be accomplished by retraining my mind-body connection in order to improve functional movement. This led to more intense workouts, better endurance, and a happier mindset. Now, I’d like to share my knowledge with my clients. My background in health sciences, sports massage, and eastern techniques allows me to look at the human body like a machine. I believe that movement is the best medicine. We are all in a constant state of flux and our bodies love balance. When we are unbalanced, disease sets in. I’ve made it my mission to work with natural energies to help rebalance and heal the body, mind and spirit.
          </p>
        </MDBCol>
      </MDBRow>
      </MDBContainer>

    <MDBContainer className="my-5 pb-5" style={{backgroundColor: "grey"}}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h2 className="mb-4 my-5">Testimonials</h2>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Lorem Ipsum about massaging
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "darkgray" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src={require("../images/elmo.png")}
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">John Denver</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Neque cupiditate assumenda in maiores repudi mollitia
                architecto.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "rgb(115, 142, 165)" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src={require("../images/elmo.png")}
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Lisa Cudrow</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Neque cupiditate assumenda in maiores repudi mollitia
                architecto.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "darkgray" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <MDBCardImage
                src={require("../images/elmo.png")}
                className="rounded-circle img-fluid"
                alt=''
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">John Smith</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Delectus impedit saepe officiis ab aliquam repellat rem unde
                ducimus.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default About;
