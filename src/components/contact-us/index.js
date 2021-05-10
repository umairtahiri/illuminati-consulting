import React from "react";
import { useHistory } from "react-router-dom";

import Select from "../common/select";

import "./styles.scss";

const projectOptions = [
  {
    label: "none",
    value: "none",
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
        <div className="divider"></div>
      </section>
      <form>
        <Select placeholder="Start a project" />
      </form>
    </div>
  );
};

export default ContactUs;
