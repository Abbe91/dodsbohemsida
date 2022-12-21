import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "2rem 0",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column"
    }
  },
  rund: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1.5px solid black",
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "50%",
    "@media screen and (max-width: 800px)": {
      marginTop: "1rem"
    }
  }
});

const Arbetsprocessen = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        textAlign: "center",
        margin: "2rem 0",
        background: "rgb(248, 247, 247)",
        height: "650px",
        padding: "2rem"
      }}
      className={classes.container}
    >
      <h2 style={{ color: "#0369a1" }}>SÅ FUNGERAR DET</h2>
      <div className={classes.root}>
        <section
          style={{
            width: "33%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div className={classes.rund}>
            <p>1</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}> VÄRDERING:</strong> Vi
            erbjuder en kostnadsfri värdering av hemmets föremål för att kunna
            ge ett fast pris för själva tömningen av boet.
          </p>
        </section>
        <section
          style={{
            width: "33%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div className={classes.rund}>
            <p>2</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}> BETALNING: </strong>Är
            föremålen av högre värde än kostnaderna för arbetet så kommer vi att
            betala dig som kund för att få tömma dödsboet.
          </p>
        </section>
        <section
          style={{
            width: "33%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div className={classes.rund}>
            <p>3</p>
          </div>
          <p style={{ width: "300px", marginTop: "1rem" }}>
            <strong style={{ color: "#0369a1" }}> STÄDNING:</strong> Behöver du
            även hjälp med att få boet städat inför flytten så erbjuder vi även
            den tjänsten för alla våra dödsbon.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
