import React from "react";
import "./styles.scss";

const BlogLink = (props) => {
  const { pic, label, date, desc } = props;
  return (
    <div className="bloglink--main-container">
      <div className="bloglink--img-container">
        <img alt="img" src={pic} className="bloglink-img" />
      </div>
      <div className="bloglink--date">{date}</div>
      <div className="golden-heading bloglink--label">{label}</div>
      <div className="bloglink--description">{desc}</div>
    </div>
  );
};
export default BlogLink;
