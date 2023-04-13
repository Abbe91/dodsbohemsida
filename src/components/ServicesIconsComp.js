import React from "react";
import { makeStyles } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

const services = [
  {
    title: "Värdera dödsbo",

    path: "/vardera-dodsbo"
  },
  {
    title: "Tömning",

    path: "/tommer-hushall"
  },
  {
    title: "Bortforsling",
    path: "/bortforsling"
  },
  {
    title: "Städning",

    path: "/flyttstadning"
  },
  {
    title: "Uppköp dödsbo",

    path: "uppkop-av-dodsbo"
  },
  {
    title: "Sälja dödsbo",

    path: "/salja-dodsbo/salja-dodsbo"
  },
  {
    title: "Sanera dödsbo",

    path: "/sanera-dodsbo"
  },
  {
    title: "Flytta",
    path: "/bohagsflytt"
  }
];

const useStyles = makeStyles({
  services: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  },
  btn: {
    background: "#e3c148",
    color: "white",
    border: "none",
    fontSize: "0.7rem",
    width: "6.5rem",
    height: "2rem",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    "&:hover": {
      opacity: 0.9
    }
  },
  btnContainer: {
    textAlign: "center",
    margin: "1.2rem 0.2rem"
  },
  root: {
    padding: "2rem"
  },
  btntitle: {
    margin: "0.2rem 0"
  }
});
const ServicesIconsComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <section
        style={{ textAlign: "center", margin: "1rem 0", lineHeight: "26px" }}
      >
        <h2 className={classes.title}>Vad behöver du hjälp med?</h2>
        <p
          style={{
            maxWidth: window.innerWidth > 740 ? "70%" : "360px",
            margin: "0.5rem auto",
            fontSize: "0.8rem"
          }}
        >
          Vi förstår att det kan vara en känslomässigt svår och stressig tid när
          man behöver ta hand om ett dödsbo eller ett hushåll som behöver
          tömmas. Vår målsättning är att göra hela processen så smidig och
          stressfri som möjligt för dig. Vi har lång erfarenhet och är experter
          på att hantera alla slags situationer när det gäller dödsbon och
          hushåll.
        </p>
      </section>

      <section className={classes.services}>
        {services?.map((service, i) => {
          return (
            <div key={i} className={classes.btnContainer}>
              <button variant="contained" className={classes.btn}>
                <a
                  href={service.path}
                  title={service.title}
                  className={classes.btn}
                  style={{ color: "white" }}
                >
                  {service.title}
                </a>
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ServicesIconsComp;
