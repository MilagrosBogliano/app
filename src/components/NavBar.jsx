import React from 'react'
import{Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
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
    <Nav.Link eventKey={2} href="memes">
        <img className='w-25' src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" alt="carrito" />

    </Nav.Link>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar