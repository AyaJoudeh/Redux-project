import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../Redux/themeActions';
import { selectIsDarkMode } from '../Redux/themeSelectors';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo3.png';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'

const Navigation = ({ isDarkMode, toggleTheme }) => {
  
  return (
    
    <Navbar bg={isDarkMode ? 'dark' : 'light'} expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={isDarkMode ? 'text-white' : ''}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={isDarkMode ? 'text-white' : ''}>
              About
            </Nav.Link>
            <Nav.Link href="/contact" className={isDarkMode ? 'text-white' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link href="/blog" className={isDarkMode ? 'text-white' : ''}>
              Blog
            </Nav.Link>
          </Nav>
          <Button
  onClick={toggleTheme}
  className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
  data-tooltip={isDarkMode ? 'Switch to light theme for better readability' : 'Switch to dark theme fot better visibility at night'}
>
            {isDarkMode ? (
              <MdOutlineLightMode style={{ color: 'white' }} />
            ) : (
              <MdDarkMode style={{ color: 'black' }} />
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
