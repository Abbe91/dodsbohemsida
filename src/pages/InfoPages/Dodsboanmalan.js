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
const Dodsboanmalan = () => {
  const classes = useStyles();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Så här gör du en smidig dödsboanmälan - Enkel guide och tips från
          experterna
        </title>
        <meta
          name="description"
          content="Behöver du hjälp med att göra en dödsboanmälan? Låt våra experter guida dig genom hela processen."
        />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://dodsbojouren.com/dodsboanmalan"
        />
      </Helmet>
      <section className={classes.content}>
        <h2 style={{ margin: "1rem 0" }}>Dödsboanmälan</h2>
        <h4 className={classes.h4}>
          Dödsboanmälan i stället för en bouppteckning
        </h4>

        <p>
          Ibland kan en dödsboanmälan ersätta en bouppteckning. Det är personen
          som har ansvaret för att se till att en bouppteckning förrättas som
          kan ta initiativ till att en dödsboanmälan upprättas. Det finns ingen
          skyldighet att utnyttja möjligheten. Man kan alltid välja att förrätta
          en bouppteckning i stället för att göra en dödsboanmälan. Att
          socialnämnden redan har gjort en dödsboanmälan och lämnat den till
          Skatteverket hindrar inte att en bouppteckning senare förrättas och
          registreras av Skatteverket.
        </p>
        <h4 className={classes.h4}>När kan man göra en dödsboanmälan?</h4>
        <p>
          Man kan göra en dödsboanmälan om den avlidnas tillgångar inte räcker
          till mer än begravningskostnader och andra utgifter med anledning av
          dödsfallet. Om den avlidna var gift räknar man även med hens
          eventuella andel i den efterlevande makens eller makans giftorättsgods
          till tillgångarna (20 kap. 1 § andra stycket och 8 a § första stycket
          ÄB).
        </p>
        <h4 className={classes.h4}>När kan man inte göra en dödsboanmälan?</h4>
        <p>
          En dödsboanmälan kan inte göras om tillgångarna överstiger kostnaderna
          för begravning m.m., eller om den avlidna ägde fast egendom eller
          tomträtt (20 kap. 8 a § första stycket ÄB).{" "}
        </p>
        <h4 className={classes.h4}>Socialnämnden gör en dödsboanmälan</h4>
        <p>
          Det är bara kommunernas socialnämnder som får göra en dödsboanmälan
          (20 kap. 8 a § första stycket ÄB). Det är socialnämnden som ska pröva
          om det finns förutsättningar för att göra en dödsboanmälan. Uppgifter
          som måste stå i en dödsboanmälan Socialnämnden ska anteckna den
          avlidnas namn personnummer adress dödsdag. I en dödsboanmälan ska även
          dödsbo­delägarnas namn och adresser anges om socialnämnden kan ta fram
          dessa uppgifter utan att det tar för lång tid (20 kap. 8 a § andra
          stycket ÄB). En behörig företrädare för socialnämnden ska intyga att
          det finns förutsättningar för att göra en dödsboanmälan och skriva
          under dödsboanmälan.
        </p>
        <span>
          Tidsfrist En dödsboanmälan bör göras inom två månader från dödsfallet
          (20 kap. 8 a § andra stycket ÄB). Socialnämnden kan göra en
          dödsboanmälan även efter denna tid, om den anser att det är lämpligt.
        </span>
        <h4 className={classes.h4}>
          Skatteverket tar emot och förvarar dödsboanmälningar
        </h4>
        <p>
          Skatteverket tar emot och förvarar dödsboanmälningar och lämnar ut
          kopior av dessa om någon begär det. Skatteverket ska inte granska
          innehållet i en dödsboanmälan. Till skillnad från vad som gäller för
          bouppteckningar fattar inte Skatteverket något beslut om att
          registrera en dödsboanmälan. Om inte någon behörig person på
          socialnämnden har skrivit under en dödsboanmälan finns ingen formell
          dödsboanmälan. Fram till dess att en korrekt dödsboanmälan lämnats in
          till Skatteverket står bouppteckningsskyldigheten kvar. Om en
          socialnämnd upptäcker att det finns ett fel i en dödsboanmälan och
          skickar in en ny dödsboanmälan ska Skatteverket även ta emot den nya
          för förvaring.
        </p>
        <h4 className={classes.h4}>Bouppteckning efter en dödsboanmälan</h4>
        <p>
          I vissa fall ska en boupptecknings­förrättning hållas och en
          bouppteckning lämnas till Skatteverket trots att en dödsboanmälan har
          gjorts (20 kap. 8 a § tredje stycket ÄB). Så ska ske om någon av
          följande förutsättningar är uppfyllda: En ny tillgång blir känd och
          den medför att förutsättningarna för en dödsboanmälan inte längre
          finns. En dödsbodelägare eller någon annan vars rätt kan påverkas av
          att en bouppteckning inte förrättas begär att en bouppteckning ska
          förrättas och ställer samtidigt en säkerhet för
          bouppteckningskostnaderna. Begäran om bouppteckning En begäran om en
          bouppteckning av en dödsbodelägare eller någon annan vars rätt kan
          påverkas om en bouppteckning inte förrättas bör i första hand riktas
          mot den som efter en sådan begäran kan komma att bli ansvarig för att
          en bouppteckning görs. Om det inte skulle leda till något resultat kan
          den som vill att en bouppteckning ska förrättas anmäla detta till
          Skatteverket som då ska pröva om det finns en bouppteckningsskyldighet
          och i sådant fall bevaka att en bouppteckning lämnas in. Skatteverket
          ska pröva om den som framställer en begäran är behörig att begära
          bouppteckning och om Skatteverket kan godta den ställda säkerheten. Om
          den som anmäler är en dödsbodelägare är hen i princip alltid behörig.
          Om Skatteverket finner att en bouppteckning ska förrättas får verket
          från fall till fall bedöma vilken åtgärd som ska vidtas.
        </p>
        <div>
          <h5 style={{ marginTop: "1rem" }}>Data hämtad från skatteverket</h5>
          <a
            rel="noreferrer"
            href="https://www4.skatteverket.se/rattsligvagledning/edition/2022.1/340725.html"
            title="Dödsboanmälan"
            target="_blank"
            id="Dödsboanmälan"
            style={{
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: "bold",
              marginBottom: "2rem"
            }}
          >
            Läs mer här om Dödsboanmälan på Skatteverkets hemsida
          </a>
        </div>
        <Link to="/">
          <button className={classes.btn}>Tiillbaka till startsidan</button>
        </Link>
      </section>
    </div>
  );
};

export default Dodsboanmalan;
