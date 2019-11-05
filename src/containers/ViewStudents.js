import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Col, Row } from 'react-bootstrap';
import Dashboard from "./Dashboard";
import './styles/header.css';
import Footer from './Footer';

const bg = require('./images/background.jpg');
const myStyle = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}
export default class ViewStudents extends React.Component {
    render() {
        const data = [{
            title: 'Data Structure',
            category: 23,
            author: {
                name: 'Jason Maurer',
                age: 23,
            },
            publisher: {
                name: "john",
                age: 45
            },
            isbn: 23456
        }
        ]

        const columns = [{
            Header: 'Title',
            accessor: 'title' // String-based value accessors!
        },
        {
            id: 'authorName', // Required because our accessor is not a string
            Header: 'Author Name',
            accessor: d => d.author.name // Custom value accessors!
        }, {
            Header: props => <span>Author Age</span>, // Custom header components!
            accessor: 'author.age'
        },
        {
            Header: 'Category',
            accessor: 'category',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        },
        {
            id: 'publisherName', // Required because our accessor is not a string
            Header: 'Publisher Name',
            accessor: d => d.publisher.name // Custom value accessors!
        }, {
            Header: props => <span>Publisher Age</span>, // Custom header components!
            accessor: 'publisher.age'
        }
        ]

        return (
            <div className="body-wrapper">
                <Row>
                    <Col xs="2" className="dashboard">
                        <Dashboard />
                    </Col>

                    <Col xs="10">
                        <div>
                            <h3 color="white"> View Details</h3>
                            <div style={myStyle} class="row">
                                <div backgroundColor="white">
                                    <ReactTable className="table"
                                        data={data}
                                        columns={columns}
                                        defaultPageSize='8'
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}