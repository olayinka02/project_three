import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import navicon from './image/navicon.svg';

class Navbarxx extends Component {
  render() {
    return (
      <div>
           
            <Navbar bg="none" expand="lg" varient="primary" classname="navbar" >
            <Navbar.Brand href="#home">
            <img
            src={navicon}
            className="d-inline-block align-top imgicon"
            alt="logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Courses</Nav.Link>
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Schedule</Nav.Link>
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Study groups</Nav.Link>
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Tickets</Nav.Link>
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Profile</Nav.Link>
                <Nav.Link style={{color:"blue",}}  className="navname" href="#home">Logout</Nav.Link>
                
                <Nav.Link style={{color:"black",}}  className="badgebodyiconx" href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" width='16' height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                </Nav.Link>
                <Nav.Link style={{color:"black",}}  className="badgebodyicony" href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                  </svg>
                </Nav.Link>
                <Nav.Link style={{color:"black",}}  className="badgebodyiconz" href="#home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
                </Nav.Link>
                

              
               
               
            </Nav>
            </Navbar.Collapse>
            </Navbar>
                         
  </div>
      
    );
  }
}



export default Navbarxx;