import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import "../Styles/BookForm.css";

// function BookForm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className='buttonDiv'>
//       <Button variant="primary" id="button" onClick={handleShow}>
//         Book Online
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Book Appointment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="BookingForm.ControlInput1">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="name@example.com"
//                 autoFocus
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Name</Form.Label>
//               <Form.Control as="textarea" rows={1} />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea2"
//             >
//               <Form.Label>Service Type</Form.Label>
//               <Form.Control as="textarea" rows={1} />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

function BookForm() {
  return (
    <div className="container" id="bookFormDiv">
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
    </div>
  )
}

export default BookForm;