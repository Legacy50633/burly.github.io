
import Navy from "./Navy"
import Cards from "./Card";
import Stacks from "./Stack";
import Into from "./Into";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Advantages from "./Advantages";
import Appointment from "./Appointment";
import Faq from "./Faq";
import Footer from "./Footer";
import Numbers from "./Numbers";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
    <Navy/>
    <section style={{height:"100%"}}>
  
  <div  style={{marginTop:'100px'}}>
<Stacks/>
</div>
<div><h1 style={{textAlign:"center",marginTop:'100px'}}>Book <span style={{color:'red'}}> Free AppointMents</span> With Our </h1>
<h1 style={{textAlign:"center"}}>Expert Doctors</h1></div>
<div style={{height:'300px',opacity:'0.7',backgroundImage:'url("https://tse4.mm.bing.net/th?id=OIP.j5mmopxruhU3BznCHRyRDwHaE7&pid=Api&P=0")'}}>

<br /><br />
</div>
<br /><br />
<div className="bts">
<Button variant="outline-danger" >Book Appointment</Button>
<Button variant="outline-danger" >Call Our Agent</Button>
<Button variant="outline-danger" >Enquiries</Button>
</div>       
<Into/>
<div  style={{marginTop:'200px'}}><Advantages/></div>

<br /><br />
<Appointment/>
</section><br /><br />
<section className="sec1" >
<Faq/><br /><br /><br />
<Numbers/>
</section>
<div className="fot">
<Footer/>
</div>


    </>
  );
}

export default App;
