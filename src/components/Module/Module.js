import React from 'react';

import './Module.scss';

import SVG from '../../assets/SVG';

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
  }

  // prevent window scroll when is module is mounted
  componentDidMount = () => document.body.style.overflow = "hidden";
  // restart window scroll when closing the module
  componentWillUnmount = () => document.body.style.overflow = "";


  onCloseModal = e => e.target.contains(this.modal.current) && this.props.onCloseModal();

  render() {
    const { project, onCloseModal } = this.props;

    return (
      <div className="Module flex center"
            ref={this.modal}
            onClick={this.onCloseModal}>

        <div className="module-window portfolio-window flex column">

          <div className="header flex row space-between">
              <span className="title">{project.name}
                <a href={`https://github.com/antoniolodias/${project.github}`}
                   target="_blank"
                   rel="noopener noreferrer">
                   <SVG icon="github" />
                </a>
              </span>
            <button onClick={onCloseModal}><SVG icon="close" /></button>
          </div>

          <div className="project-info flex row space-between">
            <span>{project.description}</span>
            <ul>
              <li>Tech Stack</li>
              {project.tech.map((tech, i) => <li key={i}>{tech}</li>)}
            </ul>
          </div>

          <div className="img-container flex center">
            <img src={require(`../../assets/img/projects/${[project.name]}.gif`)}
                  alt={project.name + 'project GIF'}/>
          </div>

        </div>
      </div>
    )
  }
}

export default Module;
