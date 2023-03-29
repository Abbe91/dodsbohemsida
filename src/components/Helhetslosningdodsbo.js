import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import emailjs from "@emailjs/browser";
const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "3rem",
    flexDirection: "row",
    justifyContent: "space-evenly",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      textAlign: "center"
    }
  },
  sec1: {
    marginBottom: "1rem"
  },
  sec2: {
    marginBottom: "2rem"
  },
  paragraph: {
    lineHeight: "28px",
    fontSize: "0.9rem",
    margin: "0 auto",
    "@media screen and (min-width: 800px)": {
      width: "400px"
    }
  },
  title: {
    color: "black",
    marginBottom: "0.5rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    background: "#bbe3f7",
    color: "black",
    border: "none",
    height: "2rem",
    borderRadius: "5px",
    marginTop: "0.3rem",
    fontWeight: "bold"
  },
  input: {
    height: "2rem",
    marginBottom: "0.3rem",
    width: "100%"
  }
});

const Helhetslosningdodsbo = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const classes = useStyles();
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
    <div className={classes.root}>
      <section className={classes.sec1}>
        <h2 className={classes.title}>Helhetslösning för dödsbo</h2>
        <p className={classes.paragraph}>
          Ett dödsbo är mer krävande än vad man tror. Idag ställs det ju många
          krav på sortering och avfall av dödsbon. Vi på Dödsbo Jouren tar hela
          ansvaret från att sortera{" "}
          <a href="/dodsboet" style={{ color: "black" }} title="dödsboet">
            dödsboet
          </a>
          , bortforsling av dödsboet,{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "black" }}
            title="tömma dödsbo"
          >
            tömning av dödsboet
          </a>{" "}
          och sedan städning av dödsboet. Vi gör även luktsaneringar av dödsbo
          eller röksanering av dödsbo.
        </p>
      </section>
      <section className={classes.sec2}>
        <form className={classes.form} ref={form}>
          <h4 className={classes.title}>
            Behöver du hjälp med hela processen?
          </h4>
          <input
            type={"text"}
            placeholder="Ditt namn"
            className={classes.input}
            name="namn"
          />
          <input
            type={"email"}
            name="email"
            placeholder="Ditt email"
            className={classes.input}
          />
          <textarea
            placeholder="Beskriv lite kort det du behöver hjälp med"
            rows={4}
            name="beskriv"
            style={{
              width: "100%",
              height: "2.8rem",
              border: "1px solid rgb(168, 167, 167)"
            }}
          ></textarea>
          <button type="submit" className={classes.btn} onClick={handleSubmit}>
            {sending
              ? "skickar..."
              : sent
              ? "Tack för din förfrågan"
              : "Skicka"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Helhetslosningdodsbo;
