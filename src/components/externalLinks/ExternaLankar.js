import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },

  links: {
    color: "#0369a1",
    fontSize: "0.9rem"
  }
});
const ExternaLankar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <a
        href="https://xn--svenskalnkar-ncb.com/foretag-tjanster"
        target="_blank"
        title="svenskalänkar"
        className={classes.links}
      >
        Svenskalänkar.com
      </a>
      <a
        href="http://www.lankkatalogen.se"
        id="RC49D4"
        title="Länkguide"
        target="_blank"
        className={classes.links}
      >
        Svenska Länkkatalogen - länkguide
      </a>
    </div>
  );
};

export default ExternaLankar;
