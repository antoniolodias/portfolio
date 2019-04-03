import React from 'react';
import './AppFooter.scss';

import SVG from '../../assets/SVG';

import CV from '../../assets/cv.pdf';

const AppFooter = () => {
  const links = [
    {name: 'cv', href: CV},
    {name: 'linkedin', href: 'https://www.linkedin.com/in/antdias/'},
    {name: 'github', href: 'https://github.com/antoniolodias'},
 ]

 const icons = links.map((link, i) =>
    <a key={i}
       className="building"
       href={link.href}
       target="_blank"
       rel="noopener noreferrer"
       style={{height: Math.floor(Math.random() * 140)}}>
     <SVG icon={link.name}/>
    </a>
  );

  return (
    <div className="App-footer flex center">
      <div style={{width: '70%'}} className="flex row space-between">
        <span>antoniolodias@gmail.com</span>
        <div className="footer-buildings flex row">
          {icons}
        </div>
      </div>
    </div>
  )
}

export default AppFooter;
