import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    src="./logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to ="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to ="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to ="/resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavBar;