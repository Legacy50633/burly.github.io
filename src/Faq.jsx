import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import "bootstrap/dist/css/bootstrap.min.css"
const Faq = () => {
  return (
  <>

     <h1 style={{textAlign:'center',fontWeight:'bolder',color:'red'}}>FAQS</h1>
 <center><p style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet consectetur adipisicing <elit className="br"></elit> Tempora dignissimos hic quae culpa sapiente iusto veritatis sequi illum cum, recusandae porro deleniti accusantium dolores quo,<br /> debitis suscipit odio iure sint!</p></center>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.icynene.fr/wp-content/uploads/2019/03/faq-isolation-770x374.jpg"
          alt="First slide"
          style={{opacity:'0.3'}}
        />
        <Carousel.Caption style={{color:'black'}}>
          <h3>How Burlycare takes care of patients on the
day of the surgery?</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.icynene.fr/wp-content/uploads/2019/03/faq-isolation-770x374.jpg"
          alt="Second slide"
          style={{opacity:'0.3'}}
        />

        <Carousel.Caption style={{color:'black'}}>
          <h3>How Burlycare takes care of patients on the
day of the surgery?</h3>
          <p style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.icynene.fr/wp-content/uploads/2019/03/faq-isolation-770x374.jpg"
          alt="Third slide"
          style={{opacity:'0.3'}}
        />

        <Carousel.Caption style={{color:'black'}}>
          <h3>How we Take Care of your Family?</h3>
          <p style={{fontWeight:'bold'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.icynene.fr/wp-content/uploads/2019/03/faq-isolation-770x374.jpg"
          alt="Second slide"
          style={{opacity:'0.3'}}
        />

        <Carousel.Caption style={{color:'black'}}>
          <h3>How Burlycare takes care of patients on the
day of the surgery?</h3>
          <p style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.icynene.fr/wp-content/uploads/2019/03/faq-isolation-770x374.jpg"
          alt="Third slide"
          style={{opacity:'0.3'}}
       
        />

        <Carousel.Caption style={{color:'black'}}>
          <h3>Success rate of surgeries?</h3>
          <br />
          <p style={{fontWeight:'bold'}}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<br /><br />
<div style={{textAlign:'center'}}>


   
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
 </div>
  </>
  )
}

export default Faq