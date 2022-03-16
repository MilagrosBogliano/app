import React from 'react';
import{Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Bikini</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Enteriza</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Tanquini</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Triquini</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <CartWidget />
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar