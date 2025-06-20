// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home-layout">
      <div className="home-left">
        {/* <h1>
          Welcome! I'm <span className="highlight">Reza</span>
        </h1> */}
        <h1 className="home-title">
          Welcome! I'm <span className="highlight cube-target">Reza</span>
          <span className="cube-on-name">
            <div className="cube-wrapper">
              <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
              </div>
            </div>
          </span>
        </h1>
      </div>

      <div className="home-right">
        <p className="home-description">
          A Back-End Developer
          <br />
          Motivated and active-minded, passionate about learning and teamwork.
          Skilled in both programming and financial management, with a keen
          interest in embracing new challenges.
        </p>

        <div className="home-buttons">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/education" className="nav-link">
                Education
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://github.com/reza-akbari-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/reza-akbari-tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
