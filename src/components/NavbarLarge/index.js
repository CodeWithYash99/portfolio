import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  RiHomeHeartFill,
  RiLightbulbFill,
  RiContactsBook2Fill,
} from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";

import "./index.css";

const NavbarLarge = () => {
  return (
    <div className="lg-navbar-container">
      <div className="lg-nav-brand-container">
        <h1 className="lg-nav-brand">PORTFOLIO.</h1>
      </div>

      <Navbar className="lg-nav-items-container">
        <Nav.Item className="lg-nav-item">
          <RiHomeHeartFill className="lg-nav-icon" />
          <Nav.Link href="/home" className="lg-item">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="lg-nav-item">
          <FcAbout className="lg-nav-icon" />
          <Nav.Link href="/about" className="lg-item">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="lg-nav-item">
          <RiLightbulbFill className="lg-nav-icon" />
          <Nav.Link href="/skills" className="lg-item">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="lg-nav-item">
          <AiFillProject className="lg-nav-icon" />
          <Nav.Link href="/projects" className="lg-item">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="lg-nav-item">
          <RiContactsBook2Fill className="lg-nav-icon" />
          <Nav.Link href="/contact" className="lg-item">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
};

export default NavbarLarge;
