import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import "bootstrap/dist/css/bootstrap.min.css"
const Numbers = () => {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
<div className='d5'>
    <div className='img9' style={{width:'100%',height:'200px',marginLeft:"650",
      backgroundImage:'url("https://tse4.mm.bing.net/th?id=OIP.uYMoEhw2lMTxKeyymmoKkwAAAA&pid=Api&P=0")',
   
      }}>
   </div>
   <div className='fe1'>
   <center> <h1>Feed Back Time!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Harum reiciendis omnis tenetur iusto </p>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fuga unde voluptatem maxime qui, fugit consequuntur quis et </p>
       </center>
   </div>

    </div> <br /> 
    <div className='but1'  >
              <Button  variant="success"  onClick={handleShow}>
        Click to Share Experience
      </Button>
      </div>
         

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> About our Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Feedback and Suggestions</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      
      
</>
  )
}

export default Numbers