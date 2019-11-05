import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboard from "./Dashboard";
import { Jumbotron} from 'react-bootstrap';
import './styles/header.css';
import Footer from './Footer';
import './styles/Settings.css';



const bg = require('./images/background.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
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
                            <center>
                                <Jumbotron style={{ width: '90rem', height: '10px', backgroundColor: 'white ', paddingTop: '10px' }}>
                                    <h4 className="success">Category Added Successfully</h4>
                                </Jumbotron>
                            </center>
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



