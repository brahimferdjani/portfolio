import { useEffect, useRef, useState } from "react";
import "./FormContact.scss";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function FormContact() {
  const ref = useRef(null);
  const refMessage = useRef(null);
  const socialMed = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      return;
    }

    emailjs
      .sendForm(
        "service_8dq3pbb",
        "template_rys9lsl",
        e.target,
        "BOazc9WC93w7NBOjr"
      )
      .then(() => {
        setMessageSent(true);
        setEmail("");
        setName("");
        setMessage("");
        setErrorMessage("");
      })
      .catch((err) => console.error("EmailJS Error:", err));
  };

  useEffect(() => {
    if (messageSent && refMessage.current) {
      const timeout = setTimeout(() => {
        setMessageSent(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [messageSent]);

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [errorMessage]);

  return (
    <>
      <form ref={ref} onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            id="name_from"
            type="text"
            name="name_from"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email_from"
            type="email"
            name="email_from"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button id="button" type="submit">
            Send
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {messageSent && (
            <p ref={refMessage} id="message_sent">
              Message sent successfully!
            </p>
          )}
        </div>
        <div className="links" ref={socialMed} id="social_media">
          <Link
            id="linkedin"
            className="linkedin"
            to="http://linkedin.com/in/ferdjani-brahim-438919175"
            target="_blank"
          >
            <p>Linkedin</p>
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            id="github"
            className="github"
            to="https://github.com/brahimferdjani"
            target="_blank"
          >
            <p>Github</p>
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
      </form>
    </>
  );
}

export default FormContact;
