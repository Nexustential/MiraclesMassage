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
          e.target.reset(); //should reset the form after submission 
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
        variant='secondary'
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
          <Modal.Title className='ms-auto' id="bookFormTitle">Book Appointment</Modal.Title>
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
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                <input
                className='form-control'
                type='text'
                placeholder="Name"
                name='user_name'
              />
                </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <input
                type='email'
                className="form-control"
                placeholder="Email Address"
                name='user_email'
              />
              </div>
             <div className="col-8 form-group pt-2 mx-auto">
             <input
                type='date'
                className="form-control"
                name='user_date'
              />
             </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <input
                type='time'
                className="form-control"
                name='user_time'
              />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
              <select
                className='form-select'
                //type='select'
                name='service_type'
                //value='Select a Service'
              > 
              <option>Select a Service...</option>
              <option value="Swedish">Swedish</option>
              <option value="Thai">Thai</option>
              <option value="deepTissue">Deep Tissue</option>
              <option value="sports">Sports</option>
              <option value="structural">Structural</option>
              <option value="triggerPoint">Trigger Point</option>
              </select>
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" cols="30" rows="6" placeholder="Comments" name="message"></textarea>
              </div>
             <div className="col-8 pt-3 text-center mx-auto">
             <input
                type='submit'
                className="btn btn-info"
                value='Send'
                onClick={handleClose}
              />
             </div>
             
             
              </div>
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
