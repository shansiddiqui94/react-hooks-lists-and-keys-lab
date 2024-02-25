import React from "react";

function ProjectItem({ name, about, technologies }) {
  // mapped over the key props to return each of the technologies in it own box
  const technologyBoxes = technologies.map((technology, index) => (
    <span className="technology-box" key={index}>
      {technology}
    </span>
  ));

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyBoxes}</div>
    </div>
  );
}

export default ProjectItem
