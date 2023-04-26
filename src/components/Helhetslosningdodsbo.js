import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "3rem",
    flexDirection: "row",
    background: "rgb(227, 193, 72)",
    margin: "0 0.5rem",
    color: "white",
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
    color: "white",
    marginBottom: "0.5rem"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    background: "#e3c148",
    color: "white",
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
  const classes = useStyles();

  return (
    <div className={classes.root} id="helhet">
      <section className={classes.sec1}>
        <h2 className={classes.title}>Helhetslösning för dödsbo</h2>
        <p className={classes.paragraph}>
          Vår helhetslösning erbjuder professionell service för rensning,
          försäljning och avveckling av abonnemang samt juridisk rådgivning. Vi
          kan hjälpa till med allt som behövs för att göra processen smidig och
          enkel för dig. Kontakta oss idag för en kostnadsfri konsultation
          angående dödsbo och dödsbo tömning. Ett dödsbo är mer krävande än vad
          man tror. Idag ställs det ju många krav på sortering och avfall av
          dödsbon. Vi på Dödsbo Jouren tar hela ansvaret från att sortera{" "}
          <a href="/dodsboet" style={{ color: "white" }} title="dödsboet">
            dödsboet
          </a>
          , bortforsling av dödsboet,{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "white" }}
            title="tömma dödsbo"
          >
            tömning av dödsboet
          </a>{" "}
          och sedan städning av dödsboet. Vi gör även luktsaneringar av dödsbo
          eller röksanering av dödsbo. Behöver du hjälp med att tömma ett
          dödsbo?
        </p>
      </section>
    </div>
  );
};

export default Helhetslosningdodsbo;
