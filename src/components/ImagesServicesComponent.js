import React from "react";
import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({});
const ImagesServicesComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dödsbo köpes, Dödsbo säljes, Städning av dödsbo, Företag köper bohag,
          Tömning av dödsbo, Boupptäckning
        </title>
        <meta
          name="description"
          content=" Dödsbo köpes, Dödsbo säljes, Städning av dödsbo, Företag köper bohag,
          Tömning av dödsbo, Boupptäckning"
        />
      </Helmet>
    </div>
  );
};

export default ImagesServicesComponent;
