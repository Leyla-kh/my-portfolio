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
          <div className="formBox">
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
              <textarea placeholder="Your message" name="message" rows={6} />
              <button type="submit">
                {loading ? <div class="custom-loader"></div> : "Send"}
              </button>
            </form>
            {success && (
              <div className="ThanksBox">
                Dear <span className="senderName">{form.current[0].value}</span>{" "}
                Thanks for your contacting
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <h1>Let's</h1>
          <h1>Connect</h1>
          <h1>With Me!</h1>
        </div>
      </div>
    </div>
  );
}
