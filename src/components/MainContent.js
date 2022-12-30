
import '../styles/MainContent.css';
import SquadVideo from '../assests/video/hero-vid-final-RF26.mp4';
import Editor from '../assests/video/editor.mp4';
//import SocialProofImg from '../assests/images/Ellipse.png'
import Display from '../assests/images/image-display.png';
import DisplayFeature from '../assests/images/image-display-2.png';
import Review from '../assests/images/Ellipse-img.png';
import Business from '../assests/images/Procurement-hero.png';
import Designer from '../assests/images/designer.png';
import BigBuilding from '../assests/images/big-building.png';


import { StarFill } from 'react-bootstrap-icons';
import {Button, Container,Row, Col} from 'react-bootstrap';

import Pricing from './Pricing';

//import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent(props) {

    // let PricingStorage = Pricingcarddata.map( (prices) => {
    //     return <Pricingcard 
    //             key={prices.id}
    //             prices={prices}/>
    // })

   

    // function setPricingToggle() {

    // }
    
    return(
        
        <body>
        {/* <Container fluid className='hero-body'>
            <div className='hero-div'>
                <Row className='text-center'>
                    <Col>
                    <h2 className='hero-text'>
                    Get The Next-gen Business <br/> Website<span className='hero-text-span'>You Can Afford</span>
                    </h2>
                    <p className='hero-text-p'>Create 'no-code' websites in minutes. Once you go SquadByte, nothing else feels easy!</p>

                        <Button className='' size="lg">Get started Now. It’s Free</Button>
                    </Col>
                </Row>
            </div>
            <div className='hero-video'>
                <Row   className='hero-video'>  
                    <video   width="1070" height="650" loop="true" autoplay="true" muted>
                        <source src={SquadVideo}  />
                    </video>
                </Row>
            </div>
            </Container> */}

<Container fluid className='' style={{backgroundColor:'#010947'}}>
            <div className=''>
                <Row className='text-center'>
                    <Col>
                    <h2 className='hero-text'>
                    Get The Next-gen Business <br/> Website You Can Afford
                    </h2>
                    <p className='hero-text-p'>Create 'no-code' websites in minutes. Once you go SquadByte, nothing else feels easy!</p>

                        <Button className='' size="lg">Get Started Now. It’s Free</Button>
                    </Col>
                </Row>
            </div>
            <div className='hero-video'>
                <Row   className='hero-video'>  
                    <video   width="1070" height="650" loop="true" autoplay="true" muted>
                        <source src={SquadVideo}  />
                    </video>
                </Row>
            </div>
            </Container>

            <Container>
           
            </Container>


          


            <Container>
            {/* <div className='social-proof'>
                <Row>
                    <Col className='text-center'>
                    <div >
                        <img className='social-proof-img' src={SocialProofImg} alt=""></img>
                        <h4>Claudia Sonia</h4>
                        <h5>creative designer</h5>
                    </div>
                    </Col>
                    <Col >
                    <div >
                        <p className='social-proof-img-p'>
                        Squadbyte is godsend for everyone struggling with site builders that 
                        monopolise the industry with catch phrases like ‘Best Drag & Drop 
                        builder'... I have tried all the so-called 'top' options and the only one 
                        that truly lives up to its name is Brizy. It opens up the floodgates to 
                        more productivity and less insanity”
                        </p>
                    </div>
                    </Col>
                </Row>
            </div> */}

                 <div className='text-center mt-5'>
                    <p className='fw-bold everyone'>Building a Website made easy. For everyone.</p>
                    <p className='fs-5'>Use the intuitive drag and drop website builder to create websites fast and easy. 
                        Design pages you always wanted in a hassle-free way.</p>
                        <p className='fs-5 mt-4'>SquadByte empowers you to build professional sites using a full WordPress page builder, 
                            templates, blocks, elements, and extensions. No coding skills required.</p>
                    </div>


                    <div style={{backgroundColor:''}} className='p-5 mt-5'>
                    <Row className=''>
                        <Col style={{backgroundColor:'#abb8c3'}} className='p-5'>
                        <div className=''>
                        <h2 className='fs-2 fw-bold' style={{color: 'white'}}>Developers & Agencies</h2>
                        <p className='fs-5 mt-3' style={{color: 'white'}}>The only tool you need to speed up your Website project delivery. Squadbyte gives absolute freedom when working with custom CSS
                         or JavaScript, developing custom elements, controlling access, and building complete layouts.</p>

                         <Button className='btn-lg p-3 mt-2 btn-flat-BB' variant="outline-primary" style={{color:'white'}}>Learn More</Button>

                         <div className='text-center'>
                        <img width="250"  src={BigBuilding} alt="" />
                        </div>
                        
                        </div>
                        </Col>

                        <Col style={{backgroundColor: '#222'}} className='p-5' >
                        <h2 className='fs-2 fw-bold' style={{color: 'white'}}>Designers</h2>
                        <p className='fs-5 mt-3' style={{color: 'white'}}>Design professional-looking and pixel-perfect pages with a code-free design solution. 
                        We have the most feature-rich design controls to bring your project to life.</p>

                        <Button className='btn-lg p-3 mt-5 btn-flat-BB' variant="outline-primary">Learn More</Button>
                        <div className='text-center'>
                        <img width="300"  src={Designer} alt="" />
                        </div>
                        </Col>
                    </Row>  
         
                    <Row className='' style={{backgroundColor:'#e8b647'}} >
                        <Col >
                        <div className=''>
                        <img width="500" src={Business} alt="" />
                        </div>
                        </Col>

                        <Col >
                        <h2 className='fs-1 fw-bold' style={{color: 'white'}}>Business owners</h2>
                        <p className='fs-5 mt-3' style={{color: 'white'}}>SquadByte supports the way you run a business. Build your brand with an easy-to-use drag and drop editor and professional templates to get your business online.</p>

                        <Button className='btn-lg p-3 mt-3 btn-flat-BB' variant="outline-primary">Learn More</Button>
                        </Col>

                    </Row>  
        </div>
                

            
            <div className='div-display'>
                <Row className='gx-4'>
                    <Col>
                    <h2 className='fs-1 fw-bold'>The best builder for non-techies</h2>
                    <p className='mt-2'>Intuitive and easy-to-use, yet very powerful & fast</p>

                    <div>
                        <Row className='mt-2'>
                        <Col>
                            <ul className=''>
                                <li>Drag & Drop builder</li>
                                <li>Global Colors & Fonts</li>
                                <li>Fully Responsive</li>    
                            </ul>
                        </Col>
                        <Col>
                            <ul className=''>
                                <li>Visual editing (no code)</li>
                                <li>36+ Powerful Elements</li>
                                <li>Clean code & optimised</li>    
                            </ul>
                        </Col>
                        </Row>
                    </div>
                    <div>
                    <Button className='btn-lg btn-flat-B' variant="outline-primary">See why it is the best</Button>
                    </div>
                    </Col>

                    <Col >
                    <div >
                        <img width="700" src={Display} alt="" />
                    </div>
                    </Col>
                </Row>
            </div>
            

            <div className='div-display'>
                <Row className=''>
                    <Col >
                    <div className='shadow'>
                    <video   width="700" height="500" loop="true" autoplay="true" muted>
                        <source src={Editor}  />
                    </video>
                    </div>
                    </Col>

                    <Col >
                    <h2 className='fs-2 fw-bold'>Design responsive websites. Good look on any device – guaranteed.</h2>
                    <p className='fs-5 mt-3'>SquadByte provides powerful features for website <br/> making and editing in a super simple manner.</p>
    
                    <Button className='btn-lg p-3 mt-3 btn-flat'>Learn More</Button>
                    </Col>

                </Row>
            </div>

            <div className='div-display'>
                <Row>
                    <Col>
                    <h2 className='fs-2 fw-bold' >100+ design templates, beautiful & mobile perfect</h2>
                    <ul className='bullet-ul-li'>
                        <li>Business</li>
                        <li>Sport & Travel</li>
                        <li>Education</li>
                        <li>Landing Pages</li>
                        <li>Health & Beauty</li>
                    </ul>
                    <div className='btn-display'>
                    
                    <Button className='btn-lg p-3 btn-flat'>View all design features</Button>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <img width="700" src={DisplayFeature} alt=""/>
                    </div>
                    </Col>
                </Row>
            </div>
            </Container>

            <div className='div-review'>
                <Container>
                <h2>The reviews are in!</h2>
                <p>Be it great or less stellar, these reviews are 100% honest and real... just like us</p>
                
                    <Row className='mt-5'>
                        <Col md className='m-2 p-5 boxed'>

                            <div className='star-icon'>
                            <StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/>
                            </div>

                            <p className='review-header'>Great alternative to Elementor & Divi builders</p>
                            <p className='review-summary '>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row >
                                <Col md={2}>
                                <img src={Review} alt=""></img>
                                </Col>
                                <Col>
                                <p className='review-title'>Varelas</p>
                                <p className='review-name'>@varels</p>
                                </Col>
                            </Row>
                        
                        </Col>

                        <Col md className='m-2 p-5 boxed '>

                            <div className='star-icon'>
                            <StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/>
                            </div>

                            <p className='review-header'>Great alternative to Elementor & Divi builders</p>
                            <p className='review-summary'>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row >
                                <Col md={2}>
                                <img src={Review} alt=""></img>
                                </Col>
                                <Col>
                                <p className='review-title'>Varelas</p>
                                <p className='review-name'>@varels</p>
                                </Col>
                            </Row>
                        
                        </Col>

                        <Col md className='m-2 p-5 boxed'>

                            <div className='star-icon'>
                            <StarFill/> <StarFill/> <StarFill/> <StarFill/> <StarFill/>
                            </div>

                            <p className='review-header'>Great alternative to Elementor & Divi builders</p>
                            <p className='review-summary'>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row >
                                <Col md={2}>
                                <img src={Review} alt=""></img>
                                </Col>
                                <Col>
                                <p className='review-title'>Varelas</p>
                                <p className='review-name'>@varels</p>
                                </Col>
                            </Row>
                        </Col>   
                    </Row>
                </Container>
            </div>
            <Container>

            <div style={{marginTop:'100px'}}>
                <Row className=''>
                    <Col >
                    <div className='shadow'>
                    <video   width="700" height="500" loop="true" autoplay="true" muted>
                        <source src={Editor}  />
                    </video>
                    </div>
                    </Col>

                    <Col >
                    <h2 className='fs-1 fw-bold'>Design responsive websites. Good look on any device – guaranteed.</h2>
                    <p className='fs-5 mt-3'>SquadByte provides powerful features for website <br/> making and editing in a super simple manner.</p>
    
                    <Button className='btn-lg p-3 mt-3 btn-flat'>Learn More</Button>
                    </Col>

                </Row>
            </div>
            
                <p className='text-sub'>Start building your dream website</p>
                <p className='text-sub-p'>Get started with Squadbyte Free today, no credit card needed... or step up to PRO</p>
           
                {/* <div className='button-placing d-flex justify-content-center'> 
                    <Button className='w-25 p-3 fs-4 rounded-pill btn-flat ' type='radio'>Lifetime</Button>
                    <Button className='w-25 p-3 fs-4  rounded-pill btn-flat-C button-placing-B' >Yearly</Button>
                </div> */}

                <Pricing handleCategory={props.handleCategory}/>
                <div className='d-flex justify-content-center'>
                {props.PricingStorage}
                </div>

            </Container>
            <Container fluid className='bar-coloor text-center' >
                <p className='bar-coloor-B '>
                Join the thousands of web professionals <br/> who already use SquadByte
                </p>
                <Button className='btn-lg mt-3'>Get Started</Button>
            </Container>
            
          
        </body>
    )

}

export default MainContent;