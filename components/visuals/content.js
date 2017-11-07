import React from "react";

const Content = ({ children, centered }) => (
  <div
    className="content"
    style={{
      textAlign: centered ? "center" : "left"
    }}
  >
    {children}
    <style jsx>{`
      .content {
        margin: auto;
        padding-right: 15px;
        padding-left: 15px;
      }

      @media (min-width: 768px) {
        .content {
          width: 750px;
        }
      }

      @media (min-width: 1024px) {
        .content {
          width: 1006px;
        }
      }
    `}</style>
  </div>
);

export default Content;
