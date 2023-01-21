import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import truck from "../utils/animation/flyttfirma-tommadodsbo.json";
import {
  Grid,
  Typography,
  makeStyles,
  Container,
  Button,
  colors
} from "@material-ui/core";
import {
  ArrowForwardIos,
  House,
  LocalShipping,
  Weekend,
  Delete,
  MonetizationOn,
  ShoppingCart,
  Warning,
  Autorenew
} from "@material-ui/icons";

const services = [
  {
    title: "Värdera dödsbo",
    icon: <House />,
    path: "/vardera-dodsbo"
  },
  {
    title: "Tömning",
    icon: <LocalShipping />,
    path: "/tomma-dodsbo"
  },
  {
    title: "Bortforsling",
    icon: <Weekend />,
    path: "/bortforsling-dodsbo"
  },
  {
    title: "Städning",
    icon: <Delete />,
    path: "/flyttstadning"
  },
  {
    title: "Uppköp dödsbo",
    icon: <ShoppingCart />,
    path: "uppkop-av-dodsbo"
  },
  {
    title: "Sälja dödsbo",
    icon: <MonetizationOn />,
    path: "/salja-dodsbo/salja-dodsbo"
  },
  {
    title: "Sanera dödsbo",
    icon: <Warning />,
    path: "/sanera-dodsbo"
  },
  {
    title: "Flytta",
    icon: <Autorenew />,
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
    background: "#0369a1",
    color: "white",
    border: "none",
    width: "6rem",
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
      </section>
      <section>
        <LottieBooking lotti={truck} height={200} width={200} />
      </section>
      <section className={classes.services}>
        {services?.map((service, i) => {
          return (
            <div key={i} className={classes.btnContainer}>
              {service?.icon}
              <h5 className={classes.btntitle}>{service.title}</h5>
              <button variant="contained" className={classes.btn}>
                <a
                  href={service.path}
                  title={service.title}
                  className={classes.btn}
                >
                  <p style={{ fontSize: "0.9rem", marginRight: "0.2rem" }}>
                    Välj
                  </p>
                  <ArrowForwardIos
                    style={{ fontSize: "0.9rem", marginLeft: "0.1rem" }}
                  />
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
