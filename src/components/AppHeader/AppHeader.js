import React from 'react';
import './AppHeader.scss'

const AppHeader = () => {

  // detail element, print 5 "buildings" - divs with random heights
  const buildings = [...Array(5)].map((e, i) =>
    <div className="building"
         key={i}
         style={{height: Math.floor(Math.random() * 200)}}></div>
  );

  return (
    <div className="App-header">
      <div className="header-top flex center">
        <div className="header-center">
          <span>Hi my name is António Maria Lamy de Oliveira Dias you can call me António... I am a web developer based in Berlin with a different background I studied and worked for 4 years in architecture, and there I learned to understand both the big picture and the small details, most importantly I learned how to solve complex problems.</span>

          <div className="header-buildings flex row">
            {buildings}
          </div>

          <div className="image-container">
            <img src={require('../../assets/img/me.png')}
                 alt="Profile-pic"/>
          </div>
        </div>
      </div>

      <div className="header-bottom flex center">
        <span>Started as a (buildings) architect, learned how to combine structure and creativity.<br />
        Today, I do the same with software.</span>
      </div>
    </div>
  )
}

export default AppHeader;
