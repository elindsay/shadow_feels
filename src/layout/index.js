import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Container from 'react-bootstrap/Container';
import CatLogo from 'assets/mystic-cat-resized.svg';
import PsychedelicBackground from 'assets/psychedelic-background.jpg'

const Layout = ({splash, children}) => {
  return (
    <div>
     <Navbar bg="primary">
       <Link to="/">
        <Navbar.Brand className="py-0 logo-text">
            <img
              src={CatLogo}
              height="60"
              className="d-inline-block mr-2 my-0 p-0"
              alt="Shadow Feel Logo"
            />
            Shadow Feels
        </Navbar.Brand>
      </Link>
      <Nav className="ml-auto mr-3">
        <Link className="text-black mr-2" to="login" >
          <NavItem className="text-black">Journal</NavItem>
        </Link>
        <Link className="text-black mr-2" to="login" >
          <NavItem className="text-black">Blog</NavItem>
        </Link>
        <Link className="text-black mr-2" to="login" >
          <NavItem className="text-black">Resources</NavItem>
        </Link>
        <Link className="text-black mr-2" to="login" >
          <NavItem className="text-black">About</NavItem>
        </Link>
        <Link className="text-black" to="login" >
          <NavItem className="text-black">Login</NavItem>
        </Link>
      </Nav>
      </Navbar>
      <div className={splash ? "splash" : "hidden"} style={{backgroundImage: `url(${PsychedelicBackground})`}}>
        &nbsp;
      </div>
      <div className={splash ? "splash-overlay" : "hidden"} >
        &nbsp;
      </div>
      
      <Container>
        { children }
      </Container>
    </div>
  )
}

export default Layout;
