import React from 'react';

import Project from './Project/Project';

const Portfolio = ({ projectsList, onProjectClick }) => {
  return (
    <div className="Portfolio portfolio-window">
      <span className="title">Portfolio</span>
      <div className="porfolio-list flex column center">
        {projectsList.map(project =>
          <Project key={project.id}
                   project={project}
                   onProjectClick={onProjectClick}/>)}
      </div>
    </div>
  )
}

export default Portfolio;
