import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Dashboard from "./Dashboard";
import { Jumbotron, Button } from 'react-bootstrap';
import './styles/header.css';
import Footer from './Footer';


const bg = require('./images/issuepending.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const IssuePending = (props) => {
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
                                    <Jumbotron style={{ width: '80rem', height: '350px', backgroundColor: '#DDE9EA  ', paddingTop: '0px' }}>


                                        <div >
                                            <div className="issue">
                                                <div class="form-group">

                                                    <div class="col-lg-8">
                                                        <label>Name</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Book Name :</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Barcode:</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Issue Date:</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Renewed Date:</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Returned Date:</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>


                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <label>Status:</label>
                                                        <input type="book" class="form-control" name="book" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-lg-8">

                                                        <LinkContainer to="/student/update">
                                                            <Button as="input" type="submit" value="Search"
                                                            >Update</Button>
                                                        </LinkContainer>
                                                    </div>
                                                </div>


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

export default IssuePending;



