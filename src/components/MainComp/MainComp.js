import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import "./MainComp.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch } from "react-redux";
import Faq from "../faq/Faq";
import { MdArrowForwardIos } from "react-icons/md";
import { setServices } from "../../redux-toolkit/snabbkollenSlice";
const MainComp = ({ subTitle5, text2, city, formTitle }) => {
  const Divider = lazy(() => import("./Divider"));
  const Arbetsprocessen = lazy(() => import("../Arbetsprocessen"));
  const MainUseComp = lazy(() => import("./MainUseComp"));
  const Helhetslosningdodsbo = lazy(() => import("../Helhetslosningdodsbo"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="root">
      <div className="main-top-main-small">
        <h4
          style={{
            margin: "0rem 0.5rem",
            color: "white",
            fontSize: "1.6rem",
            padding: "0.5rem",
            borderRadius: "3px",
            maxWidth: "330px"
          }}
        >
          Bästa alternativet för dig, miljön och plånboken
        </h4>

        <div
          style={{
            width: "330px",
            display: "flex",
            alignItems: "center",
            position: "relative"
          }}
        >
          <Autocomplete
            onChange={(e) => {
              e.preventDefault();
              dispatch(setServices(e.target.innerText));
              navigate("/forfragan");
            }}
            background="white"
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={servicesArray.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                style={{
                  backgroundColor: "white",
                  width: "330px",
                  height: "3rem",
                  borderRadius: "5px",
                  padding: "0.5rem"
                }}
                {...params}
                placeholder="Vad behöver du hjälp med?"
                margin="normal"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  disableUnderline: true
                }}
              />
            )}
          />
          <button
            onClick={() => navigate("/forfragan")}
            style={{
              position: "absolute",
              right: "2%",
              background: "#e3c148",
              border: "none",
              color: "black",
              height: "2.2rem",
              borderRadius: "3px",
              top: "30%",
              width: "3rem"
            }}
          >
            <MdArrowForwardIos style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
      <MainUseComp formTitle={formTitle} />
      <Divider />
      <Arbetsprocessen />
      <Faq city={city} />
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
            background: "#e3c148",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            color: "white",
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
          id="wecando"
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
            background: "#e3c148",
            color: "white",
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
      <Helhetslosningdodsbo />
    </section>
  );
};

export default MainComp;
const servicesArray = [
  {
    title: "Bortforsling"
  },
  {
    title: "Tömning"
  },
  {
    title: "Värdering"
  },
  {
    title: "Städa"
  },
  {
    title: "Flyttstäda"
  },
  {
    title: "Flytta"
  },
  {
    title: "Återvinning"
  },
  {
    title: "Avfallshantering"
  },
  {
    title: "Uppköp av lösöre"
  },
  {
    title: "Uppköp av dödsbo"
  }
];
