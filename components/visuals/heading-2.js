import React from "react";

const Heading2 = ({ children, ...rest }) => (
  <h2 {...rest}>
    {children}
    <style jsx>{`
      h2 {
        font-size: 28px;
        line-height: 40px;
        margin: 15px 0px 65px 0px;
        font-family: "Roboto Condensed", sans-serif;
        font-weight: bolder;
        text-transform: uppercase;
        letter-spacing: 10px;
      }
    `}</style>
  </h2>
);

export default Heading2;
