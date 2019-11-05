import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboard from "./Dashboard";
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
const SearchCategory = (props) => {
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


                            </div>
                        </div>
                    </div>

                </Col>

            </Row>
            <Footer />
        </div >
    );
};

export default SearchCategory;



