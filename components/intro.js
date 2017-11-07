import React, { Component } from "react";
import viewport from "viewport-dimensions";
import FontAwesome from "react-fontawesome";

import FadeIn from "components/animations/FadeIn";
import FadeInUp from "components/animations/FadeInUp";
import Section from "components/visuals/section";

export default class Intro extends Component {
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
      <Section id="intro" disablePadding>
        <div className="wrapper" style={{ height: this.state.height }}>
          <div className="cover">
            <div
              className="container"
              ref={el => {
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
                      <FontAwesome name="facebook" size="lg" />
                    </a>
                    <a href="https://github.com/tomkis" title="GitHub">
                      <FontAwesome name="github" size="lg" />
                    </a>
                    <a href="https://twitter.com/tomkisw" title="Twitter">
                      <FontAwesome name="twitter" size="lg" />
                    </a>
                    <a
                      href="https://cz.linkedin.com/in/tomáš-weiss-2328b22a"
                      title="LinkedIn"
                    >
                      <FontAwesome name="linkedin" size="lg" />
                    </a>
                  </li>
                </ul>
              </FadeInUp>
            </div>
          </div>
          <style jsx>{`
            .wrapper {
              background-color: #333;
              background-image: url("http://placehold.it/1280x1280/000000");
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              background-attachment: fixed;
              overflow: hidden;
              padding: 0;
            }

            .cover {
              width: 100%;
              height: 100%;
              background-color: rgba(51, 51, 51, 0.47);
            }

            .container {
              text-align: center;
              color: #fff;
            }

            p.greetings {
              font-size: 14px;
              color: #eee;
              line-height: 1.3;
              letter-spacing: 5px;
              font-weight: 300;
              margin-top: 10px;
            }

            h1 {
              line-height: 1.1;
              padding: 10px;
              color: #fff;
              font-size: 50px;
              font-weight: 300;
            }

            ul > li > a {
              color: #ddd;
              padding: 10px;
            }

            ul > li > a:hover {
              color: #e74c3c;
              transition: color 0.5s ease;
            }

            .fade-in-greetings-appear,
            .fade-in-h1-appear {
              opacity: 0.01;
            }
            .fade-in-greetings-appear-active {
              opacity: 1;
              transition: opacity 1.25s ease-in;
              transition-delay: 0.25s;
            }
            .fade-in-h1-appear-active {
              opacity: 1;
              transition: opacity 1s ease-in;
              transition-delay: 0.5s;
            }
          `}</style>
        </div>
      </Section>
    );
  }
}
