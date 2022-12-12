import React, { useState } from 'react';
import '../styles/MainContent.css'
import SquadVideo from '../assests/video/hero-vid-final-RF26.mp4'
import SocialProofImg from '../assests/images/Ellipse.png'
import Display from '../assests/images/image-display.png'
import DisplayFeature from '../assests/images/image-display-2.png'
import Review from '../assests/images/Ellipse-img.png'

import { StarFill } from 'react-bootstrap-icons'
import {Button, Container,Row, Col, ButtonGroup, ToggleButton} from 'react-bootstrap';

import Pricing from './Pricing';
import Pricingcard from './Pricingcard';
import Pricingcarddata from './Pricingcarddata';
//import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {

    let PricingStorage = Pricingcarddata.map( (prices) => {
        return <Pricingcard 
                key={prices.id}
                prices={prices}/>
    })

    const [pricingToggle, setPricingToggle] = useState(true)

    
    return(
        <body>
            <Container>
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
            <div className='social-proof'>
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
            </div>
            
            <div>
                <Row>
                    <Col >
                    <div >
                        <img width="700" src={Display} alt="" />
                    </div>
                    </Col>
                    <Col>
                    <h2 style={{fontWeight: "bold"}}>The best builder for non-techies</h2>
                    <p className='mt-4'>Intuitive and easy-to-use, yet very powerful & fast</p>

                    <div>
                        <Row className='mt-4'>
                        <Col>
                            <ul>
                                <li>Drag & Drop builder</li>
                                <li>Global Colors & Fonts</li>
                                <li>Fully Responsive</li>    
                            </ul>
                        </Col>
                        <Col>
                            <ul>
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
                </Row>
            </div>
            <div className='div-display'>
                <Row>
                    <Col>
                    <h2 style={{fontWeight: "bold"}}>100+ design templates,beautiful & mobile perfect</h2>
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
                <p className='text-sub'>Start building your dream website</p>
                <p className='text-sub-p'>Get started with Squadbyte Free today, no credit card needed... or step up to PRO</p>
               
                {/* <div className='button-placing d-flex justify-content-center'> 
                    <Button className='w-25 p-3 fs-4 rounded-pill btn-flat ' type='radio'>Lifetime</Button>
                    <Button className='w-25 p-3 fs-4  rounded-pill btn-flat-C button-placing-B' >Yearly</Button>
                </div> */}

                <Pricing/>
                <div className='d-flex justify-content-center'>
                {PricingStorage}
                </div>

            </Container>
            <Container fluid className='bar-coloor'>
            </Container>
            
          
        </body>
    )

}

export default MainContent;