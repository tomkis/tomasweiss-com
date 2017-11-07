import React from "react";

const Footer = () => (
  <footer>
    <p>Copyright &copy; 2017 Tomas Weiss</p>
    <style jsx>{`
      footer {
        text-align: center;
        background-color: #333;
      }
      p {
        color: #eee;
        line-height: 35px;
        letter-spacing: 1px;
        padding: 50px 0 50px 0;
      }
    `}</style>
  </footer>
);

export default Footer;
