import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  linkContainer: {},
  links: {
    color: "#0369a1",
    fontSize: "0.9rem"
  }
});
const ExternaLankar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.linkContainer}>
        <a
          href="https://xn--svenskalnkar-ncb.com/foretag-tjanster"
          target="_blank"
          className={classes.links}
        >
          Svenskalänkar.com
        </a>
      </section>
    </div>
  );
};

export default ExternaLankar;
