import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss'
import { Navbar, Nav } from "react-bootstrap";
import 'material-icons/iconfont/material-icons.css';

const Header = () => {
  return (
    <>
      <Navbar id="dblue" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img id="logo" src="https://img.icons8.com/fluent/48/000000/microsoft-teams-2019.png" alt="msteams" />
        <Navbar.Brand href="/">Microsoft Teams</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link target="" href="#support" id="last" >
              <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} /> Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <nav>
      <img id="logo" src="https://img.icons8.com/fluent/48/000000/microsoft-teams-2019.png" alt="msteams" />
        <div className="heading">
          <h1>Microsoft Teams</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#support">
            <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} /> Support
          </a>
          </li>
        </ul>
      </nav> */}
    </>
  )
}

export default Header;