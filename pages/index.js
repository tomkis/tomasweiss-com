import React from "react";
import Head from "next/head";
import withRedux from "next-redux-wrapper";

import store from "src/store";
import AboutMe from "components/about-me";
import ConsultingAndTraining from "components/consulting-and-training";
import Footer from "components/footer";
import HireMe from "components/hire-me";
import Intro from "components/intro";
import OpenSource from "components/open-source";

const Index = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Open+Sans"
      />
      <link
        href="/static/font-awesome/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link href="/static/reset.css" rel="stylesheet" />
      <style jsx global>{`
        body {
          font-family: "Open Sans", sans-serif;
        }
      `}</style>
    </Head>
    <Intro />
    <AboutMe />
    <ConsultingAndTraining />
    <OpenSource />
    <HireMe />
    <Footer />
  </div>
);

export default withRedux(store)(Index);
