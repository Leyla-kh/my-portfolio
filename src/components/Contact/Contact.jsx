import "./Contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_xpsyctc",
        "template_5we2qln",
        form.current,
        "1s40AN4ceLlmocYCk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contacts" id="Contact">
      <div className="wrapper">
        <div className="left">
          <form ref={form} onSubmit={sendEmail}>
            <h2 className="title">Contact Me</h2>
            <div className="inputItem">
              <input required="required" type="text" name="user_name" />
              <span>Name</span>
            </div>
            <div className="inputItem">
              <input required="required" type="email" name="user_email" />
              <span>Email</span>
            </div>
            <textarea placeholder="Your message" name="message" />
            <button type="submit">
              {loading ? <div class="custom-loader"></div> : "Send"}
            </button>
          </form>
        </div>
        <div className="right">
          <img
            className={success ? "emailIcon display" : "emailIcon"}
            src="./img/mail.svg"
          />
          {success && (
            <div className="emailIconOk">
              <img className="emailOkImg" src="./img/mail-send.svg" />
              <span className="senderName">{form.current[0].value}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
