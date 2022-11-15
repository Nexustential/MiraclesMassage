import React, { useRef } from 'react';
import { Form, Field } from 'formik';
import emailjs from '@emailjs/browser';


function ApptForm({ errors, touched, isValid, dirty }) {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target[1].value);
        //set the values inside of variables to use later

        const userName = e.target[0].value;
        const email = e.target[1].value;
        const date = e.target[2].value;
        const time = e.target[3].value;
        const phone = e.target[4].value;
        const service = e.target[5].value;
        const msg = e.target[6].value;

        let templateParams = {
            user_name: userName,
            email: email,
            date: date,
            time: time, 
            phone: phone,
            service: service,
            message: msg, 
        };

        emailjs.send(  process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            })
    }
  return (
    <Form ref={form} onSubmit={sendEmail}>
      <div className='form-group'>
        <label className='col-form-label'>Name:</label>
        <Field
          className={
            touched.user_name
              ? `form-control ${errors.user_name ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='user_name'
          type='text'
        />
        {/* add the first '&' because if there is no error there is no need for the small tag */}
        {touched.user_name && errors.user_name && (
          <small className='text-danger'>{errors.user_name}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Email:</label>
        <Field
          className={
            touched.email
              ? `form-control ${errors.email ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='email'
          type='text'
        />
        {touched.email && errors.email && (
          <small className='text-danger'>{errors.email}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Date:</label>
        <Field 
          className={
            touched.date
            ? `form-control ${errors.date ? 'invalid' : 'valid'}`
            : `form-control`
          }
          name='date'
          type='date'
        />
         {touched.date && errors.date && (
          <small className='text-danger'>{errors.date}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Time:</label>
        <Field 
          className={
            touched.time
            ? `form-control ${errors.time ? 'invalid' : 'valid'}`
            : `form-control`
          }
          name='time'
          type='time'
        />
         {touched.time && errors.time && (
          <small className='text-danger'>{errors.time}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Phone:</label>
        <Field
          className={
            touched.phone
              ? `form-control ${errors.phone ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='phone'
          type='text'
        />
        {touched.phone && errors.phone && (
          <small className='text-danger'>{errors.phone}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Service:</label>
        <Field
          as='select'
          className={
            touched.service
              ? `form-control ${errors.service ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='service'
        >
          <option value="">Select a Service</option>
          <option value="deepTissue">Deep Tissue</option>
          <option value="sports">Sports</option>
          <option value="structural">Structural</option>
          <option value="swedish">Swedish</option>
          <option value="thai">Thai</option>
          <option value="triggerPoint">Trigger Point</option>
        </Field>
        {touched.service && errors.service && (
          <small className='text-danger'>{errors.service}</small>
        )}
      </div>
      <div className='form-group'>
        <label className='col-form-label'>Message:</label>
        <Field
          as='textarea'
          className={
            touched.message
              ? `form-control ${errors.message ? 'invalid' : 'valid'}`
              : `form-control`
          }
          name='message'
        ></Field>
        {touched.message && errors.message && (
          <small className='text-danger'>{errors.message}</small>
        )}
      </div>
      <div className='text-center'>
        <button
          className='btn btn-primary my-3'
          disabled={!isValid || !dirty}
          type='submit'
          value="Send"
        >
          Submit
        </button>
      </div>
    </Form>
  );
}

export default ApptForm;