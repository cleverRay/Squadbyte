import React, { useState } from "react";
import {ToggleButtonGroup, ToggleButton, Container} from 'react-bootstrap'
import '../styles/Pricing.css';

function Pricing() {


    


    return(
        <Container className="d-flex justify-content-center">

        <ToggleButtonGroup  type="radio" name="options" defaultValue={1} className="button-placing " > 

        <ToggleButton ToggleButton id="tbg-radio-1" value={1} className="btn-pricing" >
         Lifetime
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} className="btn-pricing-B">
          Yearly
        </ToggleButton>

        </ToggleButtonGroup>

       
        </Container>
    )
}

export default Pricing;