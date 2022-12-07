import React from "react";
import { makeStyles, Card } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    height: "400px",
    margin: "1rem 0"
  }
});
const Recensioner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.conentContainer}>
        <h4>Längst erfarenhet</h4>
      </section>
      <section className={classes.reviews}>
        <h4>Revoews</h4>
      </section>
    </div>
  );
};

export default Recensioner;
