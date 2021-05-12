import React from "react";
import { useHistory } from "react-router-dom";

import Select from "../common/select";
import Input from "../common/input";

import "./styles.scss";

const hearOptions = [
  {
    label: "Social media",
    value: "social-media",
  },
  {
    label: "Search engine",
    value: "search-engine",
  },
  {
    label: "Referrals / Recommendations",
    value: "referrals-recommendations",
  },
  {
    label: "Others",
    value: "others",
  },
];

const ContactUs = () => {
  const history = useHistory();

  return (
    <div className="contact-us--container">
      <header className="golden-heading">
        Let's discuss how we can<br></br> collaborate or schedule<br></br> a
        meeting
      </header>
      <div className="contact-us--description">
        Whether you are looking for a software project estimation or a technical
        <br></br>
        consultation on your idea, you're in the right place.<br></br> Leave us
        a note, and we'll get back to you within 24 hours.
      </div>
      <section className="contact-us--form-container">
        <form>
          <Select defaultOption="Start a project" />
          <div className="row-flexed">
            <Input placeholder="Full name" style={{ marginRight: "10px" }} />
            <Input
              placeholder="Company or organization"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="row-flexed">
            <Input
              placeholder="Email address"
              style={{ marginRight: "10px" }}
            />
            <Input placeholder="Phone number" style={{ marginLeft: "10px" }} />
          </div>
          <div className="row-flexed">
            <Input placeholder="Location" style={{ marginRight: "10px" }} />
            <Select
              option={hearOptions}
              defaultOption="How do you hear about us"
              style={{ marginLeft: "10px" }}
            />
          </div>
          <div className="row-flexed">
            <Input placeholder="Tell us a bit about your project, timeline, and budget" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
