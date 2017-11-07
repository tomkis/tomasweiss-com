import React from "react";

const Link = ({ children, ...rest }) => (
  <a {...rest}>
    {children}
    <style jsx>{`
      a {
        color: #e74c3c;
      }
    `}</style>
  </a>
);

export default Link;
