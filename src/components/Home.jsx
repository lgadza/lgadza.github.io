import { Button, Col, Container, Row } from "react-bootstrap";
import About from "./About";
import profileImg from "../img/IMG_1234.JPG";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <Container fluid>
      <Container fluid className="home px-0">
        <Row className="home-intro d-flex justify-content-center">
          <Col md={12} lg={4} className="text-center">
            <h2>
              Hi! My name is <span className="text-primary">Louis</span>
            </h2>
            <h6>I am a Full Stack Web Developer, based in Bialystok, Poland</h6>
            <div>
              <Button className="mx-3">Let's talk</Button>
              <Button>My Projects</Button>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div>
              <img className="img-profile" src={profileImg} alt="Louis" />
            </div>
          </Col>
        </Row>
      </Container>

      <About />
      <Row>
        <Skills />
      </Row>
      {/* <Row></Row> */}
      <Projects />
      <Contact />
    </Container>
  );
};
export default Home;
