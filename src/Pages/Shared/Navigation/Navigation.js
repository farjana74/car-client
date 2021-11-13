import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../../../images/logo_02_1x.png';
import useAuth from './../../../hooks/useAuth';
import Dashboard from './../../Dashboard/Dashboard/Dashboard';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const {user,logOut}=useAuth();
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link}  to="/home">Home</Nav.Link>
          <Nav.Link as={Link}  to="/explore">Explore</Nav.Link>


          {user?.email?
         
             <Nav>
                <button onClick={logOut} on className="bg-primary"> Logout</button>
             
             <Nav.Link className="text-white bg-primary rounded p-2" as={Link}  to="/dashboard">Dashboard</Nav.Link>
             </Nav>
          :
<Nav.Link className="text-white bg-primary rounded p-2"  as={Link}  to="/login#login">Login</Nav.Link>
}
<Navbar.Text className="text-primary">



<a href="#login"> {user?.displayName}</a>
          </Navbar.Text>
         
        </Nav>
       
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;