import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from './Menu';
import Dashboard from "./Dashboard";
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import './styles/header.css';
import Circle from 'react-circle';
import Footer from './Footer';
import { MetadataService } from 'aws-sdk/global';
import { LinkContainer } from "react-router-bootstrap";



const bg = require('./images/books.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const Home = (props) => {
    return (
        <div className="body-wrapper">
            <Row>
                <Col xs="2" className="dashboard">
                    <Dashboard />
                </Col>

                <Col xs="10">
                    <div>
                        <div style={myStyle} class="row">
                            <div class="col-xs-6">
                                <Col xs="5">
                                    <Jumbotron style={{ width: '40rem', height: '200px', backgroundColor: '#DDE9EA', paddingTop: '10px' }}>
                                        <h4 className="search">Search book</h4>
                                        <hr class="new1" />
                                        <div >

                                            <div class="form-group">

                                                <div class="col-lg-8">
                                                    <label>Books:</label>
                                                    <input type="book" class="form-control" name="book" placeholder="Search book" />

                                                </div>
                                                </div>
                                                &nbsp;
                                                &nbsp;
                                                <div class="form-group">
                                                
                                                <div class="col-lg-8">
                                                <LinkContainer to="/book/search">
                                                    <Button as="input" type="submit" value="Search"
                                                    >Search</Button>
                                                    </LinkContainer>
                                                </div>
                                                
                                          
                                            </div>

                                        </div>
                                    </Jumbotron>
                                </Col>
                            </div>
                            <div class="col-xs-6">
                                <Col xs="5">
                                    <Jumbotron style={{ width: '40rem', height: '200px', backgroundColor: '#DDE9EA', paddingTop: '10px' }}>
                                        <h4 className="search">Search barcode</h4>
                                        <hr class="new1" />
                                        <div class="form-group">

                                            <div class="col-lg-8">
                                                <div>
                                                    <label>Barcode :</label>{" "}
                                                    <input type="book" class="form-control" name="book" placeholder="Search barcode" />
                                                </div>
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <div class="col-lg-8">
                                                <Button as="input" type="submit" value="Search"
                                                >Search</Button>
                                            </div>
                                        </div>
                                    </Jumbotron>
                                </Col>
                            </div>
                            <div>

                                <center>
                            <div className="circle">
                            
                                <Circle
                                    lineWidth={25}
                                    size={150}
                                    progress={69}
                                    progressColor="grey"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 2rem Helvetica, Arial, sans-serif'
                                    }}
                                    percentSpacing={6}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />
                                <br />
                               
                                books published
                                

</div>
</center>
                            </div>
                            <div>
                        {/* <Carousel class="item">
                            <Carousel.Item>
                                <Circle
                                    lineWidth={25}
                                    size={150}
                                    progress={69}
                                    progressColor="grey"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 3rem Helvetica, Arial, sans-serif'
                                    }}
                                    percentSpacing={6}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />

                                <Carousel.Caption>
                                    <h3>Books published</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Circle
                                    lineWidth={25}
                                    size={150}
                                    progress={69}
                                    progressColor="grey"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 3rem Helvetica, Arial, sans-serif'
                                    }}
                                    percentSpacing={6}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />

                                <Carousel.Caption>
                                    <h3>Books published</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Circle
                                    lineWidth={25}
                                    size={150}
                                    progress={69}
                                    progressColor="grey"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 3rem Helvetica, Arial, sans-serif'
                                    }}
                                    percentSpacing={6}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />

                                <Carousel.Caption>
                                    <h3>Books published</h3>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                    </div>
                        </div>
                    </div>
                    
                </Col>

            </Row>
            <Footer />
        </div >
    );
};

export default Home;



