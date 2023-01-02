import React, { useState, useRef } from "react";
import "./MainComp.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const MainComp = ({
  query,
  formTitle,
  icon,
  subTitle,
  subTitle2,
  subTitle3,
  subTitle4,
  subTitle5,
  text,
  text1,
  text2
}) => {
  const [accept, setAccept] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const customerData = useSelector(getCustomerData);
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
    <section>
      <div className="mainComp">
        <div className="main-content-container">
          <div>
            <h1>{query}</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: "0.2rem"
              }}
            >
              <h4 style={{ marginRight: "0.5rem" }}>{subTitle}</h4>
              <p> {icon}</p>
            </div>
            <h5 style={{ maxWidth: "400px", marginBottom: "1.5rem" }}>
              Din auktoriserade hanterare av dödsbo, bohag, uppköp av dödsbon,
              försäljning av dödsbo, tömning av dödsbo, bortforsling av dödsbo,
              sanering av dödsbo, flytt och städning av dödsbo.
            </h5>
            <div>
              <h2>{subTitle3}</h2>
              <p style={{ maxWidth: "500px" }}>{text}</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h2>{subTitle4}</h2>
              <p style={{ maxWidth: "500px" }}>{text1}</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <h2>{subTitle5}</h2>
              <p style={{ maxWidth: "500px" }}>{text2}</p>
              <p>
                Behöver du hjälp med att tömma ditt dödsbo eller få ditt dösbo
                värderat? Vi hjälper dig med hela processen för ditt dödsbo.{" "}
              </p>
            </div>
          </div>
        </div>
        <form ref={form}>
          <div
            style={{
              dislay: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "1rem",
              letterSpacing: "1px",
              borderBottom: "1px solid gray"
            }}
          >
            <p style={{ fontSize: "1.2rem" }}>Gratiskollen</p>
            <i style={{ fontSize: "1.5rem" }}>{icon}</i>
          </div>
          <h4>{formTitle}</h4>
          <input type="text" placeholder="Ditt namn" required name="namn" />
          <input type="text" placeholder="Din email" required name="email" />
          <input
            type="text"
            placeholder="Ditt nummer"
            required
            name="telefon"
          />
          <textarea
            placeholder="Beskriv lite kort vad du behöver hjälp med"
            style={{
              border: "none",
              borderRadius: "5px",
              width: "80%",
              height: "3rem",
              textAlign: "center",
              fontSize: "0.7rem"
            }}
            name="beskriv"
          ></textarea>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <label htmlFor="typ">Typ</label>
            <select name="typ">
              <option value="Dödsbo">Dödsbo</option>
              <option value="Värdering">Värdering</option>
              <option value="Bohag">Bohag</option>
              <option value="Flytt">Flytt</option>
              <option value="Städ">Städ</option>
              <option value="Uppköp">Uppköp</option>
              <option value="Sanering">Sanering</option>
            </select>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0.7rem 0"
              }}
            >
              <p style={{ fontSize: ".8rem", marginRight: "0.3rem" }}>
                Jag vill bli kontaktad
              </p>
              <input type="checkbox" name="vill-bli-kontaktad" />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ fontSize: ".8rem", marginRight: "0.3rem" }}>
                Jag <strong>Vill</strong> ha en offert
              </p>
              <input type="checkbox" name="vill-ha-offert" />
            </div>
          </div>
          <a
            href={`tel:${customerData.phone}`}
            className="main-form-btn"
            style={{ marginTop: "1rem" }}
          >
            {customerData.phone}
          </a>
          {accept && (
            <button
              type="submit"
              className="main-form-btn"
              onClick={handleSubmit}
            >
              {sending
                ? "skickar..."
                : sent
                ? "Tack för din förfrågan"
                : "Skicka"}
            </button>
          )}
          <div className="form-policy">
            <p style={{ fontSize: "0.8rem", width: "90%", margin: "1rem 0" }}>
              Genom att använda detta formulär accepterar du att{" "}
              <strong style={{ marginRight: "0.15rem" }}>
                {customerData.business}
              </strong>
              lagrar och hanterar dina uppgifter. Uppgifterna i fråga kommer att
              användas för att återkoppla till dig som kund/besökare.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: ".5rem 0",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={() => setAccept(!accept)}
                style={{ border: accept && "none" }}
              >
                {accept && (
                  <AiFillCheckCircle
                    style={{
                      width: "100%",
                      height: "100%",
                      color: "black"
                    }}
                  />
                )}
              </div>
              <p
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Jag godkänner
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainComp;
