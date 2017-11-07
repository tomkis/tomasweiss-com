import React from "react";

const Section = ({ children, disablePadding, style = {}, ...props }) => (
  <section {...props} style={disablePadding ? { ...style, padding: 0 } : style}>
    {children}
    <style jsx>
      {`
        section {
          padding-top: 76px;
          padding-bottom: 76px;
        }
      `}
    </style>
  </section>
);

export default Section;
