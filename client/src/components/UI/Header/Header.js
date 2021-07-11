import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
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
            <Nav.Link target="" href="#support" >
              <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} /> Support</Nav.Link>
            {/* <Nav.Link href="/"><FontAwesomeIcon className="icon-block" icon={faCog} /> Settings</Nav.Link>
            <Nav.Link href="/" className="last"><FontAwesomeIcon className="icon-block" icon={faExclamationCircle} /> Feedback</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        {/* <nav>
        <div className="heading">
          <h1>Teams</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#support">
            <span class="material-icons-outlined">
              help_outline
            </span>
          </a>Support
          </li>
          <li><a href="#support">
            <span class="material-icons-outlined">
              settings
            </span>
          </a>Settings
          </li>
          <li><a href="#support">
            <span class="material-icons-outlined">
              question_answer
            </span>
          </a>Feedback
          </li>
        </ul>
      </nav> */}
    </>
      )
}

      export default Header;