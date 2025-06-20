import React from "react";
import "../css/styles.css"; // if needed for shared styles
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+1 (517) 578 2087</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a
            href="mailto:r.akbari.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            r.akbari.dev@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/reza-akbari-dev"
            target="_blank"
            rel="noreferrer"
          >
            github.com/reza-akbari-dev
          </a>
        </div>

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/reza-akbari16/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/reza-akbari16
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
