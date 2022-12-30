
import {ToggleButtonGroup, ToggleButton, Container} from 'react-bootstrap'
import '../styles/Pricing.css';

function Pricing(props) {


    


    return(
        <Container className="d-flex justify-content-center">
          

        <ToggleButtonGroup  type="radio" name="options" defaultValue={1} > 
        <ToggleButton  id="tbg-radio-1" value={1} className="btn-pricing  p-3 fw-bold fs-5" onClick={props.handleCategory} >
         Lifetime
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2} className="btn-pricing-B  p-3 fw-bold fs-5" onClick={props.handleCategory}>
          Yearly
        </ToggleButton>
        </ToggleButtonGroup>

       
        </Container>
    )
}

export default Pricing;