import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Dashboard from "./Dashboard";
import { Jumbotron, Button} from 'react-bootstrap';
import './styles/header.css';
import Footer from './Footer';



const bg = require('./images/students.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
const Student = (props) => {
    
   
    
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
                                    <Jumbotron style={{ width: '60rem', height: '325px', backgroundColor: '#DDE9EA ', paddingTop: '10px' }}>
                                    <LinkContainer to="/student/add">
                                    <Button as="input" type="submit" value="Search"
                                                    >Add</Button>
                            </LinkContainer>
                            <LinkContainer to="/library/student">
                            <Button as="input" type="submit" value="Search"
                                                    >Search Students</Button>
                                                    </LinkContainer>
                                                    <LinkContainer to="/student/view">
                                                    <Button as="input" type="submit" value="Search"
                                                    >View All Students</Button>
                                                    </LinkContainer>
                                                    
                                        <h4 className="search">Student Search</h4>
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
<div class="col-lg-6">
    <Button as="input" type="submit" value="Search"
     onClick={this.handleButton}>Search</Button>
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

export default Student;



