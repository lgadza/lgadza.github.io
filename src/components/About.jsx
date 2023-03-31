import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../img/1676047233839.jpeg";
const About = () => {
  return (
    <Container className="about mt-4">
      <Row className="d-flex justify-content-center">
        <h3 className="mb-4">About </h3>
        <Col md={12} lg={5}>
          <div>
            <img className="img-profile" src={aboutImg} alt="about-img" />
          </div>
        </Col>
        <Col md={12} lg={5} className=" d-flex align-items-center ">
          <p className="text-start mt-auto about-info">
            Fuelled by my unbridled passion for innovation and technology, I
            pour my heart and soul into building web experiences that leave
            lasting impressions I am well-equipped to provide innovative and
            effective solutions for web development. With my extensive technical
            knowledge and commitment to delivering high-quality results, I am
            confident in my ability to make a valuable contribution to any
            project or team.
          </p>
          {/* <div className="d-flex">
            <h6>Tech Stack</h6>
            <div className="d-flex">
              <div className="d-flex flex-column justify-content-between">
                <span className="mx-2">Javascript</span>
                <span className="mx-2">TypeScript</span>
                <span className="mx-2">React</span>
                <span className="mx-2">Nodejs</span>
                <span className="mx-2">Express</span>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <span className="mx-2">MongoDB</span>
                <span className="mx-2">Postgres</span>
                <span className="mx-2">CSS</span>
                <span className="mx-2">HTML</span>
                <span className="mx-2">Redux</span>
              </div>
            </div>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};
export default About;
