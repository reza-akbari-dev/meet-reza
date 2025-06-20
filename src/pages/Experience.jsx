import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import experienceData from "../data/experienceData";

function Experience() {
  return (
    <div className="experience-container">
      <h2>Professional Experience</h2>
      {experienceData.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
}

export default Experience;
