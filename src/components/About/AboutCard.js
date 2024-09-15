import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sangam Prajapati </span>
            from <span className="purple"> Thane, India.</span>
            <br />
            I am currently Studying at K.C. College of Engineering.
            <br />
            I am Pursuing my Engineering in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Create with purpose, and let your work inspire change!"{" "}
          </p>
          <footer className="blockquote-footer">Sangam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
