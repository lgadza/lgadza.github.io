import { Container, Row, Col, Card } from "react-bootstrap";
const Contact = () => {
  return (
    <Container className="mt-4 pb-5 contact">
      <Row className="d-flex justify-content-center">
        <h3 className="my-4">Contact Me </h3>

        <Col sm={6} md={4} lg={3}></Col>
        <Col sm={6} md={4} lg={3}></Col>
        <Col sm={6} md={4} lg={3}></Col>
      </Row>
    </Container>
  );
};
export default Contact;
