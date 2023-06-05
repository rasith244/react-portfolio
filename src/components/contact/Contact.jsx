import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Phone from "../../Img/phone.png";
import Email from "../../Img/email.png";
import Address from "../../Img/address.png";
import "./contact.css";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef(null);

  const theme = useContext(ThemeContext);
  const darkMode = theme?.state.darkMode;

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formRef-->", formRef);
    emailjs
      .sendForm(
        "service_wlwpoju",
        "template_sanjhel",
        formRef.current,
        "wEnWhoEnMKBSpHrNh"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current = null;
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              9787694112
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              contact@rasithFaaz.dev
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              M-174, TNHB Colony, Tenkasi-627811.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="c-form-inputs">
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{
                  backgroundColor: darkMode && "#333",
                  color: darkMode && "#fff",
                }}
                rows="5"
                placeholder="Message"
                name="message"
              ></textarea>
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
