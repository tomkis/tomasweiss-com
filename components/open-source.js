import React from "react";

import Content from "components/visuals/content";
import Heading2 from "components/visuals/heading-2";
import Heading3 from "components/visuals/heading-3";
import Link from "components/visuals/link";
import Paragraph from "components/visuals/paragraph";
import Section from "components/visuals/section";
import { List, ListItem } from "components/visuals/list";

const OpenSource = () => (
  <Section id="open-source">
    <Content>
      <Heading2>Open Source</Heading2>
      <Heading3>Projects</Heading3>
      <List>
        <ListItem>
          <Link href="https://github.com/salsita/redux-elm">redux-elm</Link>: An
          attempt to reproduce the best of The Elm Architecture in JavaScript.
        </ListItem>
        <ListItem>
          <Link href="https://github.com/salsita/redux-side-effects">
            redux-side-effects
          </Link>: Elmish model of dealing with side effects in Redux -
          utilizing generators.
        </ListItem>
        <ListItem>
          <Link href="https://github.com/salsita/redux-saga-rxjs">
            redux-saga-rxjs:
          </Link>{" "}
          Rxjs version of redux-saga; A couple of months later the same idea is
          used in redux-observable.
        </ListItem>
      </List>

      <Heading3>Articles</Heading3>
      <List>
        <ListItem>
          <Link href="https://blog.javascripting.com/2016/10/05/building-your-own-react-clone-in-five-easy-steps/">
            Building Your Own React Clone in Five Easy Steps
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://blog.javascripting.com/2015/12/08/the-human-brain-is-a-vital-front-end-component/">
            The Human Brain is a Vital Front-End Component
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://blog.javascripting.com/2015/06/19/flux-no-more-stores-meet-reducer/">
            Flux: No More Stores, Meet Reducer
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://blog.javascripting.com/2015/03/18/defensive-javascript/">
            Defensive JavaScript? Yes, Please!
          </Link>
        </ListItem>
      </List>

      <Heading3>Presentations</Heading3>
      <Paragraph>
        I would like to spread the word so I usually give several presentations
        a year at local venues; WebExpo Prague, Reactive&nbsp;Roadshow
        (Bratislava, Vienna, Brno), PragueJS...
      </Paragraph>
    </Content>
  </Section>
);

export default OpenSource;
