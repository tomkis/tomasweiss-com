import React from "react";
import cx from "classnames";

import Heading3 from "components/visuals/heading-3";
import Paragraph from "components/visuals/paragraph";

const ConsultingItem = ({ image, alt, heading, content, even }) => (
  <div className={cx({ wrapper: true, even })}>
    <img src={image} alt={alt} />
    <Heading3>{heading}</Heading3>
    <Paragraph>{content}</Paragraph>
    <style jsx>{`
      .wrapper {
        float: left;
        margin-bottom: 50px;
      }

      img {
        width: 70px;
        height: 70px;
        filter: grayscale(100%);
      }

      p {
        margin: 15px 0 10px 0;
      }

      @media (min-width: 768px) {
        .wrapper {
          width: 360px;
        }
        .wrapper.even {
          margin-left: 15px;
        }
      }
      @media (min-width: 1024px) {
        .wrapper {
          width: 488px;
        }
        .wrapper.even {
          margin-left: 30px;
        }
      }
    `}</style>
  </div>
);

export default ConsultingItem;
