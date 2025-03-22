import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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
        setErrorMessage(""); // Clear error on success
      })
      .catch((err) => console.error("EmailJS Error:", err));
  };

  // GSAP animation for form elements
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#name_from, #email_from, #message, #button", {
        x: "-=500",
        stagger: 0.5,
        opacity: 0,
        duration: 1,
      });
    }, ref);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#social_media", {
        y: -500,
        opacity: 0,
        duration: 1,
        delay: 0.3,
      }).from("#linkedin, #github", {
        y: "+=50",
        opacity: 0,
        stagger: 0.5,
      });
    }, socialMed);

    return () => context.revert();
  }, []);

  // Hide success message after 5 seconds
  useEffect(() => {
    if (messageSent && refMessage.current) {
      const timeout = setTimeout(() => {
        gsap.to(refMessage.current, { x: 100, opacity: 0, duration: 1 });
        setMessageSent(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [messageSent]);

  // Hide error message after 3 seconds
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
      </form>
      <div ref={socialMed} id="social_media">
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
    </>
  );
}

export default FormContact;
