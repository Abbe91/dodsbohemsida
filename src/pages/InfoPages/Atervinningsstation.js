import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Nav/Nav";
import MapComponent from "../../components/MapComponent";
import "./Atervinningsstation.css";

const btns = ["Återvinningsstationer Göteborg"];
const Atervinningsstation = () => {
  const avsCoords = [
    {
      title: "Återvinningsstation Bangatan 54",
      adess: "Bangatan 54, Göteborg",
      lat: 57.6934656,
      lng: 11.9361714,
    },
    {
      title: "Återvinningsstation Rymdtorget",
      adess: "Tellusgatan 1, Göteborg",
      lat: 57.75720726853309,
      lng: 12.073707393843375,
    },
    {
      title: "Återvinningsstation Askim",
      adess: "Askims Backaväg 1, Göteborg",
      lat: 57.63645060565052,
      lng: 11.940457984068464,
    },
    {
      title: "Återvinningsstation Lilla Arödsgatan",
      adess: "Lilla Arödsgatan 3A, Hisingen",
      lat: 57.73655503560304,
      lng: 11.957445526303436,
    },
    {
      title: "Munkegärde återvinningscentral",
      adess: "Energivägen, 442 41 Kungälv",
      lat: 57.888563733052266,
      lng: 11.976983439937447,
    },
    {
      title: "Återvinningsstation Borås",
      adess: "Skaraborgsvägen 33E, Borås",
      lat: 57.73040980917139,
      lng: 12.938222484191192,
    },
  ];
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Upptäck enkelt närliggande återvinningsstationer med vår omfattande guide.",
    description:
      "Upptäck enkelt närliggande återvinningsstationer med vår omfattande guide. Här listar vi återvinningsstationer med platsinformation.",
    image:
      "https://www.nodra.se/wp-content/uploads/2015/09/%C3%A5tervinningsstation_webb-1-1140x380.jpg",
    datePublished: new Date("2023-04-14T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "DigitalTech",
    },
  };
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {
            "Upptäck enkelt närliggande återvinningsstationer med vår omfattande guide."
          }
        </title>
        <meta
          name="description"
          content={
            "Upptäck enkelt närliggande återvinningsstationer med vår omfattande guide. Här listar vi återvinningsstationer med platsinformation, öppetider och kontaktuppgifter."
          }
        />
        <meta
          property="og:description"
          content={
            "Upptäck enkelt närliggande återvinningsstationer med vår omfattande guide. Här listar vi återvinningsstationer med platsinformation, öppetider och kontaktuppgifter."
          }
        />
        <meta
          property="og:image"
          content="https://www.nodra.se/wp-content/uploads/2015/09/%C3%A5tervinningsstation_webb-1-1140x380.jpg"
        />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://dodsbojouren.com/atervinningsstation"
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div class="station-directory">
        <p>Hitta fler återvinningsstationer</p>
        <div class="station-directory-btn">
          {btns.map((btn, i) => {
            return (
              <a
                href="https://goteborg.se/wps/portal/start/bygga-bo-och-leva-hallbart/avfall-och-atervinning/har-lamnar-hushall-avfall/atervinningsstationer/hitta-atervinningsstationer"
                key={i}
                title="Återvinningsstationer Göteborg"
              >
                {btn}
              </a>
            );
          })}
        </div>
      </div>
      <div class="flex-column-container-station">
        <h1 className="station-section-h1">Återvinningsstation</h1>
        <section class="station-section">
          <img
            src="https://www.molndal.se/images/18.728d086318002a9f8051a85a/1649772943682/Lindome_avc855x500daneck.png"
            alt="återvinning"
            loading="lazy"
          />
          <article>
            <h3>Hitta återvinningsstationer i din närhet.</h3>
            <button class="station-section-btn" onClick={handleClick}>
              Hjälp med slänga sopor?
            </button>
          </article>
        </section>
        <p class="station-info">
          Upptäck enkelt närliggande återvinningsstationer med vår omfattande
          guide. Hitta platsinformation för återvinningsstationer i din närhet.
          Med våra användarvänliga verktyg kan du enkelt bidra till en renare
          miljö. Behöver du hjälp med bortforsling av skräp? Vi finns här för
          att hjälpa till.
        </p>
        <MapComponent avsCoords={avsCoords} />
        <p class="station-info-description">
          Återvinning har blivit allt viktigare i dagens samhälle och för att
          göra det enklare för privatpersoner och företag att återvinna sina
          avfallsmaterial har återvinningsstationer blivit alltmer tillgängliga
          i hela Sverige. På återvinningsstationer kan man lämna allt från
          kartonger och tidningar till glas, plast och metall. Medan varje
          kommun i Sverige har sina egna system för insamling och hantering av
          avfall, är återvinningsstationer en gemensam lösning som finns
          tillgänglig över hela landet. Oavsett var du bor i Sverige, kan du
          hitta en återvinningsstation nära dig för att enkelt bidra till en
          renare miljö.
        </p>
        <div class="station-facts-container">
          <h3>Fakta: Återvinningsstationer</h3>
          <p>
            Återvinningsstationer har blivit alltmer tillgängliga i Sverige och
            är en viktig del av landets insatser för att minska avfallsmängderna
            och öka återvinningen. På återvinningsstationer kan privatpersoner
            och företag lämna olika typer av avfallsmaterial, vilket inkluderar:
          </p>
          <ul>
            <li>Plastförpackningar</li>
            <li>Metallförpackningar (t.ex. aluminiumburkar)</li>
            <li>Pappersförpackningar (t.ex. kartonger, tidningar)</li>
            <li>Glasförpackningar</li>
            <li>Batterier</li>
          </ul>
          <p>
            Det är viktigt att sortera avfallet korrekt för att underlätta för
            återvinning. På återvinningsstationer finns ofta olika behållare för
            respektive typ av avfallsmaterial, såsom glasburkar och
            plastflaskor. Genom att sortera avfallet korrekt, kan det lättare
            återvinnas och förvandlas till nya produkter. Utöver att lämna
            avfallsmaterial, kan vissa återvinningsstationer också erbjuda
            gratis bortforsling av grovavfall, såsom möbler och vitvaror. Vissa
            kommuner erbjuder också hämtning av avfall direkt från hemmet. Att
            använda återvinningsstationer är ett enkelt sätt att bidra till en
            renare miljö och en hållbar framtid. Genom att sortera avfallet
            korrekt och lämna det på en återvinningsstation i Sverige, kan vi
            alla göra vår del för att minska avfallsmängderna och öka
            återvinningen.
          </p>
        </div>
        <div class="station-guide-container">
          <h3>Guide om hur man återvinner på återvinningsstationer.</h3>
          <ol>
            <li>
              Identifiera materialen du vill slänga eller återvinna Innan du
              besöker en återvinningsstation är det viktigt att du identifierar
              vilka material du vill slänga eller återvinna. Det kan hjälpa dig
              att sortera avfallet i förväg och underlätta på
              återvinningsstationen.
            </li>
            <li>
              Ta med dig materialen till återvinningsstationen När du har
              identifierat vilka material du vill slänga eller återvinna, ta med
              dig dem till en återvinningsstation. De flesta
              återvinningsstationer är öppna för allmänheten och det finns
              oftast flera i varje kommun.
            </li>
            <li>
              Sortera materialen korrekt På återvinningsstationen finns ofta
              olika behållare för respektive typ av avfallsmaterial. Se till att
              sortera avfallet korrekt genom att placera glasburkar i en
              behållare märkt för glasåtervinning och papper i en behållare
              märkt för pappersåtervinning, till exempel.
            </li>
            <li>
              Följ instruktionerna på platsen Följ instruktionerna på
              återvinningsstationen för att säkerställa att du sorterar avfallet
              korrekt. Det kan finnas specifika riktlinjer för varje material
              och återvinningsstationen kan ha specifika krav på hur avfallet
              ska förpackas och sorteras.
            </li>
            <li>
              Undvik förorening av avfallet Försök att undvika att förorena
              avfallet genom att till exempel inte blanda ihop olika material.
              Att förorena avfallet kan försvåra återvinningen och minska
              återvinningsvärdet.
            </li>
            <li>
              Var beredd på att lämna grovavfall och farligt avfall separat
              Grovavfall och farligt avfall, såsom färg och lösningsmedel,
              behöver ofta lämnas separat på en återvinningsstation. Kontakta
              återvinningsstationen i förväg för att se om de tar emot dessa
              material och vilka instruktioner som gäller för att sortera och
              lämna dem.
            </li>
            <li>
              Tänk på att återvinningsstationen kan erbjuda gratis bortforsling
              av grovavfall Vissa återvinningsstationer kan erbjuda gratis
              bortforsling av grovavfall, såsom möbler och vitvaror. Kontakta
              återvinningsstationen i förväg för att se om de erbjuder denna
              tjänst och vilka krav som gäller.
            </li>
          </ol>
          <p>
            Genom att följa dessa enkla steg kan du enkelt slänga eller
            återvinna på återvinningsstationer i Sverige och bidra till en
            renare miljö och en hållbar framtid.
          </p>
        </div>
        <div class="station-tips-container">
          <h3>Vad är viktigt att tänka på när man återvinner?</h3>
          <p>
            <strong>Rengör och sortera rätt</strong>: För att återvinna på rätt
            sätt är det viktigt att sortera ditt avfall korrekt. Detta innebär
            att du bör separera olika typer av material och lägga dem i lämpliga
            återvinningsbehållare. Det vanligaste materialet som återvinns är
            papper, plast, glas och metall. Så se till att du har dessa
            behållare tillgängliga på rätt plats. Rengör och sortera rätt För
            att säkerställa att ditt återvinningsmaterial kan användas på nytt
            är det viktigt att det är rent och utan restprodukter. Se till att
            du har rengjort dina återvinningsmaterial ordentligt och sortera dem
            enligt de olika materialen. Återanvända produkter Att återanvända
            produkter är en annan effektiv metod för att minska avfallet och
            spara resurser. Du kan använda återanvändbara produkter som
            tygkassar, glasflaskor, matlådor, bestick och tallrikar istället för
            att använda engångsprodukter. Detta kan också leda till en minskning
            av dina utgifter för hushållsartiklar. Kolla med kommunen Kolla med
            din kommun vad som återvinns på din ort och var det finns
            insamlingsstationer. Det kan också vara möjligt att ha hämtning av
            återvinningsmaterial från ditt hem. Sälj eller donera Fundera på att
            sälja eller donera saker som fortfarande fungerar och kan ha ett
            andra liv istället för att kasta dem i soporna. Det kan vara möjligt
            att sälja eller donera elektronik, kläder och möbler till
            organisationer eller second-hand-butiker. Genom att tänka på dessa
            saker när du återvinner kan du göra en stor skillnad för miljön. Att
            återvinna på rätt sätt bidrar till att minska avfallsmängderna,
            minska behovet av att utvinna nya råvaror och minskar miljöpåverkan
            från sopor. Dessutom kan det också spara pengar och skapa
            möjligheter att hjälpa andra genom att sälja eller donera produkter.
            Så nästa gång du ska återvinna, tänk på hur du kan göra det på rätt
            sätt och bidra till en mer hållbar framtid.
          </p>
        </div>
        <div class="station-best-practices">
          <h3>
            GUIDE: såhär återvinner du på bästa sättet för att värna om miljön
          </h3>
          <p>
            Att återvinna på bästa sättet är en viktig del av att ta hand om vår
            planet och minska vår miljöpåverkan. Här är några tips för att
            återvinna på bästa sätt och värna om miljön:
          </p>
          <ol>
            <section>
              <h4>
                <li>Sortera ditt avfall korrekt</li>
              </h4>
              <p>
                För att återvinna på rätt sätt är det viktigt att sortera ditt
                avfall korrekt. Detta innebär att du bör separera olika typer av
                material och lägga dem i lämpliga återvinningsbehållare. Det
                vanligaste materialet som återvinns är papper, plast, glas och
                metall. Se till att du har dessa behållare tillgängliga på rätt
                plats.
              </p>
            </section>
            <section>
              <h4>
                <li>Rengör och sortera rätt</li>
              </h4>
              <p>
                För att säkerställa att ditt återvinningsmaterial kan användas
                på nytt är det viktigt att det är rent och utan restprodukter.
                Se till att du har rengjort dina återvinningsmaterial ordentligt
                och sortera dem enligt de olika materialen. Om du är osäker på
                hur du ska sortera ditt avfall, kontakta din kommun eller
                återvinningscentral för information.
              </p>
            </section>
            <section>
              <h4>
                <li>Återanvänd produkter</li>
              </h4>
              <p>
                Att återanvända produkter är en annan effektiv metod för att
                minska avfallet och spara resurser. Du kan använda
                återanvändbara produkter som tygkassar, glasflaskor, matlådor,
                bestick och tallrikar istället för att använda engångsprodukter.
                Detta kan också leda till en minskning av dina utgifter för
                hushållsartiklar.
              </p>
            </section>
            <section>
              <h4>
                <li>Sälja eller donera</li>
              </h4>
              <p>
                Fundera på att sälja eller donera saker som fortfarande fungerar
                och kan ha ett andra liv istället för att kasta dem i soporna.
                Det kan vara möjligt att sälja eller donera elektronik, kläder
                och möbler till organisationer eller second-hand-butiker. På så
                sätt kan du inte bara minska avfallsmängderna utan också bidra
                till att skapa en mer hållbar och cirkulär ekonomi.
              </p>
            </section>
            <section>
              <h4>
                <li>Undvik engångsprodukter</li>
              </h4>
              <p>
                Undvik att använda engångsprodukter som plastpåsar,
                engångsmuggar, engångsbestick och engångstallrikar. De är ofta
                svåra att återvinna och kan orsaka skada på miljön. Använd
                istället återanvändbara alternativ.
              </p>
            </section>
            <section>
              <h4>
                <li>Kontrollera lokala återvinningsprogram</li>
              </h4>
              <p>
                Kolla med din kommun eller återvinningscentral vad som återvinns
                på din ort och var det finns insamlingsstationer. Det kan också
                vara möjligt att ha hämtning av återvinningsmaterial från ditt
                hem. Genom att utnyttja de återvinningsmöjligheter som finns
                tillgängliga i din kommun, kan du bidra till en mer hållbar
                framtid.
              </p>
            </section>
            <section>
              <h4>
                <li>Välj återvunnet</li>
              </h4>
              <p>
                När du handlar, välj produkter som innehåller återvunnet
                material istället för nyproducerat material
              </p>
            </section>
          </ol>
        </div>
        <div class="station-services-description">
          <h3>Hur kan vi hjälpa dig med återvinning?</h3>
          <p>
            Vi kan hjälpa dig med all typ av återvinning, oavsett om det handlar
            om att återvinna papper, plast, metall eller annat avfall. Vår
            målsättning är att hjälpa våra kunder att minska sin miljöpåverkan
            och samtidigt spara pengar på avfallshantering. Vi erbjuder en mängd
            olika tjänster för återvinning, inklusive hämtning och transport av
            avfall, sortering av avfall på plats, återvinning av elektronik och
            farligt avfall, samt konsultation för att förbättra er
            avfallshantering. Vi kan också hjälpa till med att utbilda er
            personal om rätt avfallshantering och återvinning. Vi har många års
            erfarenhet inom branschen och är stolta över att erbjuda
            högkvalitativ service till våra kunder. Vårt team består av experter
            inom återvinning och vi arbetar alltid för att hitta de mest
            effektiva och hållbara lösningarna för våra kunder. Kontakta oss
            idag för att få mer information om hur vi kan hjälpa er med er
            avfallshantering och återvinning. Vi ser fram emot att samarbeta med
            er och göra en positiv skillnad för miljön.
          </p>
        </div>
        <button class="station-services-description-btn" onClick={handleClick}>
          Gör en gratis förfrågan
        </button>
      </div>
    </section>
  );
};

export default Atervinningsstation;
