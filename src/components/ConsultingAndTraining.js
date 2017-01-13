import React from 'react';

import javascriptIcon from 'assets/javascript.svg';
import reactIcon from 'assets/react.svg';
import reduxObservableIcon from 'assets/redux-observable.svg';
import webpackIcon from 'assets/webpack.svg';

import './ConsultingAndTraining.less';

export default () => (
  <section id="consulting-and-training">
    <div className="content">
      <h2>Consulting and training</h2>

      <p>
        A couple of years ago, full scope frameworks like ExtJS tried to solve all the problems in the universe. It might sound like a good idea to have a universal approach
        so that a developer doesn&lsquo;t need to bother with the same problems over and over again. However, giving a developer a choice results in a finer control of composition.
        Why restrain a developer to a particular approach. They need a choice to build exactly what they (or a client) need. This inevitably leads to hard choices being made
        in early stages of development which are contrary to developer&lsquo;s experiences. Ecosystem of React and Redux is very fragmented, therefore a proper training or
        consulting can save significant amount of resources in the long run.
      </p>

      <div className="consulting-items clearfix">
        <div>
          <img src={javascriptIcon} alt="JavaScript is rapidly evolving" />
          <h3>JavaScript is rapidly evolving</h3>
          <p>
            Functional programming paradigm is gradually creeping into JavaScript and therefore a developer needs to adjust their style so that they can utilize full power which
            new features bring us. Do you just need to gain practical experiences in using modern ES20xx code? Do you feel like your team could sieze more of Functional Programming? What about
            relation between Functional Programming and modern front-end architecture with solid React/Redux foundation?
          </p>
        </div>

        <div>
          <img src={webpackIcon} alt="Boilerplate overhead" />
          <h3>Boilerplate overhead</h3>
          <p>
            Composable divergency of all the possible libraries and tools makes it especially hard to use unified build pipeline for every project.
            Therefore, it&lsquo;s up to a developer to tailor the boilerplate to fit their exact requirements. Webpack configuration is very clumsy and everything becomes even
            more difficult to set up, once you start thinking about all the possible combinations of modern features. Do you need a hot-reloadable React application which pre-renders
            HTML on the server?
          </p>
        </div>

        <div>
          <img src={reactIcon} alt="React Redux consulting" />
          <h3>React Redux consulting</h3>
          <p>
            React plays very well with Redux, because Redux provides a predictable approach on how to deal with universal data flow and state management. Do you experience performance issues? Let&lsquo;s make sure that you are
            using props correctly. What about data inconsistency across the UI? Are you sure that your data is properly normalized
            in the application state so that everything is consistent when you update it? Have you realized the power of selector composition? Composable selectors is a key ingredient
            to achieve encapsulation of independent pieces in the application.
          </p>
        </div>

        <div>
          <img src={reduxObservableIcon} alt="redux-saga or redux-observable" />
          <h3>redux-saga or redux-observable</h3>
          <p>
            Redux is just a state container. It&lsquo;s especially hard to deal with asynchronous workflows but fortunately redux-saga is a great friend. Generators with a bit
            of asynchronous semantics are ideal for the so called long lived transactions. Still using redux-thunk? It might be a good idea to invest some time into learning redux-saga.
            Are you more familiar with Observables? As an author of redux-saga-rxjs I&lsquo;ve realized obvious similarities
            between Observables and Generators with asynchronous semantics which redux-saga brings.
          </p>
        </div>
      </div>

      <h3>React based application audit</h3>
      <p>
        Do you have a live React application but your developers are struggling with scaling it up? Let me identify architecture bottlenecks and provide actionables to improve
        the quality. React based applications are very friendly towards gradual architectural refactoring. I offer a 2-day long remote audit of your code with a fixed price of 899 &euro;.
      </p>
    </div>
  </section>
);
