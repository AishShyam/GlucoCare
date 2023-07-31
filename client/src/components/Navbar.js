import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import type2Logo from "../assets/diabetes.png";
import T2DMLogo from "../assets/information.png";
import SelfCareLogo from "../assets/hands-holding-heart.png";
import FAQLogo from "../assets/help.png";
import { Link } from "react-router-dom";
import userLogo from "../assets/user.png";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function NavBar() {
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await axios.get("api/v1/auth/logout");
    toast.success("Logging out...");
  };

  return (
    <>
      <Navbar className="navbar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="navbar--title">
            <Nav.Link as={Link} to="/dashboard">
              <img src={type2Logo} width="35px" alt="GlucoCare" /> GlucoCare
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/t2dminfo">
              <Navbar.Brand className="navbar--option">
                <img src={T2DMLogo} width="30px" alt="type 2 diabetes" />
                <span className="caption">T2DM</span>
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link as={Link} to="/selfcare">
              <Navbar.Brand className="navbar--option">
                <img src={SelfCareLogo} width="30px" alt="self care" />
                <span className="caption">Self Care</span>
              </Navbar.Brand>
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
              <Navbar.Brand className="navbar--option">
                <img src={FAQLogo} width="30px" alt="FAQ" />
                <span className="caption">FAQ</span>
              </Navbar.Brand>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="dropdown">
                <img src={userLogo} width="20px" alt="User" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={logoutUser}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
