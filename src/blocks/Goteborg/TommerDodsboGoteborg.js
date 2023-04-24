import React, { useState } from "react";
import MainComp from "../../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs/AboutUs";
import Tips from "../../components/Tips/Tips";
import Nav from "../../components/Nav/Nav";
import Erbjuder from "../../components/Erbjuder/Erbjuder";
import Kostnadsfri from "../../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
import BookingModal from "../../components/BookingModal";
const TommerDodsboGoteborg = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle: "Tömmer dödsbo i Göteborg - Effektiv och pålitlig service!",
    metaContent:
      "Tömmer dödsbo i Göteborg. Behöver du hjälp med att vi tömmer ett dödsbo i Göteborg? Vi garanterar en prisvärd, smidig och säker process.",
    formTitle: "Tömmer dödsbo Göteborg",
    subTitle2:
      "Din auktoriserade hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städ",
    subTitle3:
      "Behöver du professionell hjälp med att tömma dödsbo eller bohag?"
  });
  const customerData = useSelector(getCustomerData);
  const mainquery = "Tömmer dödsbo i Göteborg";
  const services =
    "uppköp, bortforsling, sanering, luktsanering, flytt, städ, försäljning, och tömning av dödsbo och bohag i Göteborg";

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tömmer dödsbo i Göteborg - Effektiv och pålitlig service",
    description:
      "Tömmer dödsbo i Göteborg. Behöver du hjälp med att vi tömmer ett dödsbo i Göteborg? Vi garanterar en prisvärd, smidig och säker process.",
    image:
      "https://xn--ddsbo-jua.com/wp-content/uploads/2019/07/family-room-382150_640.jpg",
    datePublished: new Date("2023-04-24T09:25:01.340Z").toISOString(),
    author: {
      "@type": "Person",
      name: "Louie Stokk"
    }
  };
  return (
    <div>
      <div>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
        <meta
          property="og:url"
          content="https://dodsbojouren.com/tomma-dodsbo-goteborg"
        />
        <meta property="og:description" content={content.metaContent} />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/3651376/pexels-photo-3651376.jpeg?auto=compress&cs=tinysrgb&w=1300"
        />
        <link
          hrefLang="sv"
          rel="canonical"
          href="https://dodsbojouren.com/tommer-dodsbo-goteborg"
        />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          city={"Göteborg"}
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Behöver du hjälp med att ${mainquery}? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services}. Vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
          subTitle4={`Helhetslösning för ${mainquery}`}
          text1={`Vårt företag har varit i branschen i över 20år. Vi har flera samarbeten med auktionsfirmor, olika typer va hjälp boenden, och hjälp organisationer. Vi skänker lösöre och möbler samt sorterar och och värnar om miljön`}
          subTitle5={"Våra tjänster"}
          text2={`Vi kan hjälpa dig med ${services}`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery.toUpperCase()}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig ${mainquery}?`}
          om={`är det självklara valet för hantering av bohag och dödsbo med 20 års erfarenhet.`}
        />
      </div>
      {newsData && (
        <div className="Tips">
          <Tips query={mainquery.toUpperCase()} newsData={newsData} />
        </div>
      )}
      <div className="Tjänster">
        <Erbjuder city={"Göteborg"} />
      </div>

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Vill du också {mainquery}?</h2>
          <h4>
            Vi erbjuder helt kostnadfritt besök/genomgång för att kunna hjälpa
            dig som kund med att {mainquery}. Besöket/genomgången tar ca 45min
            och du som kund får en offert på plats om hur vi kan hjälpa dig
            <strong style={{ fontWeight: "700" }}> {mainquery}.</strong>
          </h4>
          <button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            style={{ display: modalOpen ? "none" : "block" }}
          >
            BOKA
          </button>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
        {modalOpen && (
          <BookingModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        )}
      </div>

      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"Värdering"}
          mainquery={mainquery}
          text={`${videoText}${mainquery}.`}
        />
      </div>
    </div>
  );
};

export default TommerDodsboGoteborg;
