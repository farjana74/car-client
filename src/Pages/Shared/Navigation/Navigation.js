import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from '../../../images/logo_02_1x.png';
import useAuth from './../../../hooks/useAuth';
import Dashboard from './../../Dashboard/Dashboard/Dashboard';
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="blue" variant="light" className='shadow-sm nav-header-link-text py-3  sticky-top nav-bg  '>
      <Container>
        <Navbar.Brand to="/home">
          <img src={logo} alt="" className='img-fluid' width={"150"} height={"50"} />
        </Navbar.Brand>
        <Navbar.Toggle className='text-white bg-white' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  ">
            <Nav.Link as={Link} to="/home" className="pe-sm-3 ">Home</Nav.Link>


            <Nav.Link as={Link} to="/about" className="pe-sm-3">About Us</Nav.Link>
            <Nav.Link as={Link} to="/explore" className="pe-sm-3 ">Explores</Nav.Link>



            {user?.email ?

              <Nav>
                <Nav.Link className="pe-sm-3  " as={Link} to="/dashboard">Dashboard</Nav.Link>
                <button onClick={logOut} on className="logout-button ms-5  "> Logout</button>


              </Nav>
              :
              <Nav.Link as={Link} to="/login" className="login-button ms-5  ">Login</Nav.Link >
            }





          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    //       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //       <Container>
    //       <Navbar.Brand href="#home">
    //         <img src={logo} alt="" />
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="ms-auto fs-5 text-primary">
    //           <Nav.Link as={Link}  to="/home">Home</Nav.Link>
    //           <Nav.Link as={Link}  to="/about">About</Nav.Link>
    //           <Nav.Link as={Link}  to="/explore">Explore</Nav.Link>


    //           {user?.email?

    //              <Nav>
    //                 <button onClick={logOut} on className="bg-primary rounded"> Logout</button>

    //              <Nav.Link className="text-white mx-2 bg-primary rounded p-1" as={Link}  to="/dashboard">Dashboard</Nav.Link>
    //              </Nav>
    //           :
    // <Nav.Link className="text-white bg-primary rounded p-2 px-3"  as={Link}  to="/login#login">Login</Nav.Link>
    // }
    // <Navbar.Text className="text-primary">



    // <a href="#login"> {user?.displayName}</a>
    //           </Navbar.Text>

    //         </Nav>

    //       </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
  );
};

export default Navigation;