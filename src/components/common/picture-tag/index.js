import React from "react";
import "./styles.scss";

const PictureFrame = (props) => {
  const { pic, tag, onclick } = props;
  return (
    <div className="picture-frame">
      <img
        className="picture-frame-img"
        src={pic}
        alt="pic1"
        onClick={onclick}
      />
      <div className="pictrure-frame-tag">{tag}</div>
    </div>
  );
};
export default PictureFrame;
