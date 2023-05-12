import React from 'react'
import Cards from './Card'
import Spinner from 'react-bootstrap/Spinner';
const Into = () => {
  return (
   <>
   
      <div className='into'>
        <img className='im1' 
         src="https://media1.thehungryjpeg.com/thumbs2/800_3909589_5o4jsp638ndj4uf2r0g73targfzd8gi850h71zqm_doctor-office-queue-patients-waiting-their-turn-for-vaccination-or-co.jpg" 
        alt="" /> <br />
        <h1 style={{textAlign:'center'}}>Surgeries We Povide</h1>
        <div className='underline' style={{backgroundColor:'cyan',width:'200px',height:"5px",marginLeft:'600px',marginBottom:'100px'}}></div>
       <Cards />
       </div>
<br />

   </>
  )
}

export default Into