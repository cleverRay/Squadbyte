import React from "react";
import { Card, Container, ListGroup, Button, Row, Col } from "react-bootstrap";


function Pricingcard(props) {

    return(
        
        <Container className="mt-5" >
            
            <Card>
                <Card.Body>
                    <Card.Title> ${props.prices.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.prices.Subtitle}</Card.Subtitle>
                    <Card.Title> {props.prices.cardtitle}</Card.Title>
                    <ListGroup>
                    <ul >
                        <li>{props.prices.la}</li>
                        <li>{props.prices.lb}</li>
                        <li>{props.prices.lc}</li>
                        <li>{props.prices.ld}</li>
                        <li>{props.prices.le}</li>
                        <li>{props.prices.lf}</li>  
                        <li>{props.prices.lg}</li> 
                        <li>{props.prices.lh}</li>
                    </ul>
                    </ListGroup>
                    <Button variant="primary">{props.prices.buttontext}</Button>
                </Card.Body>
            </Card>
            
        </Container>

       
    )

}

export default Pricingcard;