import React from "react";
import { Grid, Card, Typography, makeStyles, Box } from "@material-ui/core";
import LottieBooking from "../LottieAnimation/LottieBooking";
import clock from "../utils/animation/dodsbo-goteborg-dodsbojouren.json";

const useStyles = makeStyles({
  divider: {
    width: "120px",
    height: "2px",
    background: "#0369a1",
    margin: "1rem 0.2rem"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "1px",
    lineHeight: "35px",
    textAlign: "center",
    marginBottom: "2rem"
  }
});
const Oppetider = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="oppetider">
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        Öppetider
      </Typography>
      <Box className={classes.divider}></Box>
      <ul>
        <li>Måndag 07:00-20:00</li>
        <li>Tisdag 07:00-20:00</li>
        <li>Onsdag 07:00-20:00</li>
        <li>Torsdag 07:00-20:00</li>
        <li>Fredag 07:00-20:00</li>
        <li>Lördag 10:00-20:00</li>
        <li>Söndag 10:00-20:00</li>
      </ul>
      <LottieBooking lotti={clock} height={300} width={300} />
    </div>
  );
};

export default Oppetider;
