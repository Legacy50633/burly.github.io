import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
  return (
    <>
    
<div className='t1' >
<div className='d2'>
  <div>
    <img style={{width:'200px',height:'200px',marginBottom:'-10px'}} src="https://www.burlycare.com/static/media/logo.4d9ce206.svg" alt="" />

<p style={{marginTop:-50}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia non iste? </p>
</div>
<div style={{marginTop:'100px',display:"flex",color:'blue'}}>
    <ul>
        <li>Contact  </li>
        <li>Help</li>
        <li>Know </li>
    </ul>
    <ul>
      <li>Surgeries</li>
      <li>Doubts</li>
      <li>Expertise</li>

    </ul>
    <ul>
<li>Home</li>
<li>Exit</li>
<li>Logout</li>

    </ul>
    </div>
</div>
</div>



    </>
  )
}

export default Footer