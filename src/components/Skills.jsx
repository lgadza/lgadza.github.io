import { Container, Row, Col, Card } from "react-bootstrap";
const Skills = () => {
  return (
    <Container className="mt-4 skills">
      <Row className="d-flex justify-content-center">
        <h3 className="my-4">Skills </h3>

        <Col sm={6} md={4} lg={3}>
          <Card className="card">
            <Card.Header>Front End</Card.Header>
            <Card.Body>
              <div className="d-flex flex-column justify-content-between">
                <span className="mx-2">HTML</span>
                <span className="mx-2">CSS</span>
                <span className="mx-2">Redux</span>
                <span className="mx-2">JavaScript</span>
                <span className="mx-2">TypeScript</span>
                <span className="mx-2">Bootstrap</span>
                <span className="mx-2">Redux</span>
                <span className="mx-2">React</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card className="card">
            <Card.Header>Back End</Card.Header>
            <Card.Body>
              <div className="d-flex flex-column justify-content-between">
                <span className="mx-2">NodeJs</span>
                <span className="mx-2">Express</span>
                <span className="mx-2">MongoDB</span>
                <span className="mx-2">JavaScript</span>
                <span className="mx-2">Postgres</span>
                <span className="mx-2">Restful APIs</span>
                <span className="mx-2">Mongoose</span>
                <span className="mx-2">Sequelize</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card className="card">
            <Card.Header>Other</Card.Header>
            <Card.Body>
              <div className="d-flex flex-column justify-content-between">
                <span className="mx-2">Git</span>
                <span className="mx-2">Postman</span>
                <span className="mx-2">Redux</span>
                <span className="mx-2">GitHub</span>
                <span className="mx-2">Vs Code</span>
                <span className="mx-2">Heroku</span>
                <span className="mx-2">Vercel</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Skills;
