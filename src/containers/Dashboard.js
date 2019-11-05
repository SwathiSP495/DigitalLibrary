import React, { Component } from 'react';
import './styles/dashboard.css';
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from '../components/LoaderButton';

const bg = require('./images/dashboard.jpg');
const myStyle = {
    width: '100%',
    height: '450px',
    backgroundImage: `url(${bg})`,
    backgroundSize: `cover`,
    backgroundColor: 'white',
    paddingTop: '20px'

}

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper" >

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
                        text="..."
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="..."
                    />
                </LinkContainer>
                <LinkContainer to="/issuehistory">
                    <LoaderButton
                        block
                        type="submit"
                        bsSize="large"
                        text="..."
                    />
                </LinkContainer>


            </div>
        );
    }
}

export default Dashboard;
