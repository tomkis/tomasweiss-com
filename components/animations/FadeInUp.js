import React from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const FadeInUp = ({ children }) => (
  <ReactCSSTransitionGroup
    transitionName="fade-in-up"
    transitionAppear
    transitionAppearTimeout={2500}
    transitionEnter={false}
    transitionLeave={false}
  >
    {children}
  </ReactCSSTransitionGroup>
);

FadeInUp.propTypes = {
  children: PropTypes.node.isRequired
};

export default FadeInUp;
