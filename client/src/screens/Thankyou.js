import React from 'react';
import { NavItem, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../index.css";

const Thankyou = () => {


  return (
    <>
    <br /><br /><br /><br /><br /><br /><br />

    <NavItem className='thank'>
      <Image width='150' src="https://www.freepnglogos.com/uploads/tick-png/tick-svg-png-icon-download-24.png"></Image>
    <h1>Thank You!</h1>
    <h4>Your order has been placed</h4>
    {/* <h1>Please check your email for further order information.</h1> */}
    <br />
    <hr/>
    <Link to="/">
    <Button>Go to Home</Button>
    </Link>
    </NavItem>
     
    </>
  );
}

export default Thankyou;