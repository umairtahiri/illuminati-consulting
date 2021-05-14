import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const BlogLink = (props) => {
  const history = useHistory();

  const { pic, label, date, desc } = props;
  return (
    <div className="mobile-bloglink--main-container">
      <div className="bloglink--img-container">
        <img
          alt="img"
          src={pic}
          className="bloglink-img"
          onClick={() => history && history.push(`/blog/${label}`)}
        />
      </div>
      <div className="bloglink--date">{date}</div>
      <div className="mobile-golden-heading bloglink--label">{label}</div>
      <div className="bloglink--description">{desc}</div>
    </div>
  );
};
export default BlogLink;
