import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Enzo Fava </span>
            from <span className="purple"> Montevideo, Uruguay.</span>
            <br />
            I am currently seeking a position as a Junior Developer.
            <br />
            I have studied Full Stack Web Development at Udemy and Coderhouse.
            <br />
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Moovies
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time Outdoors
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
