import React, { useRef, useState, useEffect } from "react";
import "./Kostnadsfri.css";
import emailjs from "@emailjs/browser";
import video from "../../utils/video.mp4";
const Kostnadsfri = ({ vad, text }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wzr1q3r",
        "template_4xmyon5",
        form.current,
        process.env.REACT_APP_EMAILJS_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("email sent");
            setSending(false);
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    if (window.innerWidth < 900) {
      document.querySelector("video").autoPlay = false;
    }
  }, []);
  return (
    <div className="kostandri-cont">
      <div>
        <h1>Kostnadsfri {vad}</h1>
        <p>{text}</p>
        <form ref={form}>
          <h2>Vill du veta mer?</h2>
          <input type="email" required placeholder="Din email" name="email" />
          <button type="submit" onClick={handleSubmit}>
            {sending
              ? "skickar..."
              : sent
              ? "Tack för din förfrågan"
              : "Skicka"}
          </button>
        </form>
      </div>
      <section className="video-wrapper">
        <video autoPlay loop>
          <source src={video} type="video/mp4"></source>
        </video>
      </section>
    </div>
  );
};

export default Kostnadsfri;
