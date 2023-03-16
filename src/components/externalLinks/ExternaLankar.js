import React from "react";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
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
    fontSize: "0.9rem",
    marginBottom: "0.3rem"
  }
});
const ExternaLankar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section></section>
      <a
        rel="noreferrer"
        href="https://xn--svenskalnkar-ncb.com/foretag-tjanster"
        target="_blank"
        title="svenskalänkar"
        className={classes.links}
      >
        Svenskalänkar.com
      </a>
      <a
        rel="noreferrer"
        href="http://www.lankkatalogen.se"
        id="RC49D4"
        title="Länkguide"
        target="_blank"
        className={classes.links}
      >
        Svenska Länkkatalogen
      </a>
      <a
        rel="noreferrer"
        href="http://www.kvalitetskatalogen.se/"
        target="_blank"
        className={classes.links}
        title="kvalitetskatalogen"
      >
        Kvalitetskatalogen.se
      </a>
      <a
        rel="noreferrer"
        href="https://www.webbkatalog.se/"
        target="_blank"
        className={classes.links}
        title="webbkatalogen"
      >
        Webbkatalog.se
      </a>
      <a
        rel="noreferrer"
        href="http://www.f4.se"
        id="R300F19"
        target="_blank"
        className={classes.links}
        title="f4 länkkatalog"
      >
        F4.se - Länkkatalog
      </a>
      <a
        rel="noreferrer"
        href="http://www.mybuddys.se/"
        target="_blank"
        className={classes.links}
        title="mybuddys länkkatalog"
      >
        MyBuddys Länkkatalog
      </a>
    </div>
  );
};

export default ExternaLankar;
