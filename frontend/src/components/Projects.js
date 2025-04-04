// Projects.js
import React from 'react';

const Projects = ({ language }) => {
  const content = {
    TH: "ผลงานของฉัน",
    EN: "My Projects"
  };

  return <div className="page">{content[language]}</div>;
};

export default Projects;