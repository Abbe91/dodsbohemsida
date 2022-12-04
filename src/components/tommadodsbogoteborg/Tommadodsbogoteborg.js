import React, { useEffect, useState } from "react";
import MainComp from "../MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../AboutUs/AboutUs";
import Tips from "../Tips/Tips";
import Nav from "../Nav/Nav";
import Erbjuder from "../Erbjuder/Erbjuder";
import Nyheter from "../Nyheter/Nyheter";
import { getElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import Kostnadsfri from "../Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData, getBingNews } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
const Tommadodsbogoteborg = ({ videoText }) => {
  const newsData = useSelector(getNewsData);
  const bingNews = useSelector(getBingNews);
  const [content, setContent] = useState({
    metaTitle: "Tömma dödsbo Göteborg",
    metaContent: "Tömma dödsbo Göteborg",
    query: "Tömma dödsbo Göteborg",
    formTitle: "Tömma dödsbo Göteborg",
    subTitle2:
      "Din auktoriserade dödsbo hanterare av dödsbo, bohag, uppköp, försäljning, tömning, bortforsling, sanering, flytt och städ",
    subTitle3:
      "Behöver du professionell hjälp med att tömma dödsbo eller bohag?"
  });
  const customerData = useSelector(getCustomerData);
  const mainquery = "tömma dödsbo i göteborg";
  const services =
    "uppköp, tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning av dödsbo och bohag";
  const element = useSelector(getElement);
  useEffect(() => {
    document
      .querySelector(`.${element}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [element]);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaContent} />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Behöver du hjälp med att ${mainquery}? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services} och vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
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
        <Erbjuder />
      </div>

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Vill du också {mainquery}?</h2>
          <h4>
            Vi erbjuder helt kostnadfritt besök/genomgång för att kunna hjälpa
            dig som kund med at {mainquery}. Besöket/genomgången tar ca 45min
            och du som kund får en offert på plats om hur vi kan hjälpa dig
            <strong style={{ fontWeight: "700" }}> {mainquery}.</strong>
          </h4>
          <button type="button">
            <a
              href={`mailto:${customerData.email}`}
              target="_blank"
              rel="noreferrer"
            >
              BOKA
            </a>
          </button>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
      </div>
      {bingNews && (
        <div
          className="Nyheter"
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <h2
            style={{
              maxWidth: "90%",
              marginBottom: "0.3rem",
              color: "#0369a1"
            }}
          >
            Sänka dina värmekostander NEWS!
          </h2>
          <Nyheter />
        </div>
      )}

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

export default Tommadodsbogoteborg;
