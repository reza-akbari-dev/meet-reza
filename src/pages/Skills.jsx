// src/pages/Skills.jsx

import React from "react";
import skillsData from "../data/skillsData";
import SkillCard from "../components/SkillCard";
import "../css/styles.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((group, index) => (
          <div key={index} className="skills-group">
            <h3 className="skills-heading">{group.category}</h3>
            <div className="skills-grid">
              {group.items.map((skill, i) => (
                <SkillCard key={i} name={skill.name} image={skill.image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
