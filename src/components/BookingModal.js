import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import emailjs from "@emailjs/browser";

const useStyles = makeStyles({
  title: {
    marginBottom: "1rem"
  },
  inputs: {
    width: "80%",
    marginBottom: "0.5rem",
    height: "2.4rem"
  },
  btn: {
    background: "#0369a1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "0.7rem",
    width: "80%",
    fontWeight: "bold"
  }
});

const BookingModal = ({ modalOpen, setModalOpen }) => {
  const [inputValues, setInputValues] = useState({
    namn: "",
    email: "",
    date: "",
    telefon: ""
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const classes = useStyles();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
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
            document
              .querySelectorAll("input")
              ?.forEach((el) => (el.value = ""));
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
    <div className="booking-modal">
      <div onClick={() => setModalOpen(false)} style={{ cursor: "pointer" }}>
        <CloseRounded />
      </div>

      <h4 className={classes.title}>Boka kostnadsfritt besök / värdering </h4>
      <form ref={form} style={{ textAlign: "center" }}>
        <input
          style={{
            width: "80%",
            marginBottom: "0.5rem",
            height: "2.4rem",
            color: "black",
            background: "transparent",
            border: "none",
            border: "1px solid gray"
          }}
          type="date"
          placeholder="åååå-mm-dd"
          step={3}
          id="date"
          name="date"
          value={inputValues.date}
          onChange={(e) => setInputValues({ date: e.target.value })}
        />
        <input
          type="text"
          name="bookingName"
          placeholder="Namn"
          required
          className={classes.inputs}
          value={inputValues.namn}
          onChange={(e) => setInputValues({ namn: e.target.value })}
        />
        <input
          type="email"
          name="bookingEmail"
          placeholder="Email"
          required
          className={classes.inputs}
          value={inputValues.email}
          onChange={(e) => setInputValues({ email: e.target.value })}
        />
        <input
          type="text"
          name="bookingTelefon"
          placeholder="Telefon"
          required
          className={classes.inputs}
          value={inputValues.telefon}
          onChange={(e) => setInputValues({ telefon: e.target.value })}
        />
        <button type="submit" onClick={handleSubmit} className={classes.btn}>
          {sending ? "skickar..." : sent ? "Tack för din bokning" : "Boka"}
        </button>
      </form>
    </div>
  );
};

export default BookingModal;
