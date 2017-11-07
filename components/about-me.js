import React from "react";
import FontAwesome from "react-fontawesome";

import Bold from "components/visuals/bold";
import Content from "components/visuals/content";
import Paragraph from "components/visuals/paragraph";
import Section from "components/visuals/section";

const AboutMe = () => (
  <Section id="about-me">
    <Content centered>
      <img src="/static/react.svg" alt="React" className="react-logo" />
      <img src="/static/redux.svg" alt="Redux" className="redux-logo" />

      <h2>
        I <FontAwesome name="heart" style={{ color: "#e74c3c" }} /> React and
        Redux
      </h2>

      <Paragraph>
        I truly enjoy writing all kinds of front-end applications in modern
        JavaScript. Thanks to CoffeScript and most importantly{" "}
        <Bold>Babel</Bold> we can liberate ourselves from browser boundaries and
        get excited by coding again. It all started in early 2015 when I first
        encountered the beauty of React and Flux. Those two concepts seemed
        natural and after exploring immutable-js and mainly Redux everything fit
        in.
      </Paragraph>

      <Paragraph>
        I specialize on what I love the most which is React and Redux. Hire me
        to utilize the most of my real experiences.
      </Paragraph>

      <h3>Interested in looking into my code?</h3>

      <Paragraph>
        How about you start by checking out source code of this website?
        It&lsquo;s React with Redux and it&lsquo;s universal! Looking into my
        open source contribution can give you a brief idea as&nbsp;well!
      </Paragraph>
    </Content>
    <style jsx>{`
      .redux-logo,
      .react-logo {
        width: 100px;
        height: 100px;
        padding: 10px;
      }

      @media (min-width: 768px) {
        .redux-logo,
        .react-logo {
          width: 200px;
          height: 200px;
        }
      }

      h2 {
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0 30px 0;
        line-height: 35px;
        font-family: "Source Sans Pro", sans-serif;
      }

      h3 {
        font-size: 18px;
        font-weight: bold;
        margin: 40px 0 20px 0;
        line-height: 35px;
        font-family: "Source Sans Pro", sans-serif;
      }
    `}</style>
  </Section>
);

export default AboutMe;
