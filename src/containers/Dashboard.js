import React, { Component } from 'react';
import './styles/dashboard.css';
// import book from './books--v2.png';
// import category from './eproc_logo.jpg';
// import author from './author.png';
// import student from './student.png';
// import issue from './history.png';
// import library from './library.png';
import { Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Jumbotron, Button, Carousel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';

const bg = require('./dashboard.jpg');
const myStyle = {
    width: '100%',
    height: '450px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}

// const getList = [
//     {
//         src: book,
//         name: 'Book',
//     },
//     {
//         src: category,
//         name: 'Category',
//     },
//     {
//         src: author,
//         name: 'Author',
//     },

//     {
//         src: student,
//         name: 'Student',
//     },
//     {
//         src: issue,
//         name: 'Issue History',
//     },
//     {
//         src: library,
//         name: 'Library',
//     },
//     {
//         src: library,
//         name: 'Link1',
//     },
//     {
//         src: library,
//         name: 'Link2',
//     }

// ];

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper" style={myStyle}>
                {/* {getList.map((item, index) => (
                    <div className="dashboard-row-wrapper" key={index}>
                        <Row className="dashboard-row">
                            <img src={item.src} alt="item.name" className="dashboard-icon" />
                            <span>
                                <a href="/" >{item.name}</a>
                                <a href="/category">{item.Category}</a>

                            </span>

                        </Row>
                    </div>
                ))} */}
                <LinkContainer to="/notes/new">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Book"
                    />
                </LinkContainer>
                <LinkContainer to="/library/category">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Category"
                    />
                </LinkContainer>
                <LinkContainer to="/library/student">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Student"
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Issue History"
                    />
                </LinkContainer>
                <LinkContainer to="/library/author">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Author"
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="More"
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="More"
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="Library"
                    />
                </LinkContainer>
                

            </div>
        );
    }
}

export default Dashboard;
