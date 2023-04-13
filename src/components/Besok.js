import React from "react";
import image2 from "../utils/images/dödsbo-värdering.png";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    background: "#e3c148",
    justifyContent: "space-evenly",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    "@media screen and (max-width: 800px)": {
      flexDirection: "column"
    }
  },
  para: {
    margin: "0.5rem 0",
    letterSpacing: "1px",
    lineHeight: "27px",
    maxWidth: "500px",
    "@media screen and (max-width: 800px)": {
      fontSize: "0.9rem"
    }
  }
});
const Besok = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section style={{ margin: "1rem 0" }}>
        <h2 style={{ color: "white" }}>Kostnadsfri värdering</h2>
        <div
          style={{
            margin: "0.7rem auto",
            width: "45%",
            background: "#0369a1",
            height: "1px"
          }}
        ></div>
        <p className={classes.para}>
          Vi erbjuder <strong>kostnadsfri</strong>{" "}
          <a
            href="/vardering-av-dodsbo"
            title="värdering av dödsbo"
            style={{ color: "white" }}
          >
            värdering av dödsbo
          </a>{" "}
          och bohag inom Göteborg, Kungälv, Ale, Stenungsund och Tjörn. Vi har
          säljkanalerna och egen butiker. Dödsbo Jouren är ett företag som
          tänker miljösmart och på återanvändning. Vi skänker till
          behandlingshem, olika typer av boenden, kyrkor,{" "}
          <strong>hjälporganisationer</strong> och till behövande. Vi har valt
          att skänka 100 kronor per uppdrag till olika hjälporganisationer.
          Efter att vi har{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "white" }}
            title="tömma dödsbo"
          >
            tömma dödsboet
          </a>{" "}
          inklusive förråd, källare och övriga utrymmen så gör vi en noggrann{" "}
          <a
            href="/flyttstadning-av-bohag"
            title="flyttstädning av bohag"
            style={{ color: "white" }}
          >
            flyttstädning av bohaget
          </a>{" "}
          , dödsboet eller huset. Söker du en uppköpare av dödsbon kan du vända
          dig till oss.
        </p>
      </section>
      <section style={{ margin: "1rem 0", borderRadius: "50%" }}>
        <img src={image2} className="besok-img" loading="lazy" alt="house" />
      </section>
    </div>
  );
};

export default Besok;
