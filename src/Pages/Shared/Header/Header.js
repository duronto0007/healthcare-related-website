import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
  console.log(user);
    return (
        <>
  
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">SHAPE</Navbar.Brand>
   
    <Navbar.Toggle />
    
    <Navbar.Collapse className="justify-content-end">
     
    </Navbar.Collapse>
    <Nav className="me-auto">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#trainers">Trainers</Nav.Link>
      <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
      <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>

     {user?.email?
      <Button onClick={logOut} variant="light"> logout </Button>:
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}
    </Nav>
     
    <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Container>
  </Navbar>

  
</>
    );
};

export default Header;