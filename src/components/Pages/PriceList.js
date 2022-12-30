import React from "react";
import { Container } from "react-bootstrap";

import Pricing from "../Pricing";


function PriceList(props) {
return(
    <Container>
         <p className='text-sub'>Start building your dream website</p>
                <p className='text-sub-p'>Get started with Squadbyte Free today, no credit card needed... 
                or step up to PRO</p>
       
        <Pricing handleCategory={props.handleCategory}/>
        
        <div className='d-flex justify-content-center'>
                {props.PricingStorage}
         </div>
    </Container>
)
}
export default PriceList;