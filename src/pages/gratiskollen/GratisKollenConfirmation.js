import React, { useRef, useEffect, useState } from "react";
import { getSnabbkollenData } from "../../redux-toolkit/snabbkollenSlice";
import LottieHouse from "../../LottieAnimation/LottieHouse";
import lottieanimation from "../../utils/animation/tommerdodsbo.json";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { Audio } from "react-loader-spinner";
const GratisKollenConfirmation = () => {
  const [sending, setSending] = useState(false);
  const [sent, setsent] = useState(false);
  const data = useSelector(getSnabbkollenData);
  const form = useRef();
  const handleSubmit = () => {
    setSending(true);
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
            setsent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <form
        style={{ display: "none" }}
        onSubmit={(e) => e.preventDefault()}
        ref={form}
      >
        <input name="path" type={"text"} value={data?.area} readOnly />
        <input
          name="beskriv"
          type={"text"}
          value={data?.beskrivning}
          readOnly
        />
        <input name="typ" type={"text"} value={data?.bohagsTyp} readOnly />
        <input name="email" type={"text"} value={data?.email} readOnly />
        <input name="namn" type={"text"} value={data?.namn} readOnly />
        <input name="telefon" type={"text"} value={data?.nummer} readOnly />
        <input name="tjanster" type={"text"} value={data?.services} readOnly />
        <input name="date" type={"text"} value={data?.when} readOnly />
      </form>
      <div>
        {sending && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h2>Skickar...</h2>
            <div>
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
              />
            </div>
          </div>
        )}
        {sent && (
          <div>
            <h2 style={{ margin: "0.2rem 0" }}>Tack för din förfrågan</h2>
            <h3 style={{ margin: "0.2rem 0" }}>Hjälp är på väg </h3>
            <div style={{ marginTop: "0.5rem" }}>
              <LottieHouse lotti={lottieanimation} height={240} width={340} />
            </div>
          </div>
        )}
      </div>
      {sent && (
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            height: "2.4rem",
            marginTop: "1rem",
            width: "300px",
            background: "transparent",
            fontWeight: "bold",
            fontSize: "0.9rem",
            border: "1px solid black",
            borderRadius: "5px",
            color: "black"
          }}
        >
          Tillbaka till startsidan
        </button>
      )}
    </div>
  );
};

export default GratisKollenConfirmation;
