import React, { useEffect, useState } from "react";
import "./Erbjuder.css";

const Erbjuder = ({ city }) => {
  return (
    <div className="erbjuder" id="erbjuder-cont">
      <div id="tomma">
        <h4>Tömma dödsbo {city ? `i ${city}` : ""}</h4>
        <p>
          Om du behöver hjälp med att tömma ett dödsbo eller hushåll
          {city ? ` i ${city}` : ""}, kan du lita på vårt professionella och
          pålitliga team. Vi erbjuder en komplett service för att underlätta för
          dig i en svår tid. Vi tar hand om allt från sortering och bortforsling
          av möbler och prylar till städning av bostaden efteråt. Vårt mål är
          att göra processen så smidig och stressfri som möjligt för dig. Vi
          arbetar med respekt för både egendom och känslor och ger alltid vårt
          bästa för att uppfylla dina behov och önskemål. Kontakta oss idag för
          att få en kostnadsfri offert och ta det första steget mot en enklare
          process.
        </p>
      </div>
      <div id="stada-dodsbo">
        <h4>Städa dödsbo {city ? `i ${city}` : ""}</h4>
        <p>
          Behöver du hjälp med att städa ett dödsbo eller hushåll{" "}
          {city ? `i ${city}` : ""}? Vi på Dödsbo Jouren erbjuder en
          professionell och pålitlig städtjänst för att underlätta för dig i en
          svår tid. Vårt erfarna och kompetenta team tar hand om allt från
          grundlig rengöring av bostaden till bortforsling av skräp och sopor.
          Vi ser till att arbetet utförs smidigt och effektivt, med respekt för
          både egendom och känslor. Vi förstår vikten av att lämna en ren och
          fräsch bostad efter oss och strävar alltid efter att uppfylla dina
          förväntningar. Kontakta oss idag för att få en kostnadsfri offert och
          ta det första steget mot en renare och mer organiserad bostad.
        </p>
      </div>
      <div id="vardera-dodsbo">
        <h4>Värdera dödsbo {city ? `i ${city}` : ""} </h4>
        <p>
          Om du behöver värdera ett dödsbo eller lösöre {"  "}
          {city ? `i ${city}` : ""}, kan vi på Dödsbo Jouren hjälpa dig. Vi
          erbjuder en professionell och pålitlig värderingstjänst för att hjälpa
          dig att fastställa värdet på din egendom. Vårt erfarna team har
          omfattande kunskap om marknadspriser och kan säkerställa en rättvis
          värdering. Vi tar hänsyn till egendomens skick och andra faktorer som
          kan påverka dess värde. Vårt mål är att ge dig en klar och detaljerad
          rapport om värderingen så att du kan fatta informerade beslut.
          Kontakta oss idag för att få en kostnadsfri offert och ta det första
          steget mot en rättvis värdering av ditt dödsbo eller lösöre.
        </p>
      </div>
      <div id="bortforsling-dodsbo">
        <h4>Bortforsling av dödsbo & möbler {city ? `i ${city}` : ""}</h4>
        <p>
          Om du behöver hjälp med att bortforsla dödsbo, hushåll och möbler{" "}
          {city ? `i ${city}` : ""}, kan du lita på vår professionella och
          pålitliga tjänst. Vi erbjuder en komplett service för att underlätta
          för dig i en svår tid. Vårt erfarna team tar hand om allt från
          sortering och packning till bortforsling av möbler, prylar och skräp.
          Vi ser till att arbetet utförs smidigt och effektivt, med respekt för
          både egendom och känslor. Vi har utrustning och fordon för att hantera
          alla typer av bortforslingar, oavsett storlek och mängd. Kontakta oss
          idag för att få en kostnadsfri offert och ta det första steget mot en
          enklare process för bortforsling av dödsbo, hushåll och möbler{" "}
          {city ? `i ${city}` : ""}.
        </p>
      </div>
      <div id="uppkop-dodsbo">
        <h4>Köper dödsbon {city ? `i ${city}` : ""}</h4>
        <p>
          Vi på Dödsbo Jouren är specialiserade på att köpa dödsbo{" "}
          {city ? `i ${city} ` : ""}
          och vi köper alla typer av dödsbon. Vi förstår att hantering av ett
          dödsbo kan vara en svår och känslig uppgift och att det kan vara
          överväldigande att hantera all egendom. Vi erbjuder en enkel och
          smidig lösning genom att köpa hela dödsboet till ett rättvist pris. Vi
          tar hand om allt från sortering och packning till bortforsling av
          egendomen. Vi ser till att arbetet utförs smidigt och effektivt, med
          respekt för både egendom och känslor. Vi har erfarenhet av att köpa
          alla typer av dödsbon, från små lägenheter till stora villor. Kontakta
          oss idag för en kostnadsfri värdering av ditt dödsbo och ta det första
          steget mot en enklare och mindre stressig hantering av dödsboet.
        </p>
      </div>
    </div>
  );
};

export default Erbjuder;
