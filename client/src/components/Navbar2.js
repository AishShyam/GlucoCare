import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import type2Logo from "../assets/diabetes.png";
import { Link } from "react-router-dom";


function NavBar2() {
  return (
    <>
      <Navbar className="navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="navbar--title">
            <Nav.Link as={Link} to="/dashboard">
              <img src={type2Logo} width="35px" alt="GlucoCare" /> GlucoCare
            </Nav.Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar2;
