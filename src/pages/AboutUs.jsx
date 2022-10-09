import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/AboutMe.css'
import MaryamProfile from '../assets/profile.jpeg'

const AboutUs = (props) => {
  return (
    <div className="about-page">

        <div className="container">
          <div className="image-block">
            <img className="headshot" src={MaryamProfile} alt="Maryam headshot"></img>
          </div>

          <div className="description">
          <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/maryam-dawood/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/GLGB8SJ.png"
                    alt="linkedin icon"
                    className="icon"
                  >
                  </img>
                </a>

                <a
                  href="https://github.com/mdawood832"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://i.imgur.com/zljymLZ.png"
                    alt="github icon"
                    className="icon"
                  >
                  </img>
                </a>
          </div>
            <h3>Maryam Dawood</h3>
            <p className="profileDescription">A junior studying Computer Science with a passion for
              front-end developing. 
            </p>
        
          
        </div>
      </div>

        <div className="container">
          <div className="image-block">
            <img
              src="https://i.imgur.com/ZKphsDC.jpg"
              alt="Kayci headshot"
              className="headshot"
            ></img>
          </div>

          <div className="description">
          <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kayci-north/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/GLGB8SJ.png"
                  alt="linkedin icon"
                  className="icon"
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
                  className="icon"
                ></img>
              </a>
            </div>
          <h3>Kayci North</h3>
          <p className="profileDescription">
              Software Engineer pivoting from 14+ years in healthcare. Able to
              constructively contribute diverse viewpoints and solution-oriented
              approaches to problems that maximize return. Seeking a dynamic job
              that cultivates creative problem-solving and organizational
              skills.
          </p>

          </div>
        </div>


        <div className="container">
          <div className="image-block">
            <img
              src="https://i.imgur.com/BEbU7Sc.jpeg"
              alt="Eric headshot"
              className="headshot"
            ></img>
          </div>

        <div className="description">
        <div className="social-links">
              <a
                href="https://www.linkedin.com/in/eric-peltzman-552813228"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/GLGB8SJ.png"
                  alt="linkedin icon"
                  className="icon"
                ></img>
              </a>
              <a
                href="https://github.com/epeltz33"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.imgur.com/zljymLZ.png"
                  alt="github icon"
                  className="icon"
                ></img>
              </a>
            </div>
          <h3>Eric Peltzman</h3>
          <p className="profileDescription">
              Full stack developer who loves to learn new things and solve
              problems. I am a team player and I am passionate about creating
              amazing products.
          </p>

            
            </div>
          </div>
      </div>

  );
};

export default AboutUs;
