import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './FadeInUp.less';

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
