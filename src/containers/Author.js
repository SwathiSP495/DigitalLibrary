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



const bg = require('./images/author.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const Author = (props) => {
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
                                    <Jumbotron style={{ width: '40rem', height: '250px', backgroundColor: '#DDE9EA ', paddingTop: '10px' }}>
                                        <h4 className="search">Add Author</h4>
                                        <hr class="new1" />
                                        <div >

                                            <div class="form-group">

                                                <div class="col-lg-8">
                                                    <label>Author:</label>
                                                    <input type="book" class="form-control" name="book" placeholder="add Category" />
                                                </div>
                                                <div class="col-lg-8">
                                                    <label>Description:</label>
                                                    <input type="book" class="form-control" name="book" placeholder="Description" />
                                                </div>
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                                <div class="form-group">
                                                <div class="col-lg-8">
                                                    {/* <Button as="input" type="submit" value="Search"
                                                    >Add</Button> */}
                                                    {/* <LinkContainer to="/library/add"> */}
                                                        <Button>Add</Button>
                                                           
                                                       
                                                    {/* </LinkContainer> */}
                                                </div>
                                            </div>

                                        </div>
                                    </Jumbotron>
                                </Col>
                            </div>
                            <div class="col-xs-6">
                                <Col xs="5">
                                    <Jumbotron style={{ width: '40rem', height: '250px', backgroundColor: '#DDE9EA ', paddingTop: '10px' }}>
                                        <h4 className="search">Search Author</h4>
                                        <hr class="new1" />
                                        <div class="form-group">

                                            <div class="col-lg-8">
                                                <div>
                                                    <label>Author :</label>{" "}
                                                    <input type="book" class="form-control" name="book" placeholder="Search category" />
                                                </div>
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <div class="col-lg-8">
                                            {/* <LinkContainer to="/library/search"> */}
                                                <Button as="input" type="submit" value="Search"
                                                >Search</Button>
                                                {/* </LinkContainer> */}
                                            </div>
                                        </div>
                                    </Jumbotron>
                                </Col>
                            </div>
                            <div>


                            </div>
                        </div>
                    </div>

                </Col>

            </Row>
            <Footer />
        </div >
    );
};

export default Author;



