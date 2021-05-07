import React from "react";
import blog from "../../../images/blog.png";

import "./styles.scss";

const Blog = () => {
  return (
    <div className="home-blog-container">
      <header className="golden-heading">Blog</header>
      <section className="all-blogs-gallery">
        <div className="single-blog">
          <img src={blog} className="thumbnail" alt="blog" />
          <div className="golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="single-blog">
          <img src={blog} className="thumbnail" alt="blog" />
          <div className="golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="single-blog">
          <img src={blog} className="thumbnail" alt="blog" />
          <div className="golden-heading">Why do we use it?</div>
          <div className="description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
