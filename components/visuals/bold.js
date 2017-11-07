import React from "react";

const Bold = ({ children }) => (
  <b>
    {children}
    <style jsx>{`
      b {
        font-weight: bold;
        color: #000;
      }
    `}</style>
  </b>
);

export default Bold;
