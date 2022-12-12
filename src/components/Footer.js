import React from "react";
import Logo from '../assests/images/Logo.png';
import { Col, Container, Row } from "react-bootstrap";



function Footer() {

    return (

        <>
        <Container className="mt-5">
            <Row>
                <Col sm={4}>
                <img
                    src={Logo}
                    width="160"
                    // height="100"
                    className="d-inline-block align-top mb-4"
                    alt="Squadbyte logo"
                />

                <p className="content-footer"> 2010 — 2020</p>
                <p>Privacy — Terms</p>
                </Col>
                <Col>
                <p className="fw-bold">Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                <p>Product</p>
                </Col>
                <Col>
                <p className="fw-bold" >Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                <p>Features</p>
                </Col>
                <Col>
                <p className="fw-bold" >Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
                <p>Resources</p>
               
                </Col>
                <Col>
                <p className="fw-bold" >Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                
                </Col>
            </Row>
            
        </Container>

        <Container fluid className='bar-coloor bar-coloor-B'>
        <Container>
        <p className='fw-bold mt-3'>Designed by Squadinventive 2022</p>
        </Container>
        </Container>
        </>
        
    )

}

export default Footer;