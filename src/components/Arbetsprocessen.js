import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "3rem",
    flexWrap: "wrap",
    "@media screen and (max-width: 1000px)": {
      flexDirection: "column"
    }
  },
  rund: {
    width: "2.6rem",
    height: "2.6rem",
    margin: "0 auto",
    border: "1px solid black",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Arbetsprocessen = () => {
  const classes = useStyles();
  return (
    <div>
      <h2 style={{ color: "#0369a1", textAlign: "center" }}>SÅ FUNGERAR DET</h2>
      <div className={classes.root}>
        <section>
          <div className={classes.rund}>
            <p>1</p>
          </div>
          <p style={{ width: "300px", marginTop: "0.5rem" }}>
            <strong style={{ color: "#0369a1" }}> VÄRDERING:</strong> Vi
            erbjuder en kostnadsfri värdering av hemmets föremål, dödsboet eller
            bohaget. Detta är för att kunna ge er ett fast pris för själva{" "}
            <a
              href="/tomma-dodsbo"
              style={{ color: "#0369a1" }}
              title="tömma dödsbo"
            >
              tömningen av dödsboet
            </a>{" "}
            och så att vi även kan ge er ett pris för uppköpet av lösöret vi är
            intresserade av att köpa upp.
          </p>
        </section>
        <section>
          <div className={classes.rund} style={{ marginTop: "0.5rem" }}>
            <p>2</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}>
              Tömning & Bortforsling:
            </strong>{" "}
            Vi kommer den dagen vi bestämt tillsammans för att börja sortera i{" "}
            <a href="/dodsboet" style={{ color: "#0369a1" }} title="dödsboet">
              dödsboet
            </a>{" "}
            eller bohaget. När vi sorterat klart börjar vi forsla bort det som
            vi kan skänka eller det som skall gå till tippen. Efter detta tar vi
            då det lösöre vi köpt upp som vi kör till vår butik eller lager.
          </p>
        </section>
        <section>
          <div className={classes.rund} style={{ marginTop: "0.5rem" }}>
            <p>3</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}> STÄDNING:</strong> Behöver du
            även hjälp med att få dödsboet eller bohaget städat så erbjuder vi
            även den tjänsten för alla våra dödsbon och bohag. Vi gör även
            saneringar som luktsaneringar av rökande eller annat.
          </p>
        </section>
        <section>
          <div className={classes.rund}>
            <p>4</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}> BETALNING: </strong>Är
            föremålen/lösöret av högre värde än kostnaderna för arbetet så
            kommer vi att betala dig som kund för att få{" "}
            <a
              href="/tomma-dodsbo"
              style={{ color: "#0369a1" }}
              title="tömma dödsbo"
            >
              tömma dödsboet
            </a>
            . Eller så kan det även bli att vi drar av summan mot det ni skall
            betala oss.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
