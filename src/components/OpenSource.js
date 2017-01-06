import React from 'react';

import './OpenSource.less';


export default () => (
  <section id="open-source">
    <div className="content">
      <h2>Open Source</h2>

      <h3>Projects</h3>
      <ul>
        <li>
          <a href="https://github.com/salsita/redux-elm">redux-elm</a>: An attempt to reproduce the best of The Elm Architecture in JavaScript.
        </li>
        <li>
          <a href="https://github.com/salsita/redux-side-effects">redux-side-effects</a>: Elmish model of dealing with side-effects in redux utilizing generators.
        </li>
        <li>
          <a href="https://github.com/salsita/redux-saga-rxjs">redux-saga-rxjs:</a> Rxjs version of redux-saga, couple months later the same idea is used in redux-observable.
        </li>
      </ul>

      <h3>Articles</h3>
      <ul>
        <li>
          <a href="https://blog.javascripting.com/2016/10/05/building-your-own-react-clone-in-five-easy-steps/">Building Your Own React Clone in Five Easy Steps</a>
        </li>
        <li>
          <a href="https://blog.javascripting.com/2015/12/08/the-human-brain-is-a-vital-front-end-component/">The Human Brain is a Vital Front-End Component</a>
        </li>
        <li>
          <a href="https://blog.javascripting.com/2015/06/19/flux-no-more-stores-meet-reducer/">Flux: No More Stores, Meet Reducer</a>
        </li>
        <li>
          <a href="https://blog.javascripting.com/2015/03/18/defensive-javascript/">Defensive JavaScript? Yes, Please!</a>
        </li>
      </ul>

      <h3>Presentations</h3>
      <p>I would like to spread the word so I usually give couple presentations a
      year on local venues; WebExpo Prague, Reactive&nbsp;Roadshow
      (Bratislava, Vienna, Brno), PragueJS...</p>
      <div id="presentation-embed-38898340" />
    </div>
  </section>
);
