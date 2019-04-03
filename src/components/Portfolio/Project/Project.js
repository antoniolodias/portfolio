import React from 'react';
import './Project.scss';

class Project extends React.Component {
  state = { hover: false };

  // can't handle just {hover: !this.state.hover} because of bug after closing modules
  onMouseEnter = () => this.setState({hover: true});
  onMouseLeave = () => this.setState({hover: false});

  render() {
    const { project, onProjectClick } = this.props;

    return (
      <div className={this.state.hover ? "Project flex column center mouse-hover" : "Project flex column center"}
           onMouseEnter={this.onMouseEnter}
           onMouseLeave={this.onMouseLeave}
           onClick={() => onProjectClick(project.id)}>
        <img src={require(`../../../assets/img/projects/${[project.name]}.PNG`)}
                   alt={project.name}/>
       <span>{project.name}</span>
      </div>
    )
  }
}

export default Project;
