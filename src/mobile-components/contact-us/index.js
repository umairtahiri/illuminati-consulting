import React from "react";

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
  return (
    <div className="mobile-contact-us--container">
      <header className="mobile-golden-heading">Let’s Work Together!</header>
      <div className="contact-us--description">
        Whether you’re looking to optimize your software or if you require a
        technical consultation, we’re here to help! By filling out our form,
        we’ll get back to you within 24 hours.
      </div>
      <section className="contact-us--form-container">
        <form>
          <Select defaultOption="Start a project" />
          <Input placeholder="Full name" />
          <Input placeholder="Company or organization" />
          <Input placeholder="Email address" />
          <Input placeholder="Phone number" />
          <Input placeholder="Location" />
          <Select
            option={hearOptions}
            defaultOption="How do you hear about us"
          />
          <Input placeholder="Tell us a bit about your project, timeline, and budget" />
        </form>
      </section>
      <div className="button-container" style={{ marginTop: "40px" }}>
        <button className="mobile-button">SUBMIT</button>
      </div>
    </div>
  );
};

export default ContactUs;
