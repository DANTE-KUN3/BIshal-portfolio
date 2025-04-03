import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bishal </span>
            from <span className="purple"> India.</span>
            <br />
            <br />
            
            I am currently employed as a Cloud Engineer at K21Academy .
            <br />
            <br />
            Cloud Support Engineer passionate about AWS, DevOps, and automation. 
            <br />
            <br />
            With a BCA in Computer Applications and hands-on experience in cloud computing, CI/CD, and infrastructure automation, 
            <br />
            <br />
            I specialize in building scalable cloud solutions. 
            <br />
            <br />
            My projects range from serverless applications to decentralized voting systems and automated CI/CD pipelines.

            <br />
            <br />
            <br />

            I'm AWS-certified and skilled in Terraform, Docker, and Kubernetes, with experience conducting training sessions and improving cloud workflows. 

            <br />
            <br />
            
            I thrive on solving technical challenges and constantly upskilling in the latest cloud technologies.

            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>

            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>

          <li className="about-activity">
              <ImPointRight /> Exploring New Palaces
            </li>

          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "If you think you are smartest person in the room then you are in the wrong room,always more to improve upon "{""}
          </p>
          <footer className="blockquote-footer">Bishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
