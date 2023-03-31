import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import impuls from "../img/impulsProjImag.png";
const ProjectsPage = () => {
  return (
    // <Container className="mt-4 projects">
    <Row className="d-flex mx-5 justify-content-center">
      <h3 className="my-4">Projects </h3>

      <Col sm={6}>
        <Card className="card">
          <Card.Header className="py-0">
            <img className="img-project" src={impuls} alt="impuls" />
          </Card.Header>
          <Card.Body className="card-body-proj">
            <h5 className="text-start">Impulsgaming</h5>
            <p>
              The website is a gaming platform for users to register for various
              video games. It has the organizer and user side. Users can reserve
              a place at the tournament. Users can create an account and sign in
              to access the full range of features. Organizer organize
              tournaments and config all the settings for the tournament.
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
                <span>Password: 1234</span>
              </div>
            </div>
            <div className="my-3">
              <a
                href="https://impulsgaming.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>See Live</Button>
              </a>
              <a
                href="https://github.com/lgadza/Impuls_Gaming_Project/tree/main/impuls-gaming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3">Source Code</Button>
              </a>

              <Button>Demo Video</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6}>
        <Card className="card">
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
    // </Container>
  );
};
export default ProjectsPage;
