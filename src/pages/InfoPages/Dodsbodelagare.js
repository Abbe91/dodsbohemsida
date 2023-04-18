import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const useStyles = makeStyles({
  content: {
    textAlign: "center",
    width: "80%",
    margin: "1rem auto"
  },
  h4: {
    margin: "0.5rem 0"
  },
  btn: {
    height: "2.4rem",
    width: "80%",
    background: "#0369a1",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem",
    borderRadius: "5px",
    margin: "1rem 0.5rem",
    letterSpacing: "1px",
    cursor: "pointer"
  }
});
const Dodsbodelagare = () => {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dödsbodelägarens guide till en smidig fördelning - Experttips och
          rådgivning
        </title>
        <meta
          name="description"
          content="Som dödsbodelägare kan fördelningen av tillgångar och skulder vara en utmaning. Låt våra experter hjälpa dig att navigera genom hela processen."
        />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://dodsbojouren.com/dodsbodelagare"
        />
      </Helmet>
      <section className={classes.content}>
        <h2 style={{ margin: "1rem 0" }}>Dödsbodelägare</h2>
        <h4 className={classes.h4}>Dödsbodelägare och efterarvingar</h4>
        <p>
          Den avlidnas arvingar kallas för dödsbodelägare. Dödsbodelägarkretsen
          kan i vissa fall ändras. Om någon ska ärva först efter en efterlevande
          make eller maka kallas hen för efterarvinge. Man kan även bli
          efterarvinge genom ett testamente.
        </p>
        <h4 className={classes.h4}>Dödsbodelägare</h4>
        <p>
          En efterlevande make, maka eller sambo, legala arvingar och
          universella testamentstagare är dödsbodelägare. Även den tidigare
          avlidna maken eller makans efterarvingar är dödsbodelägare i den sist
          avlidnas bouppteckning (18 kap.1 § tredje stycket ÄB). Om bodelningen
          har gjorts efter arvlåtarens död eller om någon bodelning inte ska
          göras är den efterlevande maken, makan eller sambon dödsbodelägare
          endast om hen är legal arvinge eller universell testamentstagare. Om
          ett mål om äktenskapsskillnad pågår är den efterlevande maken eller
          makan delägare i boet. I vissa fall kan en frånskild make eller maka
          eller sambo vara delägare i boet om någon bodelning inte har skett.
          Vem eller vilka som är dödsbodelägare påverkar vilka som ska kallas
          till förrättningen. En legatarie är inte dödsbodelägare. Förändringar
          i dödsbodelägarkretsen Vilka som är dödsbodelägare, d.v.s. ingår i
          dödsbodelägarkretsen, kan förändras efter dödsfallet och påverka vilka
          som ska kallas till förrättningen.
        </p>
        <h4 className={classes.h4}>Efterarvinge</h4>
        <p>
          Ett arv som tillfaller en arvinge enligt lag eller genom testamente
          kan under vissa förutsättningar omfattas av en rätt till efterarv. Om
          någon ska ärva först efter en efterlevande makes eller makas död är
          hen efterarvinge i den först avlidna makens dödsbo. Den som enligt ett
          testamente får en rätt till efterarv är efterarvinge i testators
          dödsbo (18 kap. 1 § tredje stycket ÄB).
        </p>

        <div>
          <h5 style={{ marginTop: "1rem" }}>Data hämtad från skatteverket</h5>
          <a
            rel="noreferrer"
            href="https://www4.skatteverket.se/rattsligvagledning/edition/2021.7/340698.html"
            title="dödsbodelägare"
            target="_blank"
            id="dödsbodelägare"
            style={{
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "bold",
              marginBottom: "2rem"
            }}
          >
            Läs mer här om Dödsbodelägare på Skatteverkets hemsida
          </a>
        </div>
        <Link to="/">
          <button className={classes.btn}>Tiillbaka till startsidan</button>
        </Link>
      </section>
    </div>
  );
};

export default Dodsbodelagare;
