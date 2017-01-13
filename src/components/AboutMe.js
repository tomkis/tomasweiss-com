import React from 'react';

import reactLogo from 'assets/react.svg';
import reduxLogo from 'assets/redux.svg';

import './AboutMe.less';

export default () => (
  <section id="about-me">
    <div className="content">
      <img src={reactLogo} alt="React" className="react-logo" />
      <img src={reduxLogo} alt="Redux" className="redux-logo" />

      <h2>I <i className="fa fa-heart" aria-hidden="true" /> React and Redux</h2>

      <p>
        I truly enjoy writing all kinds of front-end applications in modern JavaScript.
        Thanks to CoffeScript and most importantly <b>Babel</b> we can liberate ourselves
        from browser boundaries and get excited by coding again. It all started in early
        2015 when I first encountered the beauty of React and Flux.
        Those two concepts seemed natural and after exploring
        immutable-js and mainly Redux everything fit in.
      </p>

      <p>I specialize on what I love the most which is React and Redux.
       Hire me to utilize the most of my real experiences.</p>

      <h3>Interested in looking into my code?</h3>

      <p>How about you start by checking out source code of this website? It&lsquo;s React with
      Redux and it&lsquo;s universal! Looking into my open source contribution can give you a
      brief idea as&nbsp;well!</p>
    </div>
  </section>
);
