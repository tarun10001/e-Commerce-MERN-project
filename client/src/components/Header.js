import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Modal,
  Button,
  Row,
  Image
} from "react-bootstrap";
import "../index.css";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        bg="dark"
        className="nav"
        variant="dark"
        expand="lg"
        collapseOnSelect
        fixed="top"
      >
        <Container>
          <LinkContainer to="/">
            <Row className='img2'>
              <Image className='mr-5' width='50'  src="https://media.istockphoto.com/vectors/vector-logo-letter-t-double-wing-vector-id1140092103?k=20&m=1140092103&s=612x612&w=0&h=16zpSaLweEzOxOdZZKkE53E51hqKNStNSCyyTL269Do=" />
              <h2 className="tk">TK MART</h2>
            </Row>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Modal show={show}>
            <Modal.Body as="h5">Are you sure you want to Sign Out ?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Link to="/" onClick={logoutHandler}>
                <Button variant="primary" onClick={handleClose}>
                  SIGN OUT
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="cartt">
                  <Row className="mr-2">
                    <h5>{cartItems.length}</h5>
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Row>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown
                  className="sig"
                  title={userInfo.name}
                  id="username"
                >
                  {/* <LinkContainer to="/profile">
            <NavDropdown.Item className="sig">Profile</NavDropdown.Item>
            </LinkContainer> */}
                  <NavDropdown.Item className="sig" onClick={handleShow}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="sig">
                    <i className="fas fa-user"></i>Sign-In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
