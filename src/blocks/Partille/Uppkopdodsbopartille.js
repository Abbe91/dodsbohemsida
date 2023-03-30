import React, { useEffect, useState } from "react";
import MainComp from "../../components/MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../../components/AboutUs/AboutUs";
import Tips from "../../components/Tips/Tips";
import Nav from "../../components/Nav/Nav";
import Erbjuder from "../../components/Erbjuder/Erbjuder";
import { getElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import Kostnadsfri from "../../components/Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";
import { getNewsData, getBingNews } from "../../redux-toolkit/news/newsSlice";
import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
import BookingModal from "../../components/BookingModal";
const Uppkopdodsbopartille = ({ videoText }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const mainquery = "uppköp dödsbo Partille";
  const newsData = useSelector(getNewsData);
  const [content, setContent] = useState({
    metaTitle:
      "Vi köper upp dödsbon i Partille. Vill du sälj ett dödsbo i Partille? Vi köper hela eller delar av dödsbon till rättvist pris. Vårt professionella team kan erbjuda en snabb och smidig lösning för avyttring av dödsbo | Dödsbo Jouren",
    query: "Uppköp dödsbo Partille",
    metaContent:
      "Vi köper upp dödsbon i Partille. Sälj dödsbo i Partille till rättvist pris med vår professionella uppköpstjänst. Vi köper hela eller delar av dödsbon i Partille. Med oss får du en smidig och snabb lösning för avyttring av hela eller delar av dödsboet, oavsett om det rör sig om fastigheter, möbler eller andra tillgångar. Med vår erfarenhet och expertis kan du vara säker på att få en rättvis värdering och ett konkurrenskraftigt pris. Vi tar hand om allt från värdering och sortering av tillgångar till betalning och dokumentation, vilket gör hela processen stressfri och enkel för dig. Fördelen med att välja vår tjänst är att vi köper dödsboet till ett bra pris samtidigt som du slipper hantera allt själv. Kontakta oss idag för att diskutera dina behov och få en skräddarsydd lösning som passar just dig och din situation.",
    query: "Uppköp dödsbo Partille",
    formTitle: "Uppköp dödsbo Partille",
    subTitle2:
      "Din auktoriserade hanterare av dödsbo, bohag, försäljning, tömning, bortforsling, sanering, flytt, städ och uppköp av dödsbo i Partille",
    subTitle3: `Behöver du professionell hjälp med ${mainquery}`
  });
  const customerData = useSelector(getCustomerData);

  const services =
    "tömning, bortforsling, sanering, luktsanering, flytt, städ, försäljning och uppköp av dödsbo i Partille";
  const element = useSelector(getElement);
  useEffect(() => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: "smooth" });
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
          city={"Partille"}
          query={content.query}
          formTitle={content.formTitle}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={content.subTitle2}
          subTitle3={content.subTitle3}
          text={`Behöver du hjälp med ${mainquery}? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring ${mainquery}. Vi kan också hjälpa dig med ${services}. Vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag.`}
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
        <Erbjuder city={"Partille"} />
      </div>

      <div className="booking-lottie">
        <div className="booking-content">
          <h2>Hjälp {mainquery}?</h2>
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

export default Uppkopdodsbopartille;
