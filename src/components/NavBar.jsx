import{Container, Nav, Navbar} from 'react-bootstrap';
import CartWidget from './CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/">Nosotros</NavLink>
          <NavLink to="/categoria/Bikinis" className={({isActive})=> isActive ?'' :'' } >Bikini</NavLink>
          <NavLink to="/categoria/Enterizas">Enteriza</NavLink>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
