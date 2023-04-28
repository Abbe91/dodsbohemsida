import React from "react";
import { makeStyles } from "@material-ui/core";
import dodsbokopes from "../utils/images/seoimages/dödsbo-köpes.jpg";
import dodsbosaljes from "../utils/images/seoimages/dödsbo-säljes.jpg";
import dodsboanmalan from "../utils/images/seoimages/dödsboanmälan.jpg";
import foretagkoperbohag from "../utils/images/seoimages/företag-köper-bohag.jpg";
import stadningavdodsbo from "../utils/images/seoimages/städning-av-dödsbo.jpg";
import tomningavdodsbo from "../utils/images/seoimages/tömning-av-dödsbo.jpg";
import varderadodsbo from "../utils/images/värdera-dödsbo.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const useStyles = makeStyles({
  root: {
    background: "white",
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
    background: "#e3c148",
    fontWeight: "bold",
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
  {
    url: varderadodsbo,
    text: "Värdera dödsbo",
    path: "/vardera-dodsbo"
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
  },
  { url: dodsbosaljes, text: "Dödsbo säljes", path: "/salja-dodsbo" },
  { url: dodsboanmalan, text: "Dödsboanmälan", path: "/dodsboanmalan" },
  {
    url: foretagkoperbohag,
    text: "Företag köper bohag",
    path: "/foretag-som-koper-bohag"
  }
];
const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {images?.map((image, i) => (
        <div key={i} className={classes.imageContainer}>
          <LazyLoadImage
            src={image.url}
            alt={image.text}
            height={"200px"}
            width={"200px"}
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
