import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './styles/dashboard.css';
import book from './books--v2.png';
import category from './eproc_logo.jpg';
import author from './author.png';
import student from './student.png';
import issue from './history.png';
import library from './library.png';

const getList = [
    {
        src: book,
        name: 'Book',
    },
    {
        src: category,
        name: 'Category',
    },
    {
        src: author,
        name: 'Author',
    },
    
    {
        src: student,
        name: 'Student',
    },
    {
        src: issue,
        name: 'Issue History',
    },
    {
        src: library,
        name: 'Library',
    },
    {
        src: library,
        name: 'Link1',
    },
    {
        src: library,
        name: 'Link2',
    }
    
];

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper">
                {getList.map((item, index) => (
                    <div className="dashboard-row-wrapper" key={index}>
                        <Row className="dashboard-row">
                            <img src={item.src} alt="item.name" className="dashboard-icon" />
                            <span>
                <a href="/" >{item.name}</a>
                <a href="/category">{item.Category}</a>

              </span>
              
                        </Row>
                    </div>
                ))}
            </div>
        );
    }
}

export default Dashboard;
