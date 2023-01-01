import React, { useRef, useState, useEffect } from "react";
import "./Kostnadsfri.css";
import emailjs from "@emailjs/browser";
import video from "../../utils/dodsbo.mp4";
const Kostnadsfri = ({ vad, text }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k835y1d",
        "template_vky05mk",
        form.current,
        process.env.REACT_APP_EMAILJS_2
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
    if (window.innerWidth >= 900) {
      document.querySelector("video").autoplay = true;
      document.querySelector("video").loop = true;
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
        <video>
          <source src={video} type="video/mp4"></source>
        </video>
      </section>
    </div>
  );
};

export default Kostnadsfri;
