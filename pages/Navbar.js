import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'
import styles from './Navbar.module.css'


function NavBar(props) {

  if (props.isHeader) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className={styles.RowReverse}>
        <Image 
          src="/persona.jpg"  
          width="40"
          height="40"
          className="d-inline-block align-top rounded-circle"
          alt="persona"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link href="#inicio"><img src="./logo.png" alt="Logo" />
              <Navbar.Brand id='logo' href="#home">SkinPro</Navbar.Brand></Nav.Link>
              <Nav className="me-auto">
              <Nav.Link href={props.hrefLinkFacebook}>{props.textLinkFacebook}</Nav.Link>
              <Nav.Link href={props.hrefLinkInstagram}>{props.textLinkInstagram}</Nav.Link>
              <Nav.Link href={props.hrefLinkSteam}>{props.textLinkSteam}</Nav.Link>
              <CartWidget />
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}
export default NavBar;