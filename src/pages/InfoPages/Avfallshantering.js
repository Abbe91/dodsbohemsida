import React from "react";
import { Helmet } from "react-helmet-async";
import Nav from "../../components/Nav/Nav";
const btns = [
  "Brännbart avfall",
  "Grovavfall",
  "Metaller",
  "Bygg avfall",
  "Grovsopor",
  "Rivningsavfall",
  "Sopor",
  "Företagsavfall",
  "Industriavfall",
  "Verksamhetsavfall",
  "Avfallsbränsle",
  "Avfallsutrustning",
  "Destruktion",
  "Elektronikskrot",
  "Glas",
  "Organiskt avfall",
  "Plast",
  "Returpapper",
  "Sanering",
  "Slamsugning",
  "Träavfall"
];
const Avfallshantering = () => {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Här vi har samlat allt du behöver veta om avfallshantering och avfallshanteringstjänster samt en guide för avfallshantering.",
    description:
      "Vi kan hjälpa dig med all typ av avfallshantering, oavsett om det handlar om att hantering av avfall så som papper, plast, metall eller annat avfall. Vår målsättning är att hjälpa våra kunder att minska sin miljöpåverkan och samtidigt spara pengar på avfallshantering.",
    image:
      "https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    datePublished: new Date("2023-04-04T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "Louie Stokk"
    }
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
            "Här vi har samlat allt du behöver veta om avfallshantering och avfallshanteringstjänster samt guide för avfallshantering."
          }
        </title>
        <meta
          name="description"
          content={
            "Vi kan hjälpa dig med all typ av avfallshantering, oavsett om det handlar om att hantera avfall så som papper, plast, metall eller annat avfall. Vår målsättning är att hjälpa våra kunder att minska sin miljöpåverkan och samtidigt spara pengar på avfallshantering."
          }
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div style={{ margin: "1rem 0.5rem", width: "100%" }}>
        <p style={{ fontSize: "0.9rem" }}>Läs mer om avfallshantering:</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {btns.map((btn, i) => {
            return (
              <a
                href=""
                key={i}
                style={{
                  fontSize: "0.8rem",
                  marginRight: "0.5rem",
                  borderBottom: "1px solid black"
                }}
              >
                {btn}
              </a>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h1
          style={{
            fontSize: "1.6rem",
            marginTop: "1rem",
            marginBottom: "0.5rem",
            marginLeft: "0.5rem"
          }}
        >
          Avfallshantering
        </h1>
        <section style={{ position: "relative" }}>
          <img
            src="https://images.pexels.com/photos/3951625/pexels-photo-3951625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="återvinning"
            loading="lazy"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <article style={{ position: "absolute", top: "20%", left: "0.5rem" }}>
            <h3
              style={{
                background: "white",
                padding: "0.25rem",
                maxWidth: "80%"
              }}
            >
              Vi hjälper dig med all typ av avfallshantering!
            </h3>
            <button className="atv-btn" onClick={handleClick}>
              Gör en gratis förfrågan
            </button>
          </article>
        </section>

        <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
          Här vi har samlat allt du behöver veta om avfallshantering och
          avfallshanteringstjänster! Här hittar du användbar information och
          tips om hur du kan bidra till en mer hållbar miljö genom att
          avfallshantera på rätt sätt. Ta del av vår kunskap och gör din del för
          en bättre framtid!
        </p>
        <hr></hr>
        <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
          Avfallshantering är en viktig del av en hållbar framtid. Genom att
          återvinna material istället för att slänga det i soporna kan vi minska
          mängden avfall som hamnar på soptippar och i naturen, vilket i sin tur
          minskar miljöpåverkan och bidrar till en bättre och renare miljö. I
          den här artikeln kommer vi att titta närmare på vad avfallshantering
          är, varför det är viktigt, och hur du kan bidra till att minska
          mängden avfall som hamnar på soptipparna eller att du hanterar rätt
          avfall på rätt sätt.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginLeft: "0.5rem" }}>Fakta: avfallshantering</h3>
          <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
            Avfallshantering i Sverige är en viktig fråga för att skydda miljön
            och människors hälsa. Det finns många olika typer av avfall som
            genereras i landet, inklusive hushållsavfall, farligt avfall, bygg-
            och rivningsavfall, industriellt avfall, elektroniskt avfall och
            mycket mer. Varje typ av avfall kräver en specifik hantering för att
            minimera dess negativa påverkan på miljön. Hushållsavfall är den
            mest vanliga typen av avfall som genereras i Sverige och det
            inkluderar allt från matavfall till plastförpackningar och papper.
            För att hantera hushållsavfall på ett säkert och effektivt sätt bör
            det sorteras i olika kategorier, såsom organiskt avfall, papper och
            kartong, plastförpackningar, metall och glas. Detta gör det möjligt
            att återvinna de material som kan återanvändas och minska mängden
            avfall som hamnar på deponier. Farligt avfall är en annan typ av
            avfall som kräver särskild hantering på grund av dess skadliga
            egenskaper för människor och miljö. Farligt avfall inkluderar
            kemikalier, batterier, oljor och elektronik. Det är viktigt att
            farligt avfall samlas in och behandlas på ett säkert sätt för att
            undvika spridning av giftiga ämnen. Bygg- och rivningsavfall är en
            annan typ av avfall som kräver särskild hantering eftersom det
            innehåller material som kan skada miljön om de inte hanteras på rätt
            sätt. Bygg- och rivningsavfall inkluderar bland annat trä, betong,
            gips och metall. Det är viktigt att detta avfall sorteras och
            återvinns så mycket som möjligt. Industriellt avfall inkluderar
            avfall som genereras av olika företag och industrier. Detta avfall
            kan vara allt från kemikalier till tungmetaller och radioaktiva
            ämnen. Det är viktigt att företagen ansvarar för sin egen
            avfallshantering och ser till att avfallet behandlas på ett säkert
            sätt. Elektroniskt avfall är en annan typ av avfall som ökar i takt
            med teknikens utveckling. Elektroniskt avfall inkluderar allt från
            datorer och mobiltelefoner till TV-apparater och kylskåp. Det är
            viktigt att detta avfall återvinns på ett korrekt sätt för att
            minimera miljöpåverkan och förhindra spridning av giftiga ämnen.
            Fördelen med att låta en professionell avfallshanteringstjänst ta
            hand om avfallet är att det garanterar en säker och korrekt
            hantering av alla typer av avfall. Detta minskar risken för
            miljöförstöring och hälsoproblem. En professionell
            avfallshanteringstjänst kan hjälpa till att sortera avfallet
            korrekt, återvinna så mycket som möjligt och se till att avfallet
            transporteras på ett säkert
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginLeft: "0.5rem" }}>
            Hur skall man hantera olika typer av avfall?
          </h3>
          <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
            <strong>
              I Sverige finns det olika typer av avfall som kräver olika typer
              av hantering för att minimera dess negativa påverkan på miljön.
              Det är viktigt att förstå hur man ska hantera varje typ av avfall
              på ett säkert och effektivt sätt. Här är några exempel på olika
              typer av avfall och hur man ska hantera dem:
            </strong>
            <br></br>
            <strong>1.</strong> Hushållsavfall: Detta inkluderar allt från
            matavfall till plastförpackningar och papper. För att hantera
            hushållsavfall på ett säkert och effektivt sätt bör det sorteras i
            olika kategorier, såsom organiskt avfall, papper och kartong,
            plastförpackningar, metall och glas. Detta gör det möjligt att
            återvinna de material som kan återanvändas och minska mängden avfall
            som hamnar på deponier.
            <br></br>
            <strong>2.</strong> Farligt avfall: Detta inkluderar kemikalier,
            batterier, oljor och elektronik. Farligt avfall kräver särskild
            hantering på grund av dess skadliga egenskaper för människor och
            miljö. Det är viktigt att farligt avfall samlas in och behandlas på
            ett säkert sätt för att undvika spridning av giftiga ämnen.
            <br></br>
            <strong>3.</strong> Bygg- och rivningsavfall: Detta inkluderar
            material som kan skada miljön om de inte hanteras på rätt sätt,
            såsom trä, betong, gips och metall. Det är viktigt att detta avfall
            sorteras och återvinns så mycket som möjligt.
            <br></br>
            <strong>4.</strong> Industriellt avfall: Detta är avfall som
            genereras av olika företag och industrier. Det kan vara allt från
            kemikalier till tungmetaller och radioaktiva ämnen. Det är viktigt
            att företagen ansvarar för sin egen avfallshantering och ser till
            att avfallet behandlas på ett säkert sätt.
            <br></br>
            <strong>5.</strong> Elektroniskt avfall: Detta inkluderar allt från
            datorer och mobiltelefoner till TV-apparater och kylskåp. Det är
            viktigt att detta avfall återvinns på ett korrekt sätt för att
            minimera miljöpåverkan och förhindra spridning av giftiga ämnen.
            <br></br>
            <br></br>
            Fördelen med att låta en professionell avfallshanteringstjänst ta
            hand om avfallet är att det garanterar en säker och korrekt
            hantering av alla typer av avfall. Detta minskar risken för
            miljöförstöring och hälsoproblem. En professionell
            avfallshanteringstjänst kan hjälpa till att sortera avfallet
            korrekt, återvinna så mycket som möjligt och se till att avfallet
            transporteras på ett säkert sätt. I Sverige finns det strikta regler
            för hantering av avfall för att skydda miljön och människors hälsa.
            Det är viktigt att vara medveten om dessa regler och se till att
            avfall hanteras på ett säkert och korrekt sätt. Genom att välja en
            professionell avfallshanteringstjänst kan du vara säker på att ditt
            av
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginLeft: "0.5rem" }}>
            Vad är viktigt att tänka på kring avfallshantering?
          </h3>
          <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
            <strong>
              Att återvinna är en viktig del av att minska vår påverkan på
              miljön och bevara resurserna på vår planet. Men det är inte bara
              en fråga om att slänga saker i rätt sopkorg - det finns flera
              faktorer som är viktiga att tänka på när man återvinner. Här är
              några tips på vad du bör tänka på när du återvinner och hur vi kan
              hjälpa till med detta.
            </strong>
            <br></br>
            <strong>1.</strong> Sortera avfallet korrekt: Att sortera avfall i
            olika kategorier, såsom papper, plast, glas och metall, är en viktig
            del av återvinningen. Det är viktigt att sortera avfallet korrekt så
            att det kan återvinnas på ett effektivt sätt. En professionell
            avfallshanteringstjänst kan hjälpa dig att sortera och återvinna
            avfallet på rätt sätt.
            <br></br>
            <strong>2.</strong> Rengör materialen: För att materialen ska kunna
            återvinnas på ett effektivt sätt är det viktigt att de är rena och
            fria från föroreningar. Detta gäller särskilt för plastförpackningar
            och glas, som kan bli förorenade om de inte är ordentligt rengjorda.
            En enkel sköljning av förpackningarna kan göra stor skillnad.
            <br></br>
            <strong>3.</strong> Återanvänd eller donera föremål: Ibland kan det
            vara bättre att återanvända eller donera föremål istället för att
            slänga dem. Detta gäller särskilt för kläder och möbler. Genom att
            ge dem en ny användning minskar vi mängden avfall som hamnar på
            deponier.
            <br></br>
            <strong>4.</strong> Lär dig mer om återvinning: Att lära sig mer om
            återvinning och dess fördelar kan hjälpa dig att göra mer medvetna
            val när det gäller konsumtion och avfallshantering. Det finns många
            resurser tillgängliga på nätet eller via avfallshanteringstjänster
            som kan hjälpa dig att förstå hur du kan återvinna mer effektivt.
            <br></br>
            <strong>5.</strong> Använd en professionell avfallshanteringstjänst:
            En professionell avfallshanteringstjänst kan hjälpa till att hantera
            ditt avfall på ett säkert och effektivt sätt. De kan sortera,
            återvinna och transportera avfallet på ett sätt som minimerar
            miljöpåverkan.
            <br></br>
            <br></br>
            Genom att följa dessa tips kan du bidra till att minska mängden
            avfall som hamnar på deponier och hjälpa till att bevara resurserna
            på vår planet. Att välja en professionell avfallshanteringstjänst
            kan göra det enklare att återvinna och minska din påverkan på
            miljön. av
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginLeft: "0.5rem" }}>
            GUIDE: såhär hanterar du avfall på bästa sättet för att värna om
            miljön
          </h3>
          <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
            Att återvinna på bästa sätt är en viktig del av att värna om miljön
            och bevara resurserna på vår planet. Genom att återvinna kan vi
            minska vår påverkan på miljön och bidra till en hållbar framtid. Här
            är några tips på hur du kan återvinna på bästa sätt och hur vi kan
            hjälpa dig med detta.
          </p>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>
              1. Sortera ditt avfall korrekt
            </h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              Sortera avfallet korrekt: Att sortera avfall i olika kategorier,
              såsom papper, plast, glas och metall, är en viktig del av
              återvinningen. Det är viktigt att sortera avfallet korrekt så att
              det kan återvinnas på ett effektivt sätt. En professionell
              avfallshanteringstjänst kan hjälpa dig att sortera och återvinna
              avfallet på rätt sätt.
            </p>
          </section>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>
              2. Rengör och sortera rätt
            </h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              För att materialen ska kunna återvinnas på ett effektivt sätt är
              det viktigt att de är rena och fria från föroreningar. Detta
              gäller särskilt för plastförpackningar och glas, som kan bli
              förorenade om de inte är ordentligt rengjorda. En enkel sköljning
              av förpackningarna kan göra stor skillnad.
            </p>
          </section>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>3. Återanvänd produkter</h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              Återanvänd eller donera föremål: Ibland kan det vara bättre att
              återanvända eller donera föremål istället för att slänga dem.
              Detta gäller särskilt för kläder och möbler. Genom att ge dem en
              ny användning minskar vi mängden avfall som hamnar på deponier.
            </p>
          </section>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>
              4. Lär dig mer om avfallshantering:
            </h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              Att lära sig mer om avfallshantering och dess fördelar kan hjälpa
              dig att göra mer medvetna val när det gäller konsumtion och
              avfallshantering. Det finns många resurser tillgängliga på nätet
              eller via avfallshanteringstjänster som kan hjälpa dig att förstå
              hur du kan återvinna mer effektivt.
            </p>
          </section>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>
              5. Använd en professionell avfallshanteringstjänst:
            </h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              En professionell avfallshanteringstjänst kan hjälpa till att
              hantera ditt avfall på ett säkert och effektivt sätt. De kan
              sortera, återvinna och transportera avfallet på ett sätt som
              minimerar miljöpåverkan.
            </p>
          </section>
          <section>
            <h4 style={{ margin: "0.2rem 0.5rem" }}>
              6. Kontrollera lokala återvinningsprogram
            </h4>
            <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
              Kolla med din kommun eller återvinningscentral vad som återvinns
              på din ort och var det finns insamlingsstationer. Det kan också
              vara möjligt att ha hämtning av återvinningsmaterial från ditt
              hem. Genom att utnyttja de återvinningsmöjligheter som finns
              tillgängliga i din kommun, kan du bidra till en mer hållbar
              framtid.
            </p>
          </section>
          <br></br>
          <section>
            <p style={{ fontSize: "0.95rem", margin: "0.2rem 0.5rem" }}>
              Vi på Dödsbo Jouren erbjuder professionell avfallshanteringstjänst
              som kan hjälpa dig att återvinna på bästa sätt och minska din
              påverkan på miljön. Vi erbjuder avfallssortering, transport och
              återvinning av olika typer av avfall för att minimera
              miljöpåverkan och främja en hållbar framtid. Kontakta oss idag för
              att ta reda på hur vi kan hjälpa dig med din avfallshantering och
              bidra till en bättre miljö för oss alla.
            </p>
          </section>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h3 style={{ marginLeft: "0.5rem" }}>
            Hur kan vi hjälpa dig med avfallshantering?
          </h3>
          <p style={{ fontSize: "0.85rem", margin: "0.2rem 0.5rem" }}>
            Dödsbo Jouren är din bästa partner när det gäller avfallshantering.
            Vi har många års erfarenhet av att hantera avfall i samband med
            dödsbon, och vi kan hjälpa dig att ta hand om allt avfall på ett
            säkert och effektivt sätt. När en älskad person går bort kan det
            vara överväldigande att ta hand om allt avfall som samlas upp. Det
            kan vara allt från kläder, möbler och elektronik till farliga
            kemikalier och mediciner. Dödsbo Jouren kan hjälpa till att sortera,
            transportera och återvinna allt avfall på ett sätt som är säkert för
            miljön och människor. Vi på Dödsbo Jouren har de rätta verktygen och
            expertisen för att hantera alla typer av avfall. Vi kan också
            hantera farligt avfall, såsom mediciner och kemikalier, på ett
            säkert och lagligt sätt. Vi arbetar nära våra kunder för att
            säkerställa att deras behov och önskemål tas om hand på ett
            effektivt och smidigt sätt. Våra tjänster är prisvärda och vi kan
            erbjuda skräddarsydda lösningar för varje kunds unika behov. Vi tar
            hand om allt, från avfallssortering och transport till
            avfallshantering på en avfallsanläggning. Vi arbetar också med
            certifierade avfallsbolag för att säkerställa att allt avfall
            återvinns på ett säkert och effektivt sätt. Kontakta oss på Dödsbo
            Jouren idag för att ta hand om allt ditt avfall på ett säkert och
            miljövänligt sätt. Låt oss ta hand om allt så att du kan fokusera på
            det som verkligen betyder något i en svår tid.
          </p>
        </div>
        <button className="atv-btn" onClick={handleClick}>
          Gör en gratis förfrågan
        </button>
        <div style={{ height: "500px" }}></div>
      </div>
    </section>
  );
};

export default Avfallshantering;
