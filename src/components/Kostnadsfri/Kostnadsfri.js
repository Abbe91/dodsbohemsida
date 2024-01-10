import React, { useRef, useState, useEffect } from "react";
import "./Kostnadsfri.css";
import emailjs from "@emailjs/browser";

const Kostnadsfri = ({ vad, text }) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qwj4wc3",
        "template_gudl7ri",
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

  return (
    <div className="kostandri-cont" style={{ background: "#e3c148" }}>
      <div style={{ background: "#e3c148", color: "white" }}>
        <h2>Kostnadsfri {vad}</h2>
        <p style={{ fontSize: "0.9rem", lineHeight: "22px" }}>
          För att vi skall kunna ge dig ett så ärligt pris som möjligt för ditt
          bohag, dödsbo, lösöre eller våra tjänster så erbjuder vi en
          kostnadsfri värdering av ditt dödsbo eller bohag.
        </p>
      </div>
    </div>
  );
};

export default Kostnadsfri;
