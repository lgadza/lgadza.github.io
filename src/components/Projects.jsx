import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import impuls from "../img/impulsProjImag.png";
import quiz from "../img/epicoquiz.png";
import spotify from "../img/Screenshot 2023-03-31 220222.png";
import team_gen from "../img/team_gen.png";
const ProjectsPage = () => {
  return (
    // <Container className="mt-4 projects">
    <Row className="d-flex mx-5 justify-content-center">
      <h3 className="my-4">Projects </h3>

      <Col sm={6} className="my-3">
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
                JavaScript, NodeJS, Express, MongoDB,Express, Postman,
                Bootstrap, CSS,
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
              <a
                href="https://www.loom.com/share/3a35f3ef876b4a9f87cb864a4627c85f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Demo Video</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="my-3">
        <Card className="card">
          <Card.Header className="py-0">
            <img className="img-project" src={spotify} alt="impuls" />
          </Card.Header>
          <Card.Body className="card-body-proj">
            <h5 className="text-start">Spotify Clone</h5>
            <p>
              This is a music application, built in a team set-up. Users can
              play, search for their songs
            </p>

            <div className="text-start">
              <span>
                <strong className="pr-1">Tech Used:</strong> HTML, JavaScript,
                Bootstrap, CSS,
              </span>
            </div>

            <div className="my-3">
              <a
                href="https://codequiz-taupe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>See Live</Button>
              </a>
              <a
                href="https://github.com/lgadza/fs-aug21-build-week-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3">Source Code</Button>
              </a>

              {/* <Button>Demo Video</Button> */}
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="my-3">
        <Card className="card">
          <Card.Header className="py-0">
            <img className="img-project" src={quiz} alt="impuls" />
          </Card.Header>
          <Card.Body className="card-body-proj">
            <h5 className="text-start">Quiz</h5>
            <p>This an educational quiz application for programmers.</p>

            <div className="text-start">
              <span>
                <strong className="pr-1">Tech Used:</strong> HTML, JavaScript,
                Bootstrap, CSS,
              </span>
            </div>

            <div className="my-3">
              <a
                href="https://codequiz-taupe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>See Live</Button>
              </a>
              <a
                href="https://github.com/lgadza/fs-aug21-build-week-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3">Source Code</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={6} className="my-3">
        <Card className="card">
          <Card.Header className="py-0">
            <img className="img-project" src={team_gen} alt="impuls" />
          </Card.Header>
          <Card.Body className="card-body-proj">
            <h5 className="text-start">Team Generator</h5>
            <p>
              This is my earliest work, its a team generator. It has made it in
              this list because it shows me the improvement I have made since I
              started programming. its not perfect, but I have advanced the
              logic in my recent application. I needed to use the same feature
              of teams generation. If interested check it out and after you
              check the advanced logic in{" "}
              <a
                href="https://impulsgaming.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                impulsgaming
              </a>{" "}
              password: 1234, and email: louis@gmail.com, in projects open Fifa
              23 Season 01, on the left navigation, open{" "}
              <strong>Placement</strong>
            </p>

            <div className="text-start">
              <span>
                <strong className="pr-1">Tech Used:</strong> HTML, JavaScript,
                Bootstrap, CSS,
              </span>
            </div>

            <div className="my-3">
              <a
                href="https://teams-genarator-app-unit-2-solo-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>See Live</Button>
              </a>
              <a
                href="https://github.com/lgadza/Teams_Genarator_App-Unit_2-SoloProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mx-3">Source Code</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    // </Container>
  );
};
export default ProjectsPage;
