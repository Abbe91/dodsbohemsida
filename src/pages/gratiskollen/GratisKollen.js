import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./styles.css";
import Steptwo from "../../components/MainComp/Steptwo";
import StepThreeGratiskollen from "./StepThreeGratiskollen";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import GratisKollenKontakt from "./GratisKollenKontakt";
import { useDispatch } from "react-redux";
import { setServices } from "../../redux-toolkit/snabbkollenSlice";
import GratisKollenConfirmation from "./GratisKollenConfirmation";
const steps = ["Tjänster", "Typ", "Info", "Kontakt"];
const GratisKollen = () => {
  const dispatch = useDispatch();
  const [bliUppringd, setbliUppringd] = useState(false);
  const [faehmail, setfaehmail] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setServices(e.target.innerText));
    if (e.target.innerText === "Bli uppringd") setbliUppringd(!bliUppringd);
    if (e.target.innerText === "Få e-mail") setfaehmail(!faehmail);
    e.target.style.background = "#D6CA98";
    e.target.style.color = "black";
  };

  const handledbClick = () => {};

  return (
    <>
      <div className="Nav">
        <Nav />
      </div>
      <div className="root" style={{ background: activeStep === 4 && "white" }}>
        <div className="container">
          {activeStep !== 4 && (
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src="https://www.svgrepo.com/show/452786/house.svg"
                alt="imgae 2"
                style={{ width: "100px", height: "120px" }}
              />
            </section>
          )}

          {activeStep === 1 && (
            <Steptwo
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
              title={"Välj en eller flera av det som matchar."}
              htag={"h1"}
            />
          )}
          {activeStep === 2 && (
            <StepThreeGratiskollen
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              step={steps}
            />
          )}
          {activeStep === 3 && (
            <GratisKollenKontakt
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              step={steps}
            />
          )}
          {activeStep === 4 && <GratisKollenConfirmation />}
          {activeStep === 0 && (
            <div>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
                <h2 className="poppins" style={{ marginBottom: "0.2rem" }}>
                  Gratiskollen
                </h2>
                <p
                  style={{
                    marginBottom: "0.75rem",
                    fontSize: "0.85rem"
                  }}
                >
                  Vilka eller vilken tjänst behöver du hjälp med?
                </p>
                <section>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
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
                      onDoubleClick={handledbClick}
                    >
                      Tömma
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
                      onDoubleClick={handledbClick}
                    >
                      Värdera
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
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
                      onDoubleClick={handledbClick}
                    >
                      Städa
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
                      onDoubleClick={handledbClick}
                    >
                      Flytta
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
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
                      onDoubleClick={handledbClick}
                    >
                      Uppköp
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
                      onDoubleClick={handledbClick}
                    >
                      Bortforsling
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
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
                      onDoubleClick={handledbClick}
                    >
                      Återvinning
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
                      onDoubleClick={handledbClick}
                    >
                      Sophämtning
                    </button>
                  </div>
                </section>
              </section>
            </div>
          )}
          {activeStep !== 4 && (
            <button
              className="nasta-steg"
              style={{
                width: activeStep === 2 || 3 ? "255px" : "12.7rem",
                height: "2.4rem",
                margin: "0.4rem auto",
                background: "transparent",
                fontWeight: "bold",
                fontSize: "0.9rem",
                border: "1px solid black",
                borderRadius: "5px",
                color: "black"
              }}
              onClick={() => setActiveStep(activeStep + 1)}
            >
              {activeStep === 3 ? "Skicka" : "Nästa steg"}
            </button>
          )}

          {activeStep === 3 && (
            <p
              style={{
                fontSize: "0.75rem",
                maxWidth: "80%",
                margin: "0.2rem auto"
              }}
            >
              Genom att använda detta formulär accepterar du att{" "}
              <strong>Dödsbo Jouren</strong> hanterar dina uppgifter för att
              återkoppla till dig som kund/besökare.
            </p>
          )}
          {activeStep !== 4 && (
            <div className="stepperr">
              <Stepper
                activeStep={activeStep}
                style={{ background: "#bbe3f7" }}
              >
                {steps.map((step) => {
                  return (
                    <Step key={step}>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          )}
          <p
            style={{
              fontSize: "0.7rem",
              margin: "2rem auto",
              lineHeight: "20px",

              maxWidth: "90%"
            }}
          >
            Vi på <strong>Dödsbo Jouren</strong> har lång erfarenhet av alla
            typer av flyttar och städningar och vi sanerar dödsbon och hushåll
            för att ge dig en trygg och ren miljö. Vi erbjuder också värdering
            av dödsbon och köper upp lösöre för att underlätta processen för
            dig. Vårt team av experter är alltid redo att hjälpa till med att
            skapa en smidig och stressfri lösning för alla dina behov.
          </p>
        </div>
      </div>
    </>
  );
};

export default GratisKollen;
