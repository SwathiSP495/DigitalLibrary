import React from 'react';
import './styles/menu.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'react-router-bootstrap';
import home from "./home.png";
import account from "./user.png";
import language from "./language.png";
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.toggleLanguage = this.toggleLanguage.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdownOpenForLanguage: false,
            accountDropDown: false
        };
    }

    toggleLanguage() {
        this.setState(prevState => ({
            dropdownOpenForLanguage: !prevState.dropdownOpenForLanguage
        }));
    }

    toggleDropDown() {
        this.setState({ accountDropDown: !this.state.accountDropDown });
    }

    render() {
        return (
            <div className="menu-container">
                <div className="menu-bg">
                    <Nav className="menu-wrapper">
                        <Dropdown isOpen={this.state.accountDropDown} onClick={this.toggleDropDown}>
                            <DropdownToggle nav caret>
                                <img src={account} className="icon" alt="eproc img" /> Account
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >Login</DropdownItem>
                                {this.props.isAuthenticated ? (<DropdownItem >Logout</DropdownItem>) : null}
                                <DropdownItem divider />
                                <DropdownItem href="/library/registration">
                                    Register
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownOpenForLanguage}
                            onClick={this.toggleLanguage}>
                            <DropdownToggle nav caret>
                                <img src={language} className="icon" alt="eproc-img-last-part" /> Language
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>English</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink href="#"><img src={home} className="icon" alt="Home-png" />Home</NavLink>
                        </NavItem>

                    </Nav>
                </div>
            </div>
        );
    }
}
