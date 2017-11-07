import React from "react";

const Paragraph = ({ children, ...rest }) => (
  <p {...rest}>
    {children}
    <style jsx>{`
      p {
        color: #434343;
        font-size: 16px;
        line-height: 35px;
        letter-spacing: 1px;
        margin: 0 0 10px;
      }
    `}</style>
  </p>
);

export default Paragraph;
