import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from 'bootstrap';
const Cards=()=> {
  return (
    <>
        <div className='cardgroups'>  
        <CardGroup >
          <Card  >
            <Card.Img  variant="top"
             src="https://tse1.mm.bing.net/th?id=OIP.w3xT6qMvhDhSAt6hRdCjAwHaGc&pid=Api&P=0"
             className='im3' 
           
             />
            <Card.Body>
              <Card.Title>Hernia</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Done 2 Days ago</small>
            </Card.Footer>
          </Card>
          <Card >
            <Card.Img variant="top"
             src="https://tse1.mm.bing.net/th?id=OIP.w3xT6qMvhDhSAt6hRdCjAwHaGc&pid=Api&P=0" />
            <Card.Body>
              <Card.Title>Laproscopy</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Done  3 weeks ago</small>
            </Card.Footer>
          </Card>
          <Card  >
            <Card.Img variant="top" 
            src="https://tse1.mm.bing.net/th?id=OIP.w3xT6qMvhDhSAt6hRdCjAwHaGc&pid=Api&P=0" />
            <Card.Body>
              <Card.Title>Fissure</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Done a week ago</small>
            </Card.Footer>
          </Card>
          <Card >
            <Card.Img variant="top"
             src="https://tse1.mm.bing.net/th?id=OIP.w3xT6qMvhDhSAt6hRdCjAwHaGc&pid=Api&P=0" />
            <Card.Body>
              <Card.Title>Open Heart</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Done 2 months ago</small>
            </Card.Footer>
            
          </Card>
        </CardGroup>
        
        </div>
        </>
      );
    
  
}

export default Cards