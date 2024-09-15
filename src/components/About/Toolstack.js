import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiGit,
  SiDocker,
  SiKalilinux // Import Kali Linux icon
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/windows" target="_blank" rel="noopener noreferrer">
          <SiWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.kali.org" target="_blank" rel="noopener noreferrer">
          <SiKalilinux /> {/* Replace Postman with Kali Linux */}
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
          <SiGit />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">
          <SiDocker />
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
