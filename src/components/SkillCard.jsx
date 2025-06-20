// src/components/SkillCard.jsx

import React from "react";

function SkillCard({ name, image }) {
  return (
    <div className="skill-card">
      <img src={image} alt={name} className="skill-icon" />
      <p>{name}</p>
    </div>
  );
}

export default SkillCard;
