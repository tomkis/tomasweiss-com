import React from "react";

const Clearfix = ({ children }) => (
  <div className="clearfix">
    {children}
    <style jsx>{`
      .clearfix {
        clear: both;
        content: " ";
        display: table;
      }
    `}</style>
  </div>
);

export default Clearfix;
