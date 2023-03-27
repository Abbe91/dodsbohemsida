import React, { useState, useRef } from "react";
import "./MainComp.css";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Arbetsprocessen from "../Arbetsprocessen";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import Steptwo from "./Steptwo";
import Stepthree from "./Stepthree";
import SnabbhjalpConfirm from "./SnabbhjalpConfirm";
import { useDispatch } from "react-redux";
import { setServices } from "../../redux-toolkit/snabbkollenSlice";
import LottieHouse from "../../LottieAnimation/LottieHouse";
import lottieanimation from "../../utils/animation/hus.json";
const MainComp = ({ subTitle, subTitle5, text2 }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const form = useRef();
  const [leadsData, setleadsData] = useState({
    namn: "",
    email: "",
    beskriv: "",
    telefon: "",
    tjanst: location?.pathname,
    typ: "",
    leadId: Math.floor(Math.random() * 10000000000000)
  });
  const steps = ["Tjänster", "Beskriv", "Återkoppling"];
  const [activeStep, setActiveStep] = useState(0);

  const addLeadToFireTore = async () => {
    try {
      const docRef = await addDoc(collection(db, "newLeads"), leadsData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleClick = (e) => {
    dispatch(setServices(e.target.innerText));
    e.target.style.background = "#D6CA98";
    e.target.style.color = "black";
  };
  const handledbClick = (e) => {
    e.target.style.background = "black";
    e.target.style.color = "white";
  };

  return (
    <section className="root">
      <div className="mainComp">
        <section style={{ maxWidth: "600px" }}>
          {activeStep !== 3 && (
            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>{subTitle}</h3>

              <p
                style={{
                  maxWidth: "80%",
                  margin: "0 auto",
                  fontSize: "0.9rem"
                }}
              >
                Auktoriserad firma som hanterar{" "}
                <a
                  href="/uppkop-av-dodsbo"
                  title="uppköp av dödsbo, bohag och hushåll"
                  style={{ color: "inherit" }}
                >
                  uppköp
                </a>
                ,{" "}
                <a
                  href="/salja-dodsbo"
                  title="försäljninglösöre, dödsbo, bohag och hushåll"
                  style={{ color: "inherit" }}
                >
                  försäljning
                </a>
                ,{" "}
                <a
                  href="/tomma-dodsbo"
                  title="tömma dödsbo"
                  style={{ color: "inherit" }}
                >
                  tömning
                </a>
                ,{" "}
                <a
                  href="/bortforsling-dodsbo"
                  title="bortforsling av möbler och dödsbo"
                  style={{ color: "inherit" }}
                >
                  bortforsling
                </a>
                ,{" "}
                <a
                  href="/sanera-dodsbo"
                  title="sanering av dödsbo"
                  style={{ color: "inherit" }}
                >
                  sanering
                </a>
                ,{" "}
                <a
                  href="/bohagsflytt"
                  title="bohagsflytt"
                  style={{ color: "inherit" }}
                >
                  flytt
                </a>{" "}
                och{" "}
                <a
                  href="/stadning-av-dodsbo"
                  title="städning av dödsbo"
                  style={{ color: "inherit" }}
                >
                  städning
                </a>{" "}
                av{" "}
                <a
                  href="/tomma-dodsbo"
                  title="tömma dödsbo"
                  style={{ color: "inherit" }}
                >
                  dödsbon
                </a>{" "}
                och{" "}
                <a
                  href="/tomma-bohag"
                  title="tömma bohag"
                  style={{ color: "inherit" }}
                >
                  bohag
                </a>
                .
              </p>
            </div>
          )}
          {activeStep == 1 && (
            <Steptwo
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              steps={steps}
            />
          )}
          {activeStep == 2 && (
            <Stepthree
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              step={steps}
            />
          )}
          {activeStep == 3 && <SnabbhjalpConfirm />}
          {activeStep === 0 && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "2rem"
              }}
            >
              <h3 className="poppins">Snabbhjälpen</h3>
              <p style={{ marginBottom: "0.5rem", fontSize: "0.85rem" }}>
                Vad behöver du hjälp med?
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
              </section>
            </section>
          )}
          {activeStep !== 3 && (
            <button
              className="nasta-steg"
              style={{
                width: "12.7rem",
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
              Nästa steg
            </button>
          )}
          <div className="stepperr">
            <Stepper activeStep={activeStep} style={{ background: "#bbe3f7" }}>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </section>
        <section className="mainComp-wiw">
          <img
            src="https://images.pexels.com/photos/7464244/pexels-photo-7464244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "30%",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            }}
            alt="flyttkartonger, tömmer ett dödsbo"
          />
        </section>
      </div>
      <div
        style={{ textAlign: "center", margin: "2rem 0" }}
        className="main-content-container"
      >
        <div>
          <h1>Snabbt & Pålitligt</h1>
          <p>
            Letar du efter en som kan ta hand om{" "}
            <a
              href="/tomma-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              dödsbon
            </a>{" "}
            och{" "}
            <a
              href="/tomma-bohag"
              title="tömma bohag och hushåll"
              style={{ color: "inherit" }}
            >
              hushåll
            </a>{" "}
            på ett professionellt sätt? Då har du kommit rätt! Vi är experter på
            att{" "}
            <a
              href="/uppkop-av-dodsbo"
              title="uppköp av dödsbo, bohag och hushåll"
              style={{ color: "inherit" }}
            >
              köpa
            </a>
            ,{" "}
            <a
              href="/tomma-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              tömma
            </a>{" "}
            ,{" "}
            <a
              href="/stadning-av-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              städa
            </a>{" "}
            och sälja dödsbon och hushåll.
          </p>
        </div>

        <LottieHouse lotti={lottieanimation} height={200} width={300} />
      </div>
      <Arbetsprocessen />
      <section className="content-new-container">
        <div
          style={{
            margin: "0rem 0.5rem",
            background: "white",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h4 style={{ marginLeft: "0.5rem" }}>{subTitle5}</h4>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "0.9rem",
              marginLeft: "0.5rem"
            }}
          >
            {text2}
          </p>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "0.9rem",
              marginLeft: "0.5rem"
            }}
          >
            Behöver du hjälp med att{" "}
            <a
              href="/tomma-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              tömma ditt dödsbo
            </a>{" "}
            eller hushåll eller få ditt dödsbo{" "}
            <a
              href="/vardera-dodsbo"
              title="värdera dödsbo"
              style={{ color: "inherit" }}
            >
              värderat
            </a>{" "}
            ? Vi hjälper dig med hela processen för ditt dödsbo och bohag.{" "}
          </p>
        </div>

        <div
          style={{
            margin: "1rem 0.5rem",
            background: "#bbe3f7",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h4 style={{ marginLeft: "0.5rem" }}>Dödsbo är krävande</h4>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "0.9rem",
              marginLeft: "0.5rem"
            }}
          >
            {/* {text1} */}
            Att ta hand om ett{" "}
            <a
              href="/tomma-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              dödsbo
            </a>{" "}
            kan vara en svår uppgift som kräver mycket tid och arbete. Det kan
            vara en känslomässigt påfrestande tid för de efterlevande, och det
            kan vara svårt att veta var man ska börja. Men med rätt hjälp och
            stöd kan det bli enklare. Vi på Dödsbo Jouren specialiserar oss på
            hantering av dödsbo och kan hjälpa dig att ta hand om alla aspekter
            av processen.
          </p>
        </div>
        <div
          style={{
            margin: "1.2rem 0.5rem",
            background: "white",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h4 style={{ marginLeft: "0.5rem" }}>Vad kan vi göra</h4>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "0.9rem",
              marginLeft: "0.5rem"
            }}
          >
            {/* {text1} */}
            Vi erbjuder en mängd olika tjänster, inklusive{" "}
            <a
              href="/vardera-dodsbo"
              title="värdera dödsbo"
              style={{ color: "inherit" }}
            >
              värdering
            </a>{" "}
            av tillgångar,{" "}
            <a
              href="/bortforsling-dodsbo"
              title="bortforsling av dödsbo"
              style={{ color: "inherit" }}
            >
              bortforsling
            </a>{" "}
            av skräp,{" "}
            <a
              href="/tommer-hushall"
              title="tömmer hushåll, bohag och dödsbo"
              style={{ color: "inherit" }}
            >
              tömning av fastigheter
            </a>{" "}
            , uppköp av egendom, städning och sanering. Vi förstår att varje
            dödsbo är unikt och att det kan finnas olika behov beroende på
            situationen. Därför är våra tjänster flexibla och anpassningsbara
            för att möta dina specifika behov. Vi arbetar alltid med respekt och
            omsorg för att underlätta denna svåra tid för de efterlevande.
          </p>
        </div>
        <div
          style={{
            margin: "1.2rem 0.5rem",
            background: "#bbe3f7",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <h4 style={{ marginLeft: "0.5rem" }}>Välutbildad personal</h4>
          <p
            style={{
              maxWidth: "500px",
              fontSize: "0.9rem",
              marginLeft: "0.5rem"
            }}
          >
            {/* {text1} */}
            Vår erfarna personal är välutbildad och kunnig inom alla aspekter av
            hantering av dödsbo. Vi har de verktyg och resurser som krävs för
            att göra processen så smidig och effektiv som möjligt. Oavsett om du
            behöver hjälp med{" "}
            <a
              href="/vardera-dodsbo"
              title="värdera dödsbo"
              style={{ color: "inherit" }}
            >
              värdering av egendom
            </a>{" "}
            ,{" "}
            <a
              href="/bortforsling-dodsbo"
              title="bortforsling av dödsbo"
              style={{ color: "inherit" }}
            >
              bortforsling av skräp
            </a>{" "}
            eller{" "}
            <a
              href="/flyttstadning"
              title="flyttstädning  av dödsbo, hushåll, hus och hem"
              style={{ color: "inherit" }}
            >
              städning av fastigheter
            </a>{" "}
            , så kan vi hjälpa till. Vi erbjuder konkurrenskraftiga priser och
            högkvalitativ service för att se till att varje kund får den hjälp
            de behöver.
          </p>
        </div>
      </section>
    </section>
  );
};

export default MainComp;
