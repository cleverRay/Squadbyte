import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import "../../styles/RegisterPage.css";
import Logo from "../../assests/images/Logo2.png";
import {HouseDoorFill} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterPage() {
  return (
    <body className="Regbody">

  
<Container className="">

     <div className="d-flex justify-content-end"  >
        
        <Link to="/">
        <HouseDoorFill className="mt-3" size={40}  color="white"/>
        </Link>
    </div>

    <div  className="d-flex justify-content-center ">
           <img
              color="white"
              src={Logo}
              width=""
              //height="100"
              className="mt-5 ms-5 "
              alt="Squadbyte logo"
          />
    </div>
   
    <Row className="vh-100 d-flex justify-content-center align-items-center ">
        
    <Card style={{ width: '40rem', height: '35rem' }} className='shadow position-absolute mt-5'>
    <div className="d-flex justify-content-center  position-relative top-0 start-50 translate-middle">
            <Button className="w-25 p-3 btn-auth-register shadow-sm">Register</Button>
            <Button className="w-25 p-3 btn-auth-register-B shadow-sm">Login</Button>
        </div>
        <Row className="vh-100 d-flex justify-content-center align-items-center ">
       
        <Card.Body className="d-flex justify-content-center ">
                <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-semibold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-semibold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn-flat-R w-50 fw-bold p-2" >
                    LOGIN
                </Button>
                </Form>
    </Card.Body>
    
    </Row>
    </Card>
    </Row>
</Container>
    </body>
  );
}

export default RegisterPage;






// function RegisterPage() {
//     return(
//         <body style={{backgroundColor:"olive"}}>
//         <Container>
            
//         </Container>
//         </body>
//     )

// }

// export default RegisterPage;