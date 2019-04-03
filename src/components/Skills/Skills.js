import React from 'react';
import './Skills.scss';

import SVG from '../../assets/SVG';

const Skills = ({ skillList }) => {
  const skillsRender = skillList.map((skill, i) =>
    <div className="skill" key={i}>
      <SVG icon={skill}/>
      <span>{skill.toUpperCase()}</span>
    </div>
  );

  return (
    <div className="Skills portfolio-window flex column center">
      <span className="title">Skills</span>
      <div className="skills-list flex row space-between">
        {skillsRender}
      </div>
    </div>
  )
}

export default Skills;
