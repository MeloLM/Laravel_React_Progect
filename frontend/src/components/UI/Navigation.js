import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

    function Navigation() {
        return (
          <Navbar bg="dark" expand="md" variant="dark">
            <Container>
              <Navbar.Brand href="#home">React Laravel</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/add-article'>Add article</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
      }

export default Navigation;