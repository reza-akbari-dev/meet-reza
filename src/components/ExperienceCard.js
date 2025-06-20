import React from "react";
import "../css/styles.css";

function ExperienceCard({ company, logo, title, link, date, details }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={logo} alt={`${company} logo`} className="company-logo" />
        </a>

        <strong className="company-name">
          <a href={link} target="_blank" rel="noreferrer">
            {company}
          </a>
        </strong>

        <span className="role-title">{title}</span>
      </div>

      <ul className="experience-list">
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="experience-footer">
        <span>{date}</span>
      </div>
    </div>
  );
}

export default ExperienceCard;
