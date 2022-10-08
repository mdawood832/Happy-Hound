import React, { Component } from "react";
import { Link } from "react-router-dom";

const AboutUs = (props) => {
  return (
    <div className="about-page">
      <div className="about">
        <div className="Maryam">
          <div className="image-block">
            <img src="" alt="Maryam headshot"></img>
          </div>
          <div className="profile-text">
            <h4>Maryam Dawood</h4>
            <p>write something about yourself.</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/maryam-dawood/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/GLGB8SJ.png"
                  alt="linkedin icon"
                ></img>
              </a>
              <a
                href="https://github.com/mdawood832"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/zljymLZ.png"
                  alt="github icon"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="Kayci">
          <div className="image-block">
            <img
              src="https://i.imgur.com/ZKphsDC.jpg"
              alt="Kayci headshot"
            ></img>
          </div>
          <div className="profile-text">
            <h4>Kayci North</h4>
            <p>
              Software Engineer pivoting from 14+ years in healthcare. Able to
              constructively contribute diverse viewpoints and solution-oriented
              approaches to problems that maximize return. Seeking a dynamic job
              that cultivates creative problem-solving and organizational
              skills.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kayci-north/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/GLGB8SJ.png"
                  alt="linkedin icon"
                ></img>
              </a>
              <a
                href="https://github.com/knorth2"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/zljymLZ.png"
                  alt="github icon"
                ></img>
              </a>
            </div>
          </div>
        </div>

        <div className="Eric">
          <div className="image-block">
            <img
              src="https://i.imgur.com/BEbU7Sc.jpeg"
              alt="Eric headshot"
            ></img>
          </div>
          <div className="profile-text">
            <h4>Eric Peltzman</h4>
            <p>
              
              Full stack developer who loves to learn new things and solve
              problems. I am a team player and I am passionate about creating
              amazing products. 
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/eric-peltzman"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/GLGB8SJ.png"
                  alt="linkedin icon"
                ></img>
              </a>
              <a
                href="https://github.com/Eric-Peltzman33"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/zljymLZ.png"
                  alt="github icon"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
