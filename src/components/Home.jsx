import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Menu from '../containers/Menu';
import Dashboard from "../containers/Dashboard";
import {  Button } from 'react-bootstrap';
import './header.css';
import Circle from 'react-circle';



const bg = require('./background.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white'

}
const Home = (props) => {
    const { onInputChange, name } = props;
    return (
        <div className="body-wrapper">
            <Row>
                <Col xs="2" className="dashboard">
                    <Dashboard />
                </Col>
                <Col xs="10">
                    <Col xs={{ size: 6, order: 1, offset: 6 }}>
                        <Menu />
                    </Col>
                    &nbsp;
                    &nbsp;
                    <div style={myStyle} class="row">
                        <div class="col-xs-6">
                            <Col xs="5">
                                {/* <Card style={{ width: '30rem', height: '200px', backgroundColor: 'white', paddingTop: '10px' }}>
                                    <Card.Body> */}
                                        <h4 className="search">Search book</h4>
                                        <hr />
                                        {/* <Card.Text> */}

                                            <div >

                                                <div class="form-group">

                                                    <div class="col-md-8">
                                                        <input type="book" class="form-control" name="book" placeholder="Search book" />

                                                    </div>
                                                    &nbsp;
                                            <div class="col-md-8">
                                                        <Button as="input" type="submit" value="Search"
                                                        />
                                                    </div>
                                                </div>




                                            </div>
                                        {/* </Card.Text>
                                    </Card.Body>
                                </Card> */}
                            </Col>
                        </div>
                        <div class="col-xs-6">
                            <Col xs="5">
                                {/* <Card style={{ width: '30rem', height: '200px', backgroundColor: 'white', paddingTop: '20px' }}>
                                    <Card.Body> */}
                                        <h4 className="search">Search barcode</h4>
                                        <hr />
                                        {/* <Card.Text> */}

                                            <div >

                                                <div class="form-group">

                                                    <div class="col-md-8">
                                                        <input type="book" class="form-control" name="book" placeholder="Search barcode" />

                                                    </div>
                                                    &nbsp;
                                            <div class="col-md-8">
                                                        <Button as="input" type="submit" value="Search"
                                                        />
                                                    </div>
                                                </div>




                                            </div>
                                        {/* </Card.Text>
                                    </Card.Body>
                                </Card> */}


                            </Col>
                        </div>
                            <div className="circle">

                                <Circle
                                    lineWidth={15}
                                    size={150}
                                    progress={69}
                                    progressColor="cornflowerblue"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 2rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                    percentSpacing={5}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />
                                <br/>
                                books published
                              
</div>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
                            <div className="circle">

                                <Circle
                                    lineWidth={15}
                                    size={150}
                                    progress={9}
                                    progressColor="cornflowerblue"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 2rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                    percentSpacing={5}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />
                                <br/>
                                Authors
</div>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
                       
                            <div className="circle">

                                <Circle
                                    lineWidth={15}
                                    size={150}
                                    progress={63}
                                    progressColor="cornflowerblue"
                                    bgColor="whitesmoke"
                                    textColor="blue"
                                    textStyle={{
                                        font: 'bold 2rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                    }}
                                    percentSpacing={5}
                                    roundedStroke={true}
                                    showPercentage={true}
                                    showPercentageSymbol={true}
                                    align="center"
                                />
                                <br/>
                                New books
                                
</div>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
                        <div className="circle">

                            <Circle
                                lineWidth={15}
                                size={150}
                                progress={9}
                                progressColor="cornflowerblue"
                                bgColor="whitesmoke"
                                textColor="blue"
                                textStyle={{
                                    font: 'bold 2rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                }}
                                percentSpacing={5}
                                roundedStroke={true}
                                showPercentage={true}
                                showPercentageSymbol={true}
                                align="center"
                            />
                            <br/>
                            Users
</div>
                    </div>

                </Col>
            </Row>
        </div>
    );
};

export default Home;