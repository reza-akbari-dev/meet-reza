// src/components/EducationCard.jsx

import React from "react";

function EducationCard({ school, country, degree, cgpa, link }) {
  return (
    <div className="education-card">
      <div className="card-content">
        <h3 className="education-title">
          <a href={link} target="_blank" rel="noreferrer" className="hoverline">
            {school}
          </a>
        </h3>
        <p className="education-country">{country}</p>
        <p>
          <strong>Degree:</strong> {degree}
          <br />
          <strong>CGPA:</strong> {cgpa}
        </p>
      </div>
    </div>
  );
}

export default EducationCard;
