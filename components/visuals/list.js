import React from "react";

export const ListItem = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      li {
        color: #434343;
        font-size: 16px;
        line-height: 35px;
        letter-spacing: 1px;
      }
    `}</style>
  </li>
);
export const List = ({ children }) => <ul>{children}</ul>;
