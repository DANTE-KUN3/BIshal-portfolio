import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import future from "../../Assets/Projects/future.png";
import dapp from "../../Assets/Projects/dapp.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={future}
              isBlog={false}
              title="Future Self Messaging Platform"
              description="Developed a serverless web application that allows users to schedule and send messages to their future selves via email. Built the backend using AWS Lambda, API Gateway, and DynamoDB for scalability and cost efficiency. The frontend was deployed on Vercel for seamless performance. Implemented AWS Security Groups and VPC to enhance security, ensuring safe data transmission and storage."
              ghLink="https://github.com/DANTE-KUN3/Future"
              demoLink="future-r10ezqwn4-bishals-projects-17f06703.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dapp}
              isBlog={false}
              title="Decentralized Voting Application (DApp)"
              description="Created a secure, blockchain-based voting system using Solidity, Ganache, and Node.js on the Ethereum network. Designed and deployed smart contracts to facilitate tamper-proof voting. Ensured transparency by enabling voters to verify transactions on the blockchain while preventing double voting."
              ghLink="https://github.com/DANTE-KUN3/voting-dapp"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Task-App"
              description="A simple task management system built with React that allows users to create, edit, complete, and delete tasks. Users can add new tasks through an input field, toggle task completion via checkboxes, and update task titles inline. The UI dynamically updates using React state, providing an interactive experience. The system ensures an efficient task-tracking workflow, helping users stay organized and productive."
              ghLink="https://github.com/DANTE-KUN3/Task-app"
              demoLink="https://task-app-dun-beta.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
