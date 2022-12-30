import React from "react";
import { Card, Container,ListGroup, Button} from "react-bootstrap";
import '../styles/Pricingcard.css';


function Lifetimepricing(props) {

    return(
        
        <Container className="mt-5" >
            
            <Card>
                <Card.Body style={{backgroundColor: props.lifeprices.colorbody, color:props.lifeprices.colorbodytext}}>
                <div className="card-shift">
                    <Card.Title className="card-title fw-bold fs-1" style={{color:props.lifeprices.colorheader}}> ${props.lifeprices.lifetitle}</Card.Title>
                    <Card.Subtitle className="card-subtitle mb-5 fw-bold"  style={{color:props.lifeprices.colorheader}}>{props.lifeprices.lifeSubtitle}</Card.Subtitle>
                    <Card.Title className="fs-3 mb-5 fw-bold" style={{color:props.lifeprices.colorheader}}> {props.lifeprices.lifecardtitle}</Card.Title>
                </div>
                    <ListGroup>
                    <ul >
                        <li>{props.lifeprices.lifela}</li>
                        <li>{props.lifeprices.lifelb}</li>
                        <li>{props.lifeprices.lifelc}</li>
                        <li>{props.lifeprices.lifeld}</li>
                        <li>{props.lifeprices.lifele}</li>
                        <li>{props.lifeprices.lifelf}</li>  
                        <li>{props.lifeprices.lifelg}</li> 
                        <li>{props.lifeprices.lifelh}</li>
                    </ul>
                    </ListGroup>
                    <Button variant="primary"className="card-shift mb-5 btn-lg">{props.lifeprices.lifebuttontext}</Button>
                </Card.Body>
            </Card>
            
        </Container>

       
    )

}

export default Lifetimepricing;