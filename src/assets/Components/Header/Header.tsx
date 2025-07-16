import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'; // NavLink giúp active khi click vào thẻ
import './Header.scss';
const Header = () => {
  return (
    <Navbar
      // bg="dark"
      // data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <NavLink className="navbar-brand" to="/">
          TRANG CHỦ
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex col">
            <NavLink className="nav-link col-1" to="/">
              <i className="bi bi-house-door"> </i>
              Home
            </NavLink>
            <NavLink className="nav-link col-1" to="user">
              <i className="bi bi-people"> </i> User
            </NavLink>
            <NavLink className="nav-link col-1" to="admin">
              <i className="bi bi-envelope"></i>Admin
            </NavLink>
            <NavLink className="nav-link col-1" to="gobal">
              <i className="bi bi-globe-europe-africa-fill"></i>Gobal
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn btn-primary">Login</button>
            <button className="btn btn-secondary">SignUp</button>
            {/* <NavDropdown title="Settings" id="basic-nav-dropdow">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign Up</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
