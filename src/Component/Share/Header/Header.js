import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <header className="">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="black"
        variant="dark"
        className="py-3 "
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3>
              <i>Lawyer Iqbal</i>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link> */}
              <Nav.Link as={Link} to="/checkout">
                Check Out
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Me
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.displayName || user?.email ? (
                <button onClick={logOut}>Log Out</button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              <Nav.Link as={Link} eventKey={2} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
