import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        
        <Row>
          <Col md={8} className="home-about-description">
          


            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
         
            <p className="home-about-body">
            <h1>
                I'M
                <strong className="main-name"> Bishal Parikh </strong>
              </h1>
            <br />
            I fell in love with Cloud Computing, and it has become my playground. 🚀
            <br />
            <br />
            I specialize in <b className="purple">AWS and Azure cloud platforms, with expertise in Python, JavaScript, and DevOps tools like Docker, Kubernetes, and Terraform.
            <br /> </b>
            <br />
            My passion lies in building scalable <b className="purple">cloud solutions, web technologies, and blockchain applications.</b>
            <br />
            <br />
            I love working with <b className="purple">React, Next.js, and Node.js, combining modern frameworks with cloud infrastructure</b> to create high-performance applications.
            <br />
            <br />
            From serverless architectures to automated <b className="purple">CI/CD pipelines</b>, I thrive on solving real-world challenges and optimizing workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/beeeshal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bishalparikh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
