

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Menu from './Menu';
import Dashboard from "./Dashboard";
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import './styles/header.css';
import Circle from 'react-circle';
import Footer from './Footer';
import { MetadataService } from 'aws-sdk/global';
import LoaderButton from "../components/LoaderButton";
import picture from './images/datastructure.jpg';
import Java from './images/java.jpg';
import ReactJS from './images/ReactJS.jpg';
import javascript from './images/javascript.jpg';
import es6 from './images/es6.jpg';
import spring from './images/springboot.jpg';
import c from './images/c.jpg';
import cplus from './images/cplus.jpg';
import html from './images/html.jpg';
import python from './images/python.jpg';
import php from './images/php.jpg';
import R from './images/R.jpg';



const bg = require('./images/issue.jpg');
const myStyle = {
    width: '100%',
    height: '210px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}

const bg2 = require('./images/issue.jpg');
const myStyle2 = {
    width: '100%',
    height: '190px',
    backgroundImage: `url(${bg2})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const SearchBook = (props) => {



    return (
        <div className="body-wrapper">
            <Row>
                <Col xs="2" className="dashboard">
                    <Dashboard />
                </Col>

                <Col xs="10">
                    <div>
                        <div style={myStyle} class="row">
                            <div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={picture} width="95" height="150"></img>{' '}
                                            <a href="https://www.cet.edu.in/noticefiles/280_DS%20Complete.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={Java} width="95" height="150"></img>
                                            <a href="http://iiti.ac.in/people/~tanimad/JavaTheCompleteReference.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={ReactJS} width="95" height="150" ></img>
                                            <a href="https://html5hive.org/wp-content/uploads/2018/04/The-Complete-Beginners-Guide-to-React_Dyrr.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={javascript} width="95" height="150" ></img>
                                            <a href="http://www.stilson.net/documentation/javascript.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={es6} width="95" height="150" ></img>
                                            <a href="https://www.tutorialspoint.com/es6/es6_tutorial.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={spring} width="95" height="150" ></img>
                                            <a href="https://docs.spring.io/spring-boot/docs/current/reference/pdf/spring-boot-reference.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            </div>
                            

                        </div>


                        <div style={myStyle2} class="row">
                            <div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={c} width="95" height="130"></img>{' '}
                                            <a href="http://www2.cs.uregina.ca/~hilder/cs833/Other%20Reference%20Materials/The%20C%20Programming%20Language.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={cplus} width="95" height="130"></img>
                                            <a href="http://160592857366.free.fr/joe/ebooks/ShareData/C++%20-%20The%20Complete%20Reference%204e.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={html} width="95" height="130" ></img>
                                            <a href="https://www.dcpehvpm.org/E-Content/BCA/BCA-II/Web%20Technology/the-complete-reference-html-css-fifth-edition.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={python} width="95" height="130" ></img>
                                            <a href="https://python.cs.southern.edu/pythonbook/pythonbook.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={php} width="95" height="130" ></img>
                                            <a href="https://solaborateappeus.blob.core.windows.net/upload-documents/f02333f5-6d4f-4988-91ef-da2db5187746.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            <div class="col-xs-2">
                                <Col xs="2">
                                    <div class="form-group">

                                        <div class="col-lg-8" >
                                            <img src={R} width="95" height="130" ></img>
                                            <a href="https://www.cs.upc.edu/~robert/teaching/estadistica/rprogramming.pdf">
                                                <Button backgroundColor="green"
                                                >View Book</Button>
                                            </a>
                                        </div>
                                    </div>

                                </Col>
                            </div>
                            </div>
                            

                        </div>



                    </div>

                </Col>

            </Row>
            <Footer />
        </div >
    );
};

export default SearchBook;



