import React from "react";

const Heading3 = ({ children, ...rest }) => (
  <h3 {...rest}>
    {children}
    <style jsx>{`
      h3 {
        font-size: 16px;
        margin: 20px 0 10px 0;
        font-weight: 600;
        line-height: 1.1;
        text-transform: uppercase;
        font-family: "Source Sans Pro", sans-serif;
        letter-spacing: 1px;
      }
    `}</style>
  </h3>
);

export default Heading3;
