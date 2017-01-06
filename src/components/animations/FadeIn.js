import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './FadeIn.less';

const FadeIn = ({ children, name, timeout }) => (
  <ReactCSSTransitionGroup
    transitionName={`fade-in-${name}`}
    transitionAppear
    transitionAppearTimeout={timeout}
    transitionEnter={false}
    transitionLeave={false}
  >
    {children}
  </ReactCSSTransitionGroup>
);

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired
};

export default FadeIn;
