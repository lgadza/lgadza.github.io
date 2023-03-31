import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="d-fl">
        <Navbar.Brand>LG</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Skills</Nav.Link>
          <Nav.Link href="#home">My work</Nav.Link>
          <Nav.Link href="#features">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
