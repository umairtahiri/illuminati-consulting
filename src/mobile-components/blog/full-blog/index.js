import React from "react";
import blogbanner from "../../../images/blogbanner.png";
import twitter from "../../../images/twitter.svg";
import link from "../../../images/link.svg";
import facebook from "../../../images/facebook.svg";
import instagram from "../../../images/instagram.svg";
import blogbitcoin from "../../../images/blogbitcoin.png";
import BlogLink from "../../common/blog-link";
import blog from "../../../images/blog.png";
import calender from "../../../images/calender.svg";

import "./styles.scss";

const BlogPage = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="blog-page-main-container">
      <img className="blogbanner" alt="banner" src={blogbanner} />
      <div className="blog-page-calender-links">
        <div className="blog-page-calender-container">
          <img alt="calender" style={{ cursor: "pointer" }} src={calender} />
          <div className="date">January 18, 2021 </div>
        </div>
        <div className="blog-page-media-links">
          <div className="media-links-container">
            <img src={link} alt="link" />
          </div>
          <div className="media-links-container">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="media-links-container">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="media-links-container">
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
      <div className="golden-heading blog-page-heading">
        An Update on the Implementation of the New FATF Travel Rule Requirements
      </div>
      <div className="blog-page-text">
        n September, we touched on probably one of the biggest developments in
        the crypto community to date – the FATF’s implementation of the new
        “travel rules” (new requirements for the provisioning of personal
        identifiable information (PII) regarding users involved in crypto
        transactions totaling more than $1000 USD/EUR located in each of the
        FATF’s 39 member countries), as well as Virtual Asset Service Providers
        (VASPs - for example, CoinBase) now being required to store this
        information on record by the governing body. This is a hot button issue
        in the crypto realm today, due to the exchange of PII -- not actively
        available before due to technology limitations -- now being harvested
        and shared between VASPs.
      </div>

      <div className="blog-page-text">
        It’s become apparent that many exchanges are now facing serious hurdles
        in successfully meeting the initial compliance date of June 2020. This
        has led to some exchanges in member countries already delisting some
        coins due to non-compliance. FinCEN has also been shown to be more of a
        force as the new regulations begin to take shape, and is quietly pushing
        harder for compliance of the new measures in America. One reason for
        this was the Q3 2019 Anti-Money Laundering (AML) report published by
        CipherTrace, which disclosed that the U.S. alone now currently processes
        almost $2 billion in crypto transactions unknowingly every year. Thus,
        the implications for money laundering within the U.S. banking system is
        already huge. Since the blockchain can’t be modified itself without a
        lot of heavy re-engineering, the solutions currently being offered are
        what as seen as augmented layers, or, in laymen’s terms, “plug-in”
        solutions -- with all exchanges involved needing to come to terms on
        mutual implementation in order for them to be effective.
      </div>
      <img className="blogbanner" alt="banner" src={blogbitcoin} />
      <div className="blog-page-text-container">
        <div className="blog-page-text">
          Adobe Flash has been slowly pushed to the edge of the cliff for the
          last 10 years and now it’s finally time to say goodbye. Modern web
          technologies with cross-platform support and open-source code are
          taking over.
        </div>
        <div className="blog-page-text">
          The interactive multimedia platform’s decline started when Apple
          rejected Flash back in 2007, refusing to use it for the iPhone’s
          operating system. Steve Jobs wisely anticipated the foundational
          change in the multimedia dimension and decided not to use it for
          Apple’s devices.
        </div>
        <div className="blog-page-text">
          It took another critical hit when Youtube also switched from Flash to
          HTML5 in 2015 to accommodate mobile devices. Youtube users were
          growing irritated from constantly having to install updates for the
          Flash Player plugin. Youtube owners were frustrated with how they had
          to provide different versions of the video portal for mobile and
          desktop, so they also decided to switch to HTML5.
        </div>
        <div className="blog-page-text">
          Following the lead, Google Chrome and other browsers made the switch
          to HTML5 that same year, which put the last nail in the coffin. After
          2015 browsers started blocking Flash content from playing by default.
          Users had to manually enable it for every page. The main concern was
          that Flash ran in the background of the browser, causing serious
          issues in performance, stability, and security.
        </div>
        <div className="blog-page-text">
          Facebook and other social media giants which are now platforms for
          casual games also went with HTML5 technologies.The era when Flash was
          known for its engaging, interactive, at times very bizarre games is
          now long in the past.
        </div>
      </div>
      <div className="blog-page-cards">
        <BlogLink
          pic={blog}
          label="Why do we use it?"
          date="March 23, 2021"
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <BlogLink
          pic={blog}
          label="Why do we use it?"
          date="March 23, 2021"
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <BlogLink
          pic={blog}
          label="Why do we use it?"
          date="March 23, 2021"
          desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </div>
  );
};

export default BlogPage;
