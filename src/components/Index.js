import React, { Component } from 'react';
import viewport from 'viewport-dimensions';

import FadeIn from 'components/animations/FadeIn';
import FadeInUp from 'components/animations/FadeInUp';

import './Index.less';

export default class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      containerPadding: 0
    };
  }

  componentDidMount() {
    const height = viewport.height();
    const containerPadding = (height - this.container.offsetHeight) / 2;

    this.setState({
      height,
      containerPadding
    });
  }

  render() {
    return (
      <section id="index" style={{ height: this.state.height }}>
        <div className="cover">
          <div
            className="container"
            ref={(el) => {
              this.container = el;
            }}
            style={{ paddingTop: this.state.containerPadding }}
          >
            <FadeIn name="greetings" timeout={1500}>
              <p className="greetings">Hello, I am Tomas Weiss</p>
            </FadeIn>
            <FadeIn name="h1" timeout={1500}>
              <h1>React and Redux enthusiast</h1>
            </FadeIn>
            <FadeInUp>
              <ul>
                <li>
                  <a href="https://facebook.com/toomkis" title="Facebook">
                    <i className="fa fa-facebook fa-lg" aria-hidden="true" />
                  </a>
                  <a href="https://github.com/tomkis1" title="GitHub">
                    <i className="fa fa-github fa-lg" aria-hidden="true" />
                  </a>
                  <a href="https://twitter.com/tomkisw" title="Twitter">
                    <i className="fa fa-twitter fa-lg" aria-hidden="true" />
                  </a>
                  <a href="https://cz.linkedin.com/in/tomáš-weiss-2328b22a" title="LinkedIn">
                    <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </FadeInUp>
          </div>
        </div>
      </section>
    );
  }
}
