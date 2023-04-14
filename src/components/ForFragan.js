import React, { useState, useRef } from "react";
import Nav from "./Nav/Nav";
import { getSnabbkollenData } from "../redux-toolkit/snabbkollenSlice";
import emailjs from "@emailjs/browser";
import { Stepper, Step, StepLabel, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setBeskrivning } from "../redux-toolkit/snabbkollenSlice";
import { AiOutlineCheckCircle } from "react-icons/ai";
const steps = ["Uppdraget", "Kontaktinfo"];
const useStyles = makeStyles({
  root: {
    "& .MuiStepIcon-active": { color: "rgb(227, 193, 72)" },
    "& .MuiStepIcon-completed": { color: "green" }
  }
});
const ForFragan = () => {
  const dispatch = useDispatch();
  const data = useSelector(getSnabbkollenData);
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [leadOrt, setLeadOrt] = useState(undefined);
  const form = useRef();
  const handleSubmit = () => {
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
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const StepTwo = () => {
    return (
      <div style={{ marginBottom: "1rem", height: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <img
            src={"https://www.svgrepo.com/show/480816/map-pin.svg"}
            alt={"kontaktform"}
            style={{
              height: "20px",
              width: "20px",
              marginTop: "1rem",
              marginLeft: "0.1rem"
            }}
          />
          <p
            style={{
              marginTop: "1rem",
              marginLeft: "0.5rem",
              fontSize: "1rem"
            }}
          >
            Kontaktuppgifter
          </p>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "0.5rem"
          }}
          ref={form}
        >
          <label htmlFor="namn">Namn</label>
          <input
            type="text"
            name="namn"
            style={{ marginBottom: "1rem", height: "2rem" }}
          />
          <input
            readOnly
            type="text"
            name="beskriv"
            value={data?.beskrivning}
            style={{ display: "none" }}
          />
          <input
            readOnly
            type="text"
            name="tjanster"
            value={data?.services?.[0]}
            style={{ display: "none" }}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            style={{ marginBottom: "1rem", height: "2rem" }}
          />
          <label htmlFor="telefon">Telefon</label>
          <input
            type="text"
            name="telefon"
            style={{ marginBottom: "1rem", height: "2rem" }}
          />
          <label htmlFor="ort">I vilken ort skall uppdraget utföras?</label>
          <input
            type="text"
            name="typ"
            style={{ marginBottom: "1rem", height: "2rem" }}
          />
          <label htmlFor="date">När skall uppdraget utföras?</label>
          <select
            style={{
              background: "transparent",
              height: "2rem",
              border: "0.5px solid black",
              borderRadius: "2px"
            }}
            name="date"
          >
            <option value={"Flexibel"}>Flexibel</option>
            <option value={"inom 2 veckor"}>Inom 2 veckor</option>
            <option value={"inom 1-2 veckor"}>Inom 1-2 månader</option>
            <option value={"Omgående"}>Omgående</option>
          </select>
        </form>
      </div>
    );
  };
  const Confirmation = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "400px"
        }}
      >
        <AiOutlineCheckCircle
          style={{ fontSize: "2.2rem", margin: "1rem 0" }}
        />
        <h2>Tack!</h2>
        <p style={{ margin: "0.5rem 0" }}>Vi har tagit emot din förfrågan.</p>
        <div
          style={{
            height: "1px",
            background: "black",
            width: "92%",
            margin: "2.5rem 0"
          }}
        ></div>
      </div>
    );
  };
  return (
    <div style={{ height: "800px", maxWidth: "900px", margin: "0 auto" }}>
      <Nav />
      <section>
        <Stepper
          activeStep={activeStep}
          style={{ background: "white" }}
          className={classes.root}
        >
          {steps.map((step, i) => {
            return (
              <Step key={i}>
                <StepLabel StepIconProps={{}}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <section>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <img
              src={
                items?.filter((el) => el.title === data?.services?.[0])[0]?.url
              }
              alt={data?.services?.[0]}
              style={{
                height: "35px",
                width: "35px",
                marginTop: "1rem",
                marginLeft: "1.5rem"
              }}
            />
            <p style={{ marginTop: "1rem", marginLeft: "0.5rem" }}>
              {data?.services?.[0]}
            </p>
          </div>
          <section
            style={{
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
              height: "100%",
              maxWidth: "100%",
              margin: "0 auto",
              padding: "1rem"
            }}
          >
            {activeStep === 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1rem",
                  marginLeft: "1rem"
                }}
              >
                <label
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    marginTop: "1rem"
                  }}
                >
                  Hur kan vi hjälpa till?
                </label>
                <textarea
                  onChange={(e) => dispatch(setBeskrivning(e.target.value))}
                  rows={8}
                  cols={6}
                  style={{
                    height: "96%",
                    border: "1px solid black",
                    maxWidth: "96%"
                  }}
                  placeholder="Beskriv det du behöver få hjälp med. Detaljera gärna lite mer, detta hälper oss att ge dig ett bättre svar och återkoppling. "
                ></textarea>
              </div>
            )}
            {activeStep === 2 && <Confirmation />}
            {activeStep === 1 && <StepTwo />}
            {activeStep == 1 && (
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  name="accept"
                  style={{ marginRight: "0.5rem" }}
                />
                <label style={{ fontSize: "0.7rem" }} htmlFor="accept">
                  Jag godkänner att Dödsbo Jouren lagrar mina personuppgifter
                  för att återkoppla till mig som kund eller användare.
                </label>
              </div>
            )}
            {activeStep !== 2 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  style={{
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                    width: "6rem",
                    height: "2.3rem",
                    borderRadius: "15px",
                    border: "none",
                    background: "#FFD700",
                    fontWeight: "bold",
                    color: "black",
                    letterSpacing: "0.5px",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  }}
                  onClick={() => {
                    setActiveStep(activeStep + 1);
                    handleSubmit();
                  }}
                >
                  {activeStep === 0 ? "Nästa" : "Skicka"}
                </button>
              </div>
            )}
          </section>
        </section>
      </section>
    </div>
  );
};

export default ForFragan;

const items = [
  {
    title: "Bortforsling",
    url: "https://www.svgrepo.com/show/85909/furniture.svg"
  },
  {
    title: "Värdering",
    url: "https://www.svgrepo.com/show/160931/judge.svg"
  },
  {
    title: "Tömning",
    url: "https://www.svgrepo.com/show/307953/mover-going-downstairs-stairs-ladder-moving-boxes.svg"
  },
  {
    title: "Städa",
    url: "https://www.svgrepo.com/show/287614/cleaning-mop.svg"
  },
  {
    title: "Flyttstäda",
    url: "https://www.svgrepo.com/show/287614/cleaning-mop.svg"
  },
  {
    title: "Flytta",
    url: "https://www.svgrepo.com/show/270968/truck.svg"
  },
  {
    title: "Återvinning",
    url: "https://www.svgrepo.com/show/230586/recycling-bin-recycle-bin.svg"
  },
  {
    title: "Avfallshantering",
    url: "https://www.svgrepo.com/show/484065/trash-can.svg"
  },
  {
    title: "Uppköp av lösöre",
    url: "https://www.svgrepo.com/show/480209/painting-1.svg"
  },
  {
    title: "Uppköp av dödsbo",
    url: "https://www.svgrepo.com/show/490798/house.svg"
  }
];
