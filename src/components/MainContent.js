import React from 'react';
import '../styles/MainContent.css'
import SquadVideo from '../assests/video/hero-vid-final-RF26.mp4'
import SocialProofImg from '../assests/images/Ellipse.png'
import Display from '../assests/images/image-display.png'
import DisplayFeature from '../assests/images/image-display-2.png'
import Review from '../assests/images/Ellipse-img.png'

import {Button, Container,Row, Col, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainContent() {
    

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
                        <img className='social-proof-img' src={SocialProofImg}></img>
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
                    <Col>
                    <div>
                        <img src={Display}></img>
                    </div>
                    </Col>
                    <Col>
                    <h2>The best builder for non-techies</h2>
                    <p>Intuitive and easy-to-use, yet very powerful & fast</p>

                    <div>
                        <Row className=''>
                        <Col>
                            <ul className='bullet-ul'>
                                <li>Drag & Drop builder</li>
                                <li>Global Colors & Fonts</li>
                                <li>Fully Responsive</li>    
                            </ul>
                        </Col>
                        <Col>
                            <ul className='bullet-ul'>
                                <li>Visual editing (no code)</li>
                                <li>36+ Powerful Elements</li>
                                <li>Clean code & optimised</li>    
                            </ul>
                        </Col>
                        </Row>
                    </div>
                    <div>
                    <Button>See why it is the best</Button>
                    </div>
                    </Col>
                </Row>
            </div>
            <div className='div-display'>
                <Row>
                    <Col>
                    <h2>100+ design templates,beautiful & mobile perfect</h2>
                    <ul className='bullet-ul-li'>
                        <li>Business</li>
                        <li>Sport & Travel</li>
                        <li>Education</li>
                        <li>Landing Pages</li>
                        <li>Health & Beauty</li>
                    </ul>
                    <div className='btn-display'>
                    <Button>View all design features</Button>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <img width="816" src={DisplayFeature}></img>
                    </div>
                    </Col>
                </Row>
            </div>

           
            </Container>
            <div className='div-review'>
                <Container style={{margin:'100px'}}>
                <h2>The reviews are in!</h2>
                <p>Be it great or less stellar, these reviews are 100% honest and real... just like us</p>
                <div >
                    <Row className='text-c' >
                        
                        <Col md className='p-2'>
                        <div className='boxed'>
                            <h5>Great alternative to Elementor & Divi builders</h5>
                            <p>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row >
                                <Col sm={2}>
                                <img src={Review} style={{width:'50px'}}></img>
                                </Col>
                                <Col sm={10}>
                                <p>Varelas</p>
                                <p>@varel</p>
                                </Col>
                            </Row>
                        </div>
                        </Col>

                        <Col md className='p-2'>
                        <div className='boxed'>
                            <h5>Great alternative to Elementor & Divi builders</h5>
                            <p>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row >
                                <Col sm={2}>
                                <img src={Review}></img>
                                </Col>
                                <Col sm={10}>
                                <p>Varelas</p>
                                <p>@varelas</p>
                                </Col>
                            </Row>
                        </div>
                        </Col>
                        <Col md className='p-2'>
                        <div className='boxed'>
                            <h5>Great alternative to Elementor & Divi builders</h5>
                            <p>
                            This Plugin uses an easy and beginner friendly drag-and-drop interface builder, 
                            but it provides you with the right options to continue working if your website gets bigger.
                            </p>
                            <Row>
                                <Col sm={2}>
                                <img src={Review}></img>
                                </Col>
                                <Col sm={8}>
                                <p>Varelas</p>
                                <p>@varelas</p>
                                </Col>
                            </Row>
                        </div>
                        </Col>
                        

                        
                        
                        
                    </Row>
                </div>
                </Container>
            </div>
        </body>
    )

}

export default MainContent;