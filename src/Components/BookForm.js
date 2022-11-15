import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Styles/BookForm.css';
import { Formik } from 'formik';
import ApptForm from './ApptForm';
import * as Yup from 'yup';

function BookForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ErrorSchema = Yup.object().shape({

    user_name: Yup.string().required("Name is Required").min(2, "Name must be longer than two characters").max(15, "Name cannot exceed 15 characters"),
    email: Yup.string().email("Invalid email").required("Required"), 
    phone: Yup.string().matches(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, "Not a Phone Number").required("Required"),
    service: Yup.string().oneOf(['deepTissue', 'sports', 'structural', 'swedish', 'thai', 'triggerPoint'], "Invalid Service").required("Required"),
    message: Yup.string().min(5, "Must be at least 5 characters").max(150, "Message is too long").required("Required"),
    date: Yup.date().min(new Date(), "Must be later than today's date").required("Must enter a date"),
    time: Yup.string().required("Required"),
      })


  return (
    <div className='buttonDiv'>
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

      <div className='row justify-content-sm-center pt-5'>
        <div className='col-sm-6 shadow round pb-3'>

          <Formik
            initialValues={{
              user_name: '', //this needs to be the same as the 'name' in ContactForm, if you add a value here it acts as a placeholder
              age: '',
              email: '',
              date: '',
              time: '',
              phone: '',
              service: '',
              message: '',
              
            }}
      
            validationSchema={ErrorSchema}
            component={ApptForm}
          />
        </div>
      </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BookForm;
