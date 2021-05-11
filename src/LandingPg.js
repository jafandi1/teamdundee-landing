import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Welcome.css";

// components
import NavbarPreLogin from "./NavbarPreLogin";

// images
import upload from "./imgs/upload-icon.png";
import graph from "./imgs/graph-icon.png";
import lightbulb from "./imgs/lightbulb-icon.png";
import exGraph from "./imgs/ex-graph.png";
import gc from "./imgs/gc1.png";
import jp from "./imgs/jp1.png";
import ca from "./imgs/ca1.png";
import ja from "./imgs/ja1.png";

const LandingPg = () => {
  return (
    <div>
      <NavbarPreLogin />

      {/* header/banner */}
      <div className="section" id="home">
        <Row className="bannerContainer bannerCenter">
          <Col className="center">
            <h1>See more. Do more.</h1>
            <h4>Transform your training through data.</h4>
          </Col>
        </Row>
      </div>

      {/* overview (for ischool) */}
      <div className="ex" id="overview">
        <div className="howToBody">
          <h2>About the Rowing Visualizer</h2>
          <br />
          <p>
            This iSchool Capstone project started when Jenna, one of our team
            members, mentioned that she and the UW Women’s Rowing team had a
            slight data problem. At each training session, large amounts of data
            are collected on each athlete’s performance, but the athletes often
            don’t look at this data. Our team decided to explore the potential
            of utilizing data visualizations to help UW Rowing Athletes better
            understand the training data that they were collecting, with the
            goal of reducing overtraining.
          </p>
        </div>
      </div>

      {/* how to */}
      <div id="howto">
        <div className="howToBody">
          <h1>Transform your training through data</h1>
          <Row className="howToText" xs={1} sm={1} md={3} lg={3} xl={3}>
            <Col>
              <img className="howToPics" src={upload}></img>
              <h2>Upload</h2>
              <p>
                Upload your training data onto our secure platform quickly and
                easily
              </p>
            </Col>
            <Col>
              <img className="howToPics" src={graph}></img>
              <h2>Visualize</h2>
              <p>
                Visualize your data using interactive graphs. No more excel!
              </p>
            </Col>
            <Col>
              <img className="howToPics" src={lightbulb}></img>
              <h2>Learn</h2>
              <p>
                Gain insights from our visualizations to help inform your
                training
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section ex" id="whatWeDid">
        <Row xs={1} sm={1} md={2} lg={2} xl={2} className="howToBody">
          <Col>
            <h3 className="center">
              Interactive, personalized visualizations help keep you and your
              heart rate in the zone
            </h3>
            <br />
            <p>
              We worked with student athletes, team doctors and trainers to
              understand which performance indicators we had to track and
              visualize and to figure out how overtraining in rowing was
              typically defined. Our solution allows rowers to easily track
              their training data and analyze it in a more simplified way. Our
              Rowing Visualizer creates a centralized space where athletes can
              log on, access and learn from their personal data. By using the
              data already collected, our tools help rowers and coaches gain a
              better understanding of the effects that the training has on the
              team’s performance and avoid negative outcomes from over training.
            </p>
          </Col>
          <Col>
            <img id="exGraph" src={exGraph} />
          </Col>
        </Row>
      </div>

      {/* users and stakeholders - ischool submission */}
      <div className="section" id="users">
        <div className="howToBody">
          <Row className="bannerContainer" id="usersCard">
            <h4>
              This solution was tailor made for the UW Women’s rowing team using
              their data and with their training schedules and habits in mind.
            </h4>
            <br></br>
            <p>
              We aim to decrease the number of people who experience
              overtraining syndrome and raise awareness of the signs and effects
              of OT syndrome. When training at a high level it can be
              increasingly difficult to know where your limits are and so we
              want this to be a solution that helps better inform training so
              athletes can continue to push limits safely and effectively.
            </p>
          </Row>
        </div>
      </div>

      <div id="howto">
        <div className="howToBody center">
          <h1>See our product in action</h1>
          <div className="youtubeContainer">
            <iframe
              className="youtube"
              src="https://www.youtube.com/embed/Kx7ra2hjav0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* notice */}
      <div id="notice">
        <p className="center">
          <b>NOTICE:</b> this project will be closing down on June 5, 2021. Feel
          free to contact any of the team members if you have any questions or
          would like to learn more.
        </p>
      </div>

      {/* team */}
      <div className="section" id="aboutus">
        <div className="sectionContainer">
          <h1>Our Team</h1>
          <Row className="center" xs={1} sm={1} md={2} lg={4} xl={4}>
            <Col className="spacingVert">
              <img className="faces" src={gc}></img>
              <h2>Gideon Chia</h2>
              <p>Product Manager</p>
            </Col>
            <Col className="spacingVert">
              <img className="faces" src={ca}></img>
              <h2>Cameron Astor</h2>
              <p>Back End Developer</p>
            </Col>
            <Col className="spacingVert">
              <img className="faces" src={jp}></img>
              <h2>Jenna Phillips</h2>
              <p>UX and Graphic Designer</p>
            </Col>
            <Col className="spacingVert">
              <img className="faces" src={ja}></img>
              <h2>Jocelyn Afandi</h2>
              <p>UX and Front End Developer</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LandingPg;
