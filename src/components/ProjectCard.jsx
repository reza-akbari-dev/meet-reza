import React from "react";
import "../css/styles.css"; // Or your specific project CSS

function ProjectCard({ title, image, shortDesc, techUsed, details }) {
  return (
    <div className="project-card">
      <div className="card-image">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="card-content">
        <h4 className="project-title">{title}</h4>
        <p className="project-short">{shortDesc}</p>
      </div>
      <div className="card-details">
        <ul>
          <li>
            <b>Technologies:</b> {techUsed}
          </li>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
