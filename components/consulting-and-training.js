import React from "react";

import Content from "components/visuals/content";
import ConsultingItem from "components/visuals/consulting-item";
import Clearfix from "components/visuals/clearfix";
import Heading2 from "components/visuals/heading-2";
import Heading3 from "components/visuals/heading-3";
import Paragraph from "components/visuals/paragraph";
import Section from "components/visuals/section";

const PaddedParagraph = ({ style = {}, ...props }) => (
  <Paragraph style={{ ...style, marginBottom: 50 }} {...props} />
);

export default () => (
  <Section id="consulting-and-training" style={{ backgroundColor: "#f1f1f1" }}>
    <Content>
      <Heading2>Consulting and training</Heading2>

      <PaddedParagraph>
        A couple of years ago, full scope frameworks like ExtJS tried to solve
        all the problems in the universe. It might sound like a good idea to
        have a universal approach so that a developer doesn&lsquo;t need to
        bother with the same problems over and over again. However, giving a
        developer a choice results in a finer control of composition. Why
        restrain a developer to a particular approach. They need a choice to
        build exactly what they (or a client) need. This inevitably leads to
        hard choices being made in early stages of development which are
        contrary to developer&lsquo;s experiences. Ecosystem of React and Redux
        is very fragmented, therefore a proper training or consulting can save
        significant amount of resources in the long run.
      </PaddedParagraph>
      <Clearfix>
        <ConsultingItem
          image="/static/javascript.svg"
          heading="JavaScript is rapidly evolving"
          content="Functional programming paradigm is gradually creeping into JavaScript and therefore a developer needs to adjust their style so that they can utilize full power which new features bring us. Do you just need to gain practical experiences in using modern ES20xx code? Do you feel like your team could sieze more of Functional Programming? What about relation between Functional Programming and modern front-end architecture with solid React/Redux foundation?"
        />
        <ConsultingItem
          image="/static/webpack.svg"
          heading="Boilerplate overhead"
          content="Composable divergency of all the possible libraries and tools makes it especially hard to use unified build pipeline for every project. Therefore, it&lsquo;s up to a developer to tailor the boilerplate to fit their exact requirements. Webpack configuration is very clumsy and everything becomes even more difficult to set up, once you start thinking about all the possible combinations of modern features. Do you need a hot-reloadable React application which pre-renders HTML on the server?"
          even
        />
        <ConsultingItem
          image="/static/react.svg"
          heading="React Redux consulting"
          content="React plays very well with Redux, because Redux provides a predictable approach on how to deal with universal data flow and state management. Do you experience performance issues? Let&lsquo;s make sure that you are using props correctly. What about data inconsistency across the UI? Are you sure that your data is properly normalized in the application state so that everything is consistent when you update it? Have you realized the power of selector composition? Composable selectors is a key ingredient to achieve encapsulation of independent pieces in the application."
        />
        <ConsultingItem
          image="/static/redux-observable.svg"
          heading="redux-saga or redux-observable"
          content="Redux is just a state container. It&lsquo;s especially hard to deal with asynchronous workflows but fortunately redux-saga is a great friend. Generators with a bit of asynchronous semantics are ideal for the so called long lived transactions. Still using redux-thunk? It might be a good idea to invest some time into learning redux-saga. Are you more familiar with Observables? As an author of redux-saga-rxjs I&lsquo;ve realized obvious similarities between Observables and Generators with asynchronous semantics which redux-saga brings."
          even
        />
      </Clearfix>

      <Heading3>React based application audit</Heading3>
      <PaddedParagraph>
        Do you have a live React application but your developers are struggling
        with scaling it up? Let me identify architecture bottlenecks and provide
        actionables to improve the quality. React based applications are very
        friendly towards gradual architectural refactoring. I offer a 2-day long
        remote audit of your code with a fixed price of 899 &euro;.
      </PaddedParagraph>
    </Content>
  </Section>
);
