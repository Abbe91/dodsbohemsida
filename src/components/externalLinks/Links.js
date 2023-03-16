import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    color: "black",
    marginTop: "4rem",
    width: "80%",
    textAlign: "center"
  },
  links: {
    color: "#0369a1",
    borderBottom: "1px solid black",
    fontSize: "0.8rem"
  },

  container: {
    marginTop: "0.5rem",
    "&:hover": {
      fontWeight: "bold"
    }
  }
});
const urls = [
  {
    path: "https://www.efterlevandeguiden.se/att-borja-med/skota-ett-dodsbo.html",
    title: "Sköta ett dödsbo"
  },
  {
    path: "https://cityselfstorage.se/blogg/tomma-dodsbo/",
    title: "Tips för underlätta processen med att tömma ett dödsbo"
  },
  {
    path: "https://www.konsumenternas.se/livssituationer/var-i-livet-befinner-du-dig/ta-hand-om-ett-dodsbo/",
    title: "Ta hand om ett dödsbo"
  },
  {
    path: "https://lavendla.se/juridik/familjeratt/vad-ar-ett-dodsbo/",
    title: "Vem har rätt att gå in i ett dödsbo?"
  }
];
const Links = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p style={{ fontSize: "0.8rem", opacity: "0.75" }}>
        Bra länkar och information kring dödsboet
      </p>
      {urls?.map((url, i) => (
        <div key={i} className={classes.container}>
          <a
            href={url.path}
            target="_blank"
            className={classes.links}
            rel="noreferrer"
          >
            {url.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
