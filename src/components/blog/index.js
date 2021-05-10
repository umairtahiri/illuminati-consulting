import React from "react";
import { useHistory } from "react-router-dom";

import { ourWorksOptions, BlogContent } from "../../utils/helpers";

import arrow from "../../images/right-arrow.svg";

import BlogLink from "../common/blog-link";
import blog from "../../images/blog.png";

import "./styles.scss";

const Blog = () => {
  const history = useHistory();
  const openBlog = () => {
    history && history.push("blog/internal-page");
  };

  return (
    <div className="blog-main-container">
      <section className="blog--links-banner-container">
        <div className="blog--links-container">
          {ourWorksOptions.map((o, ind) => {
            return (
              <div className="link-container" key={ind}>
                <div className="arrow-container">
                  <img
                    style={{
                      display: "blockchain" === o.path ? "block" : "none",
                    }}
                    className="selected-arrow"
                    src={arrow}
                    alt="arrow"
                  />
                </div>
                <div
                  className={
                    "blockchain" === o.path
                      ? "link-label selected-option"
                      : "link-label"
                  }
                  onClick={() => history.push(`/blog/${o.path}`)}
                >
                  {o.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="blog--links-banner">
          <div className="blog--links-banner-text">
            <div className="blog-banner-text">
              <div className="golden-heading">
                An Update on the Implementation of the New FATF Travel Rule
                Requirements
              </div>
              <div className="blog-banner-description">
                In September, we touched on probably one of the biggest
                developments in the crypto community to date – the FATF’s
                implementation of the new “travel rules” (new requirements for
                the provisioning of personal identifiable information (PII)
                regarding users involved ...
              </div>
            </div>
          </div>
          <div className="blog-banner-dots-container">
            <div
              className="dot"
              // onClick={() => history.push("/home/connected-device")}
            ></div>
            <div
              className="dot"
              // onClick={() =>
              //   history.push("/home/full-cycle-solution-engineering")
              // }
            ></div>
            <div
              className="dot"
              // onClick={() => history.push("/home/artificial-intelligence")}
            ></div>
            <div
              className="dot"
              // onClick={() => history.push("/home/blockchain-development")}
            ></div>
          </div>
        </div>
      </section>
      <section className="bloglink--container">
        {BlogContent.map((e) => {
          return (
            <BlogLink
              onclick={openBlog}
              pic={blog}
              label={e.label}
              date={e.date}
              desc={e.desc}
            />
          );
        })}
      </section>
      <section className="blog-link-pagination">
        <img className="blog-link-back-arrow" src={arrow} alt="arrow" />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>12</div>
        <div>13</div>
        <img style={{ cursor: "pointer" }} src={arrow} alt="arrow" />
      </section>
    </div>
  );
};
export default Blog;
