import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DeleteIcon from "@material-ui/icons/Delete";
import WarningIcon from "@material-ui/icons/Warning";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FindInPageIcon from "@material-ui/icons/FindInPage";
const useStyles = makeStyles({
  root: {
    height: "460px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    alignItems: "center",
    textAlign: "center",
    margin: "3rem 0",
    transition: "all 0.3s linear"
  },
  card: {
    height: "380px",
    width: "400px",
    margin: "0.5rem 0.5rem",
    textAlign: "center",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s linear",
    boxShadow:
      "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
  },
  text: {
    maxWidth: "280px",
    marginLeft: "1rem",
    fontSize: "0.83rem",
    lineHeight: "24px"
  },
  atag: {
    color: "#e3c148",
    fontSize: "0.9rem",
    fontWeight: "bold"
  }
});
const services = [
  {
    title: "Tömma hus och lägenheter",
    path: "tomma-bohag",
    text: "Vi tömmer lägenheteter, hus, dödsbon, förråd och kontor. Dödsbo Jouren tar hand om hela bohag, dödsbo och hushåll, även delar av hem om någon flyttat till ett serviceboende eller liknade. Behöver du hjälp med att tömma ett hus, lägenhet, dödsbo eller kontor i Göteborg? Då är vi på Dödsbo Jouren det självklara valet.",
    icon: <HomeWorkIcon />
  },
  {
    title: "Bortforsling av bohag och dödsbo",
    path: "bortforsling-dodsbo",
    text: "Vi erbjuder hjälp med bortforsling av möbler och skräp och vi kan oftast hjälpa dig redan samma dag. Du behöver bara visa oss det du vill forsla bort så vi hjälper vi dig. Vi utför dagligen bortforsling av möbler men det våra kunder oftast behöver hjälp med är till exempel bortforsling av gammal säng, bortforsling av soffa, bortforsling av vitvaror, bortforsling av tvättmaskin med mera.",
    icon: <LocalShippingIcon />
  },
  {
    title: "Städning av dödsbo och Bohag",
    path: "/stadning-av-dodsbo",
    text: "Städning av dödsbo eller bohag som flyttstäd är krävande och tar tid. Så låt oss på Dödsbo Jouren sköta den biten åt dig för en bra peng. Vi erbjuder städgaranti på alla våra städtjänster. Med så många års erfarenhet av olika typer av städningar så är vi det självklara valet för städning av dödsbon, lägenheter, hus och kontor. Vi ger dig prisgaranti.",
    icon: <DeleteIcon />
  },
  {
    title: "Sanering av dödsbo och bohag",
    path: "sanera-dodsbo",
    icon: <WarningIcon />,
    text: "Har du rökt inomhus eller att huset har odör? Då kan vi hjälpa dig med luktsanering av ditt dödsbo eller bohag. Vi kan hjälpa er med all typ av dödsbo och bohag sanering. Det rätt vanligt att vi sanerar dödsbon speciellt om det är en hyresbostad eller bostad som skall säljas. Tveka inte att kontakta oss om du har frågor kring sanering av dödsbon eller bohag."
  },
  {
    title: "Bohagsflyttar",
    path: "bohagsflytt",
    icon: <AllInboxIcon />,
    text: "Behöver du hjälp med flytt av ditt bohag? Vi utför dagligen privatflyttar i hela Västra Götaland med goda resultat och riktigt nöjda kunder. Oavsett vilka delar du behöver hjälp med under din flytt så finns erfarna och proffsiga personal på plats för att tillgodose dina behov. Vår tjänst bohagsflytt  vänder sig till både hus- och lägenhetsboende."
  },

  {
    title: "Uppköp av lösöre",
    path: "uppkop-av-dodsbo",
    icon: <MonetizationOnIcon />,
    text: "Har du lösöre som möbler, kläder, elektronik, serviser, tavlor eller annat så kan vi hjälpa dig med att köpa upp. Vi erbjuder kostnasdfri värdering av bohag, dödsbo och lösöre. Vi samarbetar med en rad auktionsfiror både fysiska och online där vi kan hjälpa dig att sälja lösöre av större värde. Ni kan också maila oss bilder på lösöre som vi kan kika på och ger er en offert."
  },
  {
    title: "Värdering av dödsbo",
    icon: <FindInPageIcon />,
    path: "vardera-dodsbo",
    text: "Vi erbjuder kostnadsfri värdering av dödsbo och bohag inom Göteborg, Kungälv, Ale, Stenungsund och Tjörn. Vi har säljkanalerna och egen butiker. Dödsbo Jouren är ett företag som tänker miljösmart och på återanvändning. Vi skänker till behandlingshem, olika typer av boenden, kyrkor, hjälporganisationer och till behövande."
  }
];

const SeoServiceComponent = () => {
  const classes = useStyles();
  const [active, setactive] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll("#element");
    elements.forEach((el) => {
      el.addEventListener("pointerover", (e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      });
    });
    elements.forEach((el) => {
      el.addEventListener("pointerleave", (e) => {
        e.currentTarget.style.transform = "scale(1)";
      });
    });
  });
  useEffect(() => {});
  return (
    <div className={classes.root}>
      {services.map((service, ind) => {
        return (
          <div
            key={ind}
            className={classes.card}
            style={{
              transform: ind === 0 && "scale(1.1)",
              marginRight: "1rem",
              marginLeft: "1rem"
            }}
            id="element"
          >
            {service.icon}
            <h5 style={{ width: "320px", color: "black", margin: "0.5rem 0" }}>
              {service.title}
            </h5>
            <p className={classes.text}>{service.text}</p>
            <a
              href={service.path}
              title={service.title}
              className={classes.atag}
            >
              Läs mer
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SeoServiceComponent;
