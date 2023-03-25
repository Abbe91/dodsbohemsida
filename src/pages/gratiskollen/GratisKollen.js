import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
let services = [];

const GratisKollen = () => {
  const form = useRef();
  const [sending, setsending] = useState(false);
  const [sent, setsent] = useState(false);
  const [accept, setAccept] = useState(false);
  const customerData = useSelector(getCustomerData);
  const [bliUppringd, setbliUppringd] = useState(false);
  const [faehmail, setfaehmail] = useState(false);
  const [tjanster, settjanster] = useState({
    vardera: false,
    tomma: false,
    stada: false,
    bortforsling: false,
    sanera: false,
    salja: false
  });
  const [leadsData, setleadsData] = useState({
    email: "",
    beskriv: "",
    telefon: "",
    path: window.location.pathname,
    typ: "",
    services: services,
    leadId: Math.floor(Math.random() * 10000000000000)
  });

  const handleLeadsFormChange = (e) => {
    setleadsData({ ...leadsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setsending(true);
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
            setsending(false);
            setsent(true);
            setTimeout(() => {
              window.location.href = "/";
            }, 2500);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Bli uppringd") setbliUppringd(!bliUppringd);
    if (e.target.innerText === "Få e-mail") setfaehmail(!faehmail);
    e.target.style.background = "#D6CA98";
    e.target.style.color = "black";
  };

  return (
    <div className="gratiskollen">
      <form ref={form} id="main-comp-cont">
        <input
          style={{ display: "none" }}
          type={"text"}
          name="tjanster"
          value={leadsData?.services?.map((el) => el)}
        />
        <div
          style={{
            dislay: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "1rem",
            letterSpacing: "1px"
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "black",
              marginRight: "0.25rem",
              fontWeight: "bold"
            }}
          >
            Gratiskollen
          </p>
          <img
            src="https://www.svgrepo.com/show/421244/house-photoshopsupply-shape-3.svg"
            alt="house"
            style={{ height: "25px", width: "25px", marginRight: "0.25rem" }}
            loading="lazy"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem"
          }}
        >
          <p
            style={{
              color: "black",
              borderBottom: "1px solid black",
              marginBottom: "0.3rem"
            }}
          >
            Välj en tjänst eller flera
          </p>
          <section style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0.8rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  settjanster({ ...tjanster, vardera: !tjanster.vardera });
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                }}
              >
                {tjanster.vardera && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Värdering
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0.3rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  settjanster({ ...tjanster, tomma: !tjanster.tomma });
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                }}
              >
                {tjanster.tomma && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Tömma
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0.3rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  settjanster({ ...tjanster, stada: !tjanster.stada });
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                }}
              >
                {tjanster.stada && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Städa
              </p>
            </div>
          </section>
          <section style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0.25rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                  settjanster({
                    ...tjanster,
                    bortforsling: !tjanster.bortforsling
                  });
                }}
              >
                {tjanster.bortforsling && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Bortforsling
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0.3rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  settjanster({ ...tjanster, sanera: !tjanster.sanera });
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                }}
              >
                {tjanster.sanera && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Sanera
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                margin: "0.5rem 0rem",
                transition: "all 0.3s linear"
              }}
            >
              <div
                className="main-circle"
                onClick={(e) => {
                  settjanster({ ...tjanster, salja: !tjanster.salja });
                  services.push(
                    e.currentTarget.parentElement.childNodes[1].innerText
                  );
                }}
                style={{
                  marginLeft: "0.5rem"
                }}
              >
                {tjanster.salja && (
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
                  marginLeft: "0.2rem",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  color: "black"
                }}
              >
                Sälja
              </p>
            </div>
          </section>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <label htmlFor="typ">Typ</label>
          <select name="typ" onChange={handleLeadsFormChange}>
            <option value="Dödsbo">Dödsbo</option>
            <option value="Bohag">Bohag/Hushåll</option>
            <option value="Kontor">Kontor</option>
            <option value="Foretag">Företag</option>
          </select>
        </div>
        <textarea
          placeholder="Beskriv lite kort..."
          style={{
            border: "none",
            borderRadius: "5px",
            width: "80%",
            height: "3rem",
            textAlign: "center",
            background: "transparent",
            border: "1px solid black",
            margin: "1rem 0"
          }}
          name="beskriv"
          onChange={handleLeadsFormChange}
        ></textarea>
        <input
          type={"url"}
          style={{ display: "none" }}
          value={window.location.pathname}
          name="path"
        />

        <div style={{ marginBottom: "1rem" }}>
          <section>
            <p style={{ marginBottom: "0.3rem", color: "black" }}>
              Hur vill du få återkoppling?
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                style={{
                  background: "black",
                  border: "none",
                  width: "6.2rem",
                  height: "2.2rem",
                  borderRadius: "5px",
                  marginLeft: "0.3rem",
                  marginBottom: "0.3rem",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  color: "white"
                }}
                onClick={handleClick}
              >
                Bli uppringd
              </button>
              <button
                style={{
                  background: "black",
                  border: "none",
                  width: "6.2rem",
                  height: "2.2rem",
                  borderRadius: "5px",
                  marginLeft: "0.3rem",
                  marginBottom: "0.3rem",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  color: "white"
                }}
                onClick={handleClick}
              >
                Få e-mail
              </button>
            </div>
          </section>
        </div>
        {bliUppringd && (
          <input
            style={{ display: bliUppringd ? "block" : "none" }}
            type="text"
            placeholder="Ditt nummer"
            required
            name="telefon"
            onChange={handleLeadsFormChange}
          />
        )}
        {faehmail && (
          <input
            style={{ display: faehmail ? "block" : "none" }}
            type="email"
            placeholder="Din email"
            required
            name="email"
            onChange={handleLeadsFormChange}
          />
        )}

        <a
          href={`tel:${customerData.phone}`}
          className="main-form-btn"
          style={{ marginTop: "1rem" }}
        >
          {customerData.phone}
        </a>

        <button
          type="submit"
          className="main-form-btn"
          onClick={handleSubmit}
          style={{
            opacity: accept ? "1" : "0.6"
          }}
        >
          {sending ? "skickar..." : sent ? "Tack för din förfrågan" : "Skicka"}
        </button>

        <div className="form-policy">
          <p style={{ fontSize: "0.75rem", width: "90%", margin: "1rem 0" }}>
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
  );
};

export default GratisKollen;
