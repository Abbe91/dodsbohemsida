import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import dodsbokopes from "../utils/images/seoimages/dödsbo-köpes.jpg";
import dodsbosaljes from "../utils/images/seoimages/dödsbo-säljes.jpg";
import dodsboanmalan from "../utils/images/seoimages/dödsboanmälan.jpg";
import foretagkoperbohag from "../utils/images/seoimages/företag-köper-bohag.jpg";
import stadningavdodsbo from "../utils/images/seoimages/städning-av-dödsbo.jpg";
import tomningavdodsbo from "../utils/images/seoimages/tömning-av-dödsbo.jpg";
const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    height: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    alignItems: "center"
  },
  imageContainer: {
    margin: "0.5rem 0.5rem"
  },
  btn: {
    width: "100%",
    height: "2rem",
    background: "#0369a1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    margin: "0.5rem auto",
    padding: "0.3rem"
  },
  images: {
    backgroundPosition: "center",
    objectFit: "cover"
  }
});
const images = [
  { url: dodsbokopes, text: "Dödsbo köpes", path: "/dodsbo-kopes" },
  { url: dodsbosaljes, text: "Dödsbo säljes", path: "/salja-dodsbo" },
  { url: dodsboanmalan, text: "Dödsboanmälan", path: "/dodsboanmalan" },
  {
    url: foretagkoperbohag,
    text: "Företag köper bohag",
    path: "/foretag-som-koper-bohag"
  },
  {
    url: stadningavdodsbo,
    text: "Städning av dödsbo",
    path: "/stadning-av-dodsbo"
  },
  {
    url: tomningavdodsbo,
    text: "Tömning av dödsbo",
    path: "/tomning-av-dodsbo"
  }
];
const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dödsbo köpes, Dödsbo säljes, Städning av dödsbo, Företag köper bohag,
          Tömning av dödsbo, Boupptäckning, Dödsbo uppköpare, Dödsbo firma
        </title>
        <meta
          name="description"
          content="Dödsbo köpes, Dödsbo säljes, Städning av dödsbo, Företag köper bohag,
          Tömning av dödsbo, Boupptäckning, Dödsbo uppköpare, Dödsbo firma"
        />
      </Helmet>
      {images?.map((image, i) => (
        <div key={i} className={classes.imageContainer}>
          <img
            src={image.url}
            alt="dödsbo köpes, dödsbo säljes, dödsboanmälan,företag köper bohag, städning av dödsbo, tömning av dödsbo"
            style={{ height: "200px", width: "200px", borderRadius: "5px" }}
            className={classes.images}
          />

          <a href={image.path} title={image.text}>
            <button className={classes.btn}>{image.text}</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImagesServicesComponent;
