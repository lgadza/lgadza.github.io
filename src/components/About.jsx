import { Container, Row, Col } from "react-bootstrap";
const About = () => {
  return (
    <Container className="about">
      <Row>
        <Col>
          <span className="text-start">Hi, my name is</span>
          <h3 className="text-start">Louis Gadza </h3>
          <h3 className="text-start">
            Fuelled by my unbridled passion for innovation and technology, I
            pour my heart and soul into building web experiences that leave
            lasting impressions{" "}
          </h3>
          <p className="text-start">
            I am a Full Stack Developer based in Bialystok, Poland. I am
            well-equipped to provide innovative and effective solutions for web
            development. With my extensive technical knowledge and commitment to
            delivering high-quality results, I am confident in my ability to
            make a valuable contribution to any project or team.
          </p>
          <div className="d-flex">
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
          </div>
        </Col>
        {/* <Col>
          <div>
            <img src="../../public/Louis profile .JPG" alt="louis Gadza" />
          </div>
        </Col> */}
      </Row>
    </Container>
  );
};
export default About;
