import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Nav/Nav";
import "./Atervinning.css";

const btns = [
  "Avfall",
  " Elektronikskrot",
  "Metaller",
  "Farligt avfall",
  "Grovsopor",
  "Glas",
  "Plast",
  "Papper",
  "Trä",
];
const Atervinning = () => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Din guide för återvinning - Här vi har samlat allt du behöver veta om återvinning.",
    description:
      "Vi kan hjälpa dig med all typ av återvinning, oavsett om det handlar om att återvinna papper, plast, metall eller annat avfall.",
    image:
      "https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    datePublished: new Date("2023-04-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "DigitalTech",
    },
  };
  const handleClick = () => {
    window.location.href = "/dodsbojouren/gratiskollen";
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
            "Din guide för återvinning - Här vi har samlat allt du behöver veta om återvinning."
          }
        </title>
        <meta
          name="description"
          content={
            "Vi kan hjälpa dig med all typ av återvinning, oavsett om det handlar om att återvinna papper, plast, metall eller annat avfall."
          }
        />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://dodsbojouren.com/atervinning"
        />
        <meta
          property="og:description"
          content={
            "Vi kan hjälpa dig med all typ av återvinning, oavsett om det handlar om att återvinna papper, plast, metall eller annat avfall."
          }
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div class="base-recycling-center-directory">
        <p>Läs mer om återvinning av</p>
        <div class="base-recycling-center-directory-btn">
          {btns.map((btn, i) => {
            return (
              <a href="" key={i}>
                {btn}
              </a>
            );
          })}
        </div>
      </div>
      <div class="base-flex-column-container">
        <h1 className="base-recycling-center-section-h1">Återvinning</h1>
        <section class="base-recycling-center-section">
          <img
            src="https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="återvinning"
            loading="lazy"
          />
          <article>
            <h3>Vi hjälper dig med all typ av återvinning!</h3>
            <button
              class="base-recycling-center-section-btn"
              onClick={handleClick}
            >
              Gör en gratis förfrågan
            </button>
          </article>
        </section>
        <p class="base-recycling-info">
          Här vi har samlat allt du behöver veta om återvinning och
          återvinningstjänster! Här hittar du användbar information och tips om
          hur du kan bidra till en mer hållbar miljö genom att återvinna på rätt
          sätt. Ta del av vår kunskap och gör din del för en bättre framtid!
        </p>
        <p class="base-recycling-info-description">
          Återvinning är en viktig del av en hållbar framtid. Genom att
          återvinna material istället för att slänga det i soporna kan vi minska
          mängden avfall som hamnar på soptippar och i naturen, vilket i sin tur
          minskar miljöpåverkan och bidrar till en bättre och renare miljö. I
          den här artikeln kommer vi att titta närmare på vad återvinning är,
          varför det är viktigt, och hur du kan bidra till att minska mängden
          avfall som hamnar på soptipparna.
        </p>
        <div class="base-recycling-facts-container">
          <h3>Fakta: återvinning</h3>
          <p>
            Återvinning är processen där material som har använts tidigare
            samlas in och omvandlas till nya produkter. Detta inkluderar allt
            från papper och plast till glas och metall. Genom att återvinna
            material istället för att producera nya från råvaror, kan vi spara
            på värdefulla resurser och minska miljöpåverkan. Varför är
            återvinning viktigt? Det finns flera skäl till varför återvinning är
            viktigt. För det första hjälper det till att minska mängden avfall
            som hamnar på soptipparna och i naturen. När vi återvinner material
            istället för att slänga det, minskar vi behovet av nya råvaror och
            minskar därmed mängden avfall som produceras. Detta är särskilt
            viktigt med tanke på att mängden avfall ökar stadigt varje år,
            vilket innebär att vi måste ta itu med problemet på ett hållbart
            sätt. För det andra hjälper återvinning till att spara på värdefulla
            resurser. Genom att återvinna material istället för att producera
            nya från råvaror, minskar vi behovet av att utvinna naturresurser.
            Detta kan ha en positiv effekt på miljön genom att minska
            miljöpåverkan från exploatering av naturresurser. Slutligen kan
            återvinning ha ekonomiska fördelar. Genom att återvinna material
            istället för att producera nya från råvaror, kan företag minska sina
            produktionskostnader. Detta kan leda till en minskning av priset på
            produkter som tillverkas av återvunnet material, vilket kan göra dem
            mer attraktiva för konsumenterna. Hur kan du bidra till återvinning?
            Det finns flera saker du kan göra för att bidra till återvinning.
            För det första kan du se till att sortera ditt avfall korrekt och
            lämna det på rätt ställe. Detta innebär att du bör lägga papper,
            plast, glas och metall i återvinningsbehållarna och se till att allt
            annat avfall hamnar i soporna. För det andra kan du minska mängden
            avfall som du producerar genom att använda återanvändbara produkter
            och undvika engångsprodukter. Detta inkluderar att använda tygkassar
            istället för plast
          </p>
        </div>
        <div class="base-recycling-guide-container">
          <h3 style={{ marginLeft: "0.5rem" }}>Hur skall man återvinna?</h3>
          <p>
            <strong>Sortera ditt avfall korrekt</strong>: För att återvinna på
            rätt sätt är det viktigt att sortera ditt avfall korrekt. Detta
            innebär att du bör separera olika typer av material och lägga dem i
            lämpliga återvinningsbehållare. Det vanligaste materialet som
            återvinns är papper, plast, glas och metall. Så se till att du har
            dessa behållare tillgängliga på rätt plats. Rengör och sortera rätt
            För att säkerställa att ditt återvinningsmaterial kan användas på
            nytt är det viktigt att det är rent och utan restprodukter. Se till
            att du har rengjort dina återvinningsmaterial ordentligt och sortera
            dem enligt de olika materialen. Återanvända produkter Att
            återanvända produkter är en annan effektiv metod för att minska
            avfallet och spara resurser. Du kan använda återanvändbara produkter
            som tygkassar, glasflaskor, matlådor, bestick och tallrikar istället
            för att använda engångsprodukter. Detta kan också leda till en
            minskning av dina utgifter för hushållsartiklar. Kolla med kommunen
            Kolla med din kommun vad som återvinns på din ort och var det finns
            insamlingsstationer. Det kan också vara möjligt att ha hämtning av
            återvinningsmaterial från ditt hem. Sälj eller donera Fundera på att
            sälja eller donera saker som fortfarande fungerar och kan ha ett
            andra liv istället för att kasta dem i soporna. Det kan vara möjligt
            att sälja eller donera elektronik, kläder och möbler till
            organisationer eller second-hand-butiker. Sammanfattningsvis är
            återvinning en viktig del av en hållbar framtid. Genom att sortera
            ditt avfall korrekt, rengöra och sortera det rätt, återanvända
            produkter, kolla med din kommun och sälja eller donera saker kan du
            hjälpa till att minska mängden avfall som hamnar på soptipparna och
            i naturen. På så sätt kan vi tillsammans bidra till en bättre och
            renare miljö.
          </p>
        </div>
        <div class="base-recycling-tips-container">
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
        <div class="base-recycling-best-practices">
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
              <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
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
        <div class="base-recycling-services-description">
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
        <button
          class="base-recycling-services-description-btn"
          onClick={handleClick}
        >
          Gör en gratis förfrågan
        </button>
      </div>
    </section>
  );
};

export default Atervinning;
