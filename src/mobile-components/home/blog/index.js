import React from "react";
import blog from "../../../images/blog.png";

import ShadowHeading from "../../common/shadow-heading";
import Carousel from "../../carousel";

import "./styles.scss";

const Blog = () => {
  return (
    <div className="mobile-home-blog-container">
      <ShadowHeading text="Blog" />

      <Carousel position="up">
        <div className="single-blog">
          <img src={blog} className="blog-thumbail" alt="blog" />
          <div className="mobile-golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="single-blog">
          <img src={blog} className="blog-thumbail" alt="blog" />
          <div className="mobile-golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="single-blog">
          <img src={blog} className="blog-thumbail" alt="blog" />
          <div className="mobile-golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Blog;
