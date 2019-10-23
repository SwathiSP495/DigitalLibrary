import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Menu from './Menu';
import Dashboard from "./Dashboard";
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import './header.css';
import Circle from 'react-circle';
import Footer from './Footer';
import { MetadataService } from 'aws-sdk/global';
import LoaderButton from "../components/LoaderButton";



const bg = require('./background.jpg');
const myStyle = {
    width: '100%',
    height: '475px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const AddCategory = (props) => {
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
                                    <Jumbotron style={{ width: '80rem', height: '425px', backgroundColor: '#DDE9EA  ', paddingTop: '10px' }}>
                                   
                                       
                                        <div >

                                            <div class="form-group">

                                                <div class="col-lg-8">
                                                <label>Admission No:</label>
                                                    <input type="book" class="form-control" name="book" />
                                                </div>
                                                </div>
                                                <div class="form-group">
                                            <div class="col-lg-8">
                                                   
                                            <label>Name:</label>
                                                    <input type="book" class="form-control" name="book" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                            <div class="col-lg-8">
                                                   
                                            <label>Grade:</label>
                                                    <input type="book" class="form-control" name="book" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                            <div class="col-lg-8">
                                                   
                                            <label>Section:</label>
                                                    <input type="book" class="form-control" name="book" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                            <div class="col-lg-8">
                                                   
                                            <label>Description:</label>
                                                    <input type="book" class="form-control" name="book" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                            <div class="col-lg-8">
                                                   
                                            <label>Profile Status:</label>
                                            <div className="radio">
          <label>
            <input type="radio" value="option1" />
           Active
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option1" />
            Inactive
          </label>
          
        </div>
        <div>
        <LinkContainer to="/student/success">
          <Button as="input" type="submit" value="Search"
                                                    >Submit</Button>
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

export default AddCategory;



