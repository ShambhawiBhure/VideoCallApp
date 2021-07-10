import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss'
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
      // <Navbar id="dblue" collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <img id="logo" src="https://img.icons8.com/fluent/48/000000/microsoft-teams-2019.png" alt="msteams" />
      //   <Navbar.Brand href="/">Microsoft Teams</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //   <Navbar.Collapse id="responsive-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="/"></Nav.Link>
      //       <Nav.Link href="/"></Nav.Link>
      //     </Nav>
      //     <Nav>
      //       <Nav.Link target="" href="#support" >
      //         <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} /> Support</Nav.Link>
      //       <Nav.Link href="/"><FontAwesomeIcon className="icon-block" icon={faCog} /> Settings</Nav.Link>
      //       <Nav.Link href="/" className="last"><FontAwesomeIcon className="icon-block" icon={faExclamationCircle} /> Feedback</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
      <>
      <nav>
        <div className="heading">
          <h1>Teams</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#support">
            <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
            </a>Support
          </li>
          <li><a href="#support">
            <FontAwesomeIcon className="icon-block" icon={faCog} />
            </a>Settings
          </li>
          <li><a href="#support">
            <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
            </a>Feedback
          </li>
        </ul>
      </nav>
      </>
  )
}

export default Header;