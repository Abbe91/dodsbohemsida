import React from "react";
import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    height: "400px",
    width: "100%"
  }
});

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
      <div>image 1</div>
      <div>image 2</div>
      <div>image 3</div>
      <div>image 4</div>
      <div>image 5</div>
      <div>image 6</div>
    </div>
  );
};

export default ImagesServicesComponent;
