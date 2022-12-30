import React from "react";
import { Card, Container, ListGroup, Button} from "react-bootstrap";
import '../styles/Pricingcard.css';

function Pricingcard(props) {

    return(

    
        
        <Container className="mt-5" >
            <Card>
                <Card.Body style={{backgroundColor: props.prices.colorbody, color:props.prices.colorbodytext}}>

                    <div className="card-shift" >
                    <Card.Title className="card-title fw-bold fs-1" style={{color:props.prices.colorheader}} > ${props.prices.title}</Card.Title>
                    <Card.Subtitle className="card-subtitle mb-5 fw-bold"  style={{color:props.prices.colorheader}}>{props.prices.Subtitle}</Card.Subtitle>
                    <Card.Title className="fs-3 mb-5 fw-bold" style={{color:props.prices.colorheader}}> {props.prices.cardtitle}</Card.Title>
                    </div>
            
                    <ListGroup>
                    <ul>
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
                    <Button variant="primary" className="card-shift mb-5 btn-lg">{props.prices.buttontext}</Button>
                </Card.Body>
            </Card>
            
        </Container>

       
    )

}

export default Pricingcard;