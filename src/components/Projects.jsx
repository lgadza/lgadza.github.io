import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import impuls from "../img/impulsProjImag.png";
const Projects = () => {
  return (
    // <Container className="mt-4 projects">
    <Row className="d-flex mx-5 justify-content-center">
      <h3 className="my-4">Projects </h3>

      <Col sm={6} md={4}>
        <Card className="card">
          <Card.Header className="py-0">
            <img className="img-project" src={impuls} alt="impuls" />
          </Card.Header>
          <Card.Body className="card-body-proj">
            <h5 className="text-start">Impulsgaming</h5>
            <p>
              The website is a gaming platform for users to register for various
              video games. Users can reserve a place at the tournament. Users
              can create an account and sign in to access the full range of
              features. Users can browse and search for games to play, either
              singleplayer or multiplayer. Users can view game ratings and
              reviews from other players to help them decide what to play. Users
              can compete with other players in tournaments or leader boards to
              win prizes or bragging rights. Users can purchase gift cards
              through the website's online store. The website will also offer
              features such as game news and updates
            </p>

            <div className="text-start">
              <span>
                <strong className="pr-1">Tech Used:</strong> React, Redux,
                JavaScript, NodeJS, Express, MongoDB, Postman, Bootstrap, CSS,
              </span>
            </div>
            <div className="text-start">
              <span>
                <strong>Demo Account</strong>
              </span>
              <div className="d-flex flex-column">
                <span>Email: louis@gmail.com</span>
                <span>PassWord: 1234</span>
              </div>
            </div>
            <div className="my-3">
              <Button>
                <Nav.Link href="https://impulsgaming.vercel.app/">
                  See Live
                </Nav.Link>
              </Button>
              <Button className="mx-3">
                <Nav.Link href="https://github.com/lgadza/Impuls_Gaming_Project/tree/main/impuls-gaming">
                  Source Code
                </Nav.Link>
              </Button>

              <Button>Demo Video</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4}>
        <Card className="card">
          <Card.Body></Card.Body>
        </Card>
      </Col>
      <Col sm={6} md={4}>
        <Card className="card">
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
    // </Container>
  );
};
export default Projects;
