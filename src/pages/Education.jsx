// src/pages/Education.jsx

import React from "react";
import educationData from "../data/educationData";
import EducationCard from "../components/EducationCard";
import "../css/styles.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            school={edu.school}
            country={edu.country}
            degree={edu.degree}
            cgpa={edu.cgpa}
            link={edu.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
