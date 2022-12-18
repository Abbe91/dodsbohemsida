import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  content: {
    textAlign: "center",
    width: "80%",
    margin: "1rem auto"
  },
  h4: {
    margin: "0.5rem 0"
  },
  btn: {
    height: "2.4rem",
    width: "80%",
    background: "#0369a1",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem",
    borderRadius: "5px",
    margin: "1rem 0.5rem",
    letterSpacing: "1px",
    cursor: "pointer"
  }
});
const Dodsboet = () => {
  const classes = useStyles();
  return (
    <div>
      <section className={classes.content}>
        <h2 style={{ margin: "1rem 0" }}>Dödsboet</h2>
        <h4 className={classes.h4}>Avsluta dödsboet</h4>
        <p>
          Det finns flera saker du måste ha gjort innan ett dödsbo är
          skattemässigt avslutat. Ett dödsbo är skattemässigt avslutat när
          dödsboets alla tillgångar är skiftade, det vill säga uppdelade och
          överförda deklarationen är lämnad för sista gången över- eller
          underskott på skattekontot är reglerat, det vill säga när dödsboet har
          fått tillbaka eller betalat in skatten. Dödsboet brukar oftast bli
          avslutat året efter dödsfallet.
        </p>
        <h4 className={classes.h4}>Viktigt att föra över tillgångar</h4>
        <p>
          Du som har ärvt tillgångar måste föra över dem till dig själv. Annars
          finns risk att banker och andra skickar felaktiga kontrolluppgifter
          till Skatteverket. Har du till exempel ärvt bankmedel eller aktier
          måste du kontakta banken.
        </p>
        <h4 className={classes.h4}>Efterarvinge</h4>

        <div>
          <h5 style={{ marginTop: "1rem" }}>Data hämtad från skatteverket</h5>
          <a
            href="https://www.skatteverket.se/privat/folkbokforing/narenanhorigdor/avslutadodsboet.4.5a85666214dbad743ffecae.html"
            title="dödsboet"
            target="_blank"
            id="dödsboet"
            style={{
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "bold",
              marginBottom: "2rem"
            }}
          >
            Läs mer här om Dödsbodelägare på Skatteverkets hemsida
          </a>
        </div>
        <Link to="/">
          <button className={classes.btn}>Tiillbaka till startsidan</button>
        </Link>
      </section>
    </div>
  );
};

export default Dodsboet;
