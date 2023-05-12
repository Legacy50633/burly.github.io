import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import {GrAddCircle} from "react-icons/gr"
const Navy = () => {
  return (
   <>

    <Navbar bg="" fixed='top' expand="lg">
      <Container fluid>
        <img style={{marginRight:'20px'}} src="https://www.burlycare.com/static/media/logo.4d9ce206.svg" alt="" />
        
        <Navbar.Toggle style={{marginLeft:'100px'}} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Delhi" id="navbarScrollingDropdown" style={{fontWeight:"bolder"}}>
              <NavDropdown.Item href="#action3" ><b>Delhi</b> </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder= "&#9906; Search....."
              className="me-2"
              aria-label="Search"
              style={{borderRadius:'0.5em',width:'500px',height:'50px'}}
            />
              <Navbar.Brand href="#" style={{borderRight:' solid black',padding:"0.5em",marginLeft:'200px',color:'red',fontWeight:"bolder"}}>Call: 900-0098-765</Navbar.Brand>
            <Button variant="outline-danger" style={{fontWeight:"bold",borderRadius:'3em',marginLeft:'-10px'}}>Login/SignUp</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>




   </>
  )
}

export default Navy