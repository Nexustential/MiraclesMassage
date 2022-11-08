import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Styles/BookForm.css';
import emailjs from '@emailjs/browser';

function BookForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='buttonDiv text-center'>
      <Button
        className='size-lg'
        variant='primary'
        id='button'
        onClick={handleShow}
      >
        Book Online
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className='ms-auto'>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className='container'
            id='bookFormDiv'
          >
            <form
              ref={form}
              onSubmit={sendEmail}
            >
              <label>Name:</label>
              <input
                className='col-10'
                type='text'
                name='user_name'
              />
              <label>Email:</label>
              <input
                type='email'
                name='user_email'
              />
              <label>Date:</label>
              <input
                type='date'
                name='user_date'
              />
              <label>Time:</label>
              <input
                type='time'
                name='user_time'
              />
              <label className='col-2'>Service:</label>
              <input
                className='col'
                type='radio'
                name='service_type'
                id='swedishRadio'
                value='Swedish'
              />
              <label
                className='col-2'
                for='swedishRadio'
              >
                Swedish
              </label>
              <input
                className='col'
                type='radio'
                name='service_type'
                id='thaiRadio'
                value='Thai'
              />
              <label
                className='col-2'
                for='thaiRadio'
              >
                Thai
              </label>
              <input
                className='col'
                type='radio'
                name='service_type'
                id='deepTissueRadio'
                value='DeepTissue'
              />
              <label
                className='col-2'
                for='deepTissueRadio'
              >
                Deep Tissue
              </label>
              <label>Message:</label>
              <textarea
                className='col-8'
                name='message'
              />
              <input
                type='submit'
                value='Send'
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BookForm;

{
  /* <div className="container" id="bookFormDiv">
      <form action="https://formsubmit.co/RCLewis369@outlook.com" method="POST" className='row'>
        <h2 id="formH1">Book An Appointment</h2>
        <input className="col-12" type="email" name="Email" placeholder="Email" required />
        <input className="col-12" type="text" name="Name" placeholder="Name" required />
        <input className="col-12" type="text" name="Time" placeholder="Time" required />
        <input className="col-12" type="text" name="Date" placeholder="Date" required />
        <div className='row'>
          <label className='col'>Service Type:</label>
        </div>
        <div className='row' id="radioButtons">
          <input className="col" type="radio" name="Service Type" id="inlineRadio1" value="Swedish" />
          <label className="col" for="inlineRadio1">Swedish</label>
          <input className="col" type="radio" name="Service Type" id="inlineRadio2" value="Deep Tissue" />
          <label className="col" for="inlineRadio2">Deep Tissue</label>
          <input className="col" type="radio" name="Service Type" id="inlineRadio3" value="Sports" />
          <label className="col" for="inlineRadio3">Sports</label>
          <input className="col" type="radio" name="Service Type" id="inlineRadio4" value="Thai" />
          <label className="col" for="inlineRadio4">Thai</label>
          <input className="col" type="radio" name="Service Type" id="inlineRadio5" value="Structural" />
          <label className="col" for="inlineRadio5">Structural</label>
          <input className="col" type="radio" name="Service Type" id="inlineRadio6" value="Trigger Point" />
          <label className="col" for="inlineRadio6">Trigger Point</label>
          
        </div>  
        
        <button className='col-6' type="submit">Send</button>
      </form>
    </div> */
}
