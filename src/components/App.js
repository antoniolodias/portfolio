import React from 'react';
import '../styles/global.scss';

import AppHeader from './AppHeader/AppHeader';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import AppFooter from './AppFooter/AppFooter';
import Module from './Module/Module';


class App extends React.Component {
  state = { selectedProjectId: null };

  // on click setState to project id
  onProjectClick = selectedProjectId => this.setState({selectedProjectId});

  // resets state.selectedProjectId to null to close module
  onCloseModal = () => this.setState({ selectedProjectId: null });

  render() {
    const projectsList = [
      {id: 6, name: 'Portfolio', description: 'React app, this exact website you\'re visiting' , github: 'Portfolio', tech: ['JavaScript', 'React', 'CSS']},
      {id: 5, name: 'Muuuuu', description: 'Long time needed social network for cows. Here you can find features like registration and login, you can add friends or receive friend requests from other users, you can use private chat or public forum, you can edit your bio, write on your wall and even upload profile pictures.' , github: 'CowSocialNetwork', tech: ['Node', 'JavaScript', 'React', 'Redux', 'Socket.io', 'PostgreSQL', 'CSS']},
      {id: 4, name: 'Mr. Bubbles', description: 'Platform game in which our hero needs to remember to eat fruit and to watch out for wild life if he wants to finish all the levels.', github: 'JumpAndRun', tech: ['Node', 'JavaScript', 'Phaser']},
      {id: 3, name: 'Imageboard', description: 'Instagram wannabe kind of application with image upload and commenting features.', github: 'Imageboard', tech: ['Node', 'JavaScript', 'Vue', 'PostgreSQL', 'HTML', 'CSS']},
      {id: 2, name: 'Petition', description: 'Public petition website where people like me can manifest their frustration with the amount of articles in the German grammar. Here you can register and login, you can create and edit your profile, you can sign our wall directly with your mouse and check other people that think like you.', github: 'PetitionAgainstGermanArticles', tech: ['Node', 'JavaScript', 'Handlebars', 'PostgreSQL', 'HTML', 'CSS']},
      {id: 1, name: 'Connect 4', description: 'Classic 4 in line game to play with your best friend.', github: 'Connect-Four', tech: ['JavaScript', 'jQuery', 'HTML', 'CSS']},
    ];

    const skillList = [];
    // create array of all the skills found in projectList
    projectsList.map(project =>
      // filter through list to don't add repeated skills
      project.tech.filter(skill =>
        skillList.indexOf(skill) === -1 && skillList.push(skill)
      )
    )

    // this.state.selectedProjectId && document.body.style.overflow = "hidden";

    return (
      <div id="app" className="flex column center">

        {/* element onClick go back to page top */}
        <div className='scroll-triangle' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* If user selects a project return module with its info */}
        {this.state.selectedProjectId &&
          <Module project={projectsList.find(project => project.id === this.state.selectedProjectId)}
                  onCloseModal={this.onCloseModal}/>}

        <AppHeader />
        <div className="app-body flex column">
          <Skills skillList={skillList}/>
          <Portfolio onProjectClick={this.onProjectClick}
                     projectsList={projectsList}/>
        </div>
        <AppFooter />
      </div>
    )
  }
}

export default App;
