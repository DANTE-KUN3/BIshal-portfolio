import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import future from "../../Assets/Projects/future.jpeg";
import dapp from "../../Assets/Projects/dapp.png";
import Devops from "../../Assets/Projects/Devops.png";
import gamers from "../../Assets/Projects/gamers.png";

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
              demoLink="https://future-mxkq.vercel.app/"
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
              imgPath={Devops}
              isBlog={false}
              title="DevOps Automation Project"
              description="Automated the provisioning and configuration of AWS EC2 instances using Terraform and Ansible. Terraform handles the infrastructure setup, while Ansible installs required software and configures instances post-deployment. Integrated with GitHub Actions for seamless automation. Project structure includes modular Terraform files and Ansible playbooks with dynamic inventory support."
              ghLink="https://github.com/DANTE-KUN3/Devops-Project"
              demoLink=""              
            />
          </Col>
    <Col md={4} className="project-card">
  <ProjectCard
    imgPath={gamers} // Replace with your actual image import
    isBlog={false}
    title="GamersGlitch – Gaming Marketplace"
    description="GamersGlitch is a full-stack web application that enables users to buy and sell gaming assets like skins, accounts, and merchandise. Built with Next.js, MongoDB, Auth0, and AWS S3, it features secure authentication, image uploads, and real-time listing management. This is my first complete full-stack project, and I plan to keep improving it over time."
    ghLink="https://github.com/bishalparikhh/gg"
    demoLink="https://www.gamersglitch.in"
  />
</Col>
     </Row>
      </Container>
    </Container>
  );
}

export default Projects;
