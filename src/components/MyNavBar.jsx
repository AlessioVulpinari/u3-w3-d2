import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"

const MyNavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' data-bs-theme='dark'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to='/favourites' className={"nav-link"}>
              Favourites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
