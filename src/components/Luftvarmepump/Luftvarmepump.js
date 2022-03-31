import "./Luftvarmepump.css";
import React, { useEffect } from "react";
import MainComp from "../MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from "../AboutUs/AboutUs";
import Tips from "../Tips/Tips";
import Nav from "../Nav/Nav";
import Erbjuder from "../Erbjuder/Erbjuder";
import Nyheter from "../Nyheter/Nyheter";
import { getElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import { addNews } from "../../redux-toolkit/news/newsSlice";
import Kostnadsfri from "../Kostnadsfri/Kostnadsfri";
import { Helmet } from "react-helmet-async";

import LottieBooking from "../../LottieAnimation/LottieBooking";
import booking from "../../utils/animation/booking.json";
const Luftvarmepump = () => {
  const customerData = useSelector(getCustomerData);
  const mainquery = "Luftvärmepump";
  const query = "luftvärmepump";
  const element = useSelector(getElement);
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "SE",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };

  const getTipsSearch = async () => {
    try {
      const resp = fetch(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=luftv%C3%A4rmepump&num=100`,
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addNews(response.results)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [element]);
  useEffect(() => {
    getTipsSearch();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Luftvärmepump</title>
        <meta name="description" content="Luftvärmepump" />
      </Helmet>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={"LUFTVÄRMEPUMP"}
          formTitle={mainquery}
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={
            "Din auktoriserade återförsäljare och installatör av Daikin värmepumpar."
          }
          subTitle3={`Behöver du professionell hjälp med ${query}?`}
          text={`Behöver du hjälp med ${query}? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring ${query}. Vi kan också hjälpa dig med installation och vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag - försäljning, installation och service.`}
          subTitle4={`Helhetslösning för ${query}.`}
          text1={`Vårt företag är auktoriserad återförsäljare för världsledande Daikin utmanar med ett komplett program värmepumpar utvecklade för Sverige. Vi hjälper dig att sänka dina värmekostander och vi sköter allt från försäljning till installation av ${query} och självklart service. Vårt mål är att kunna leverera den bästa ${query} som även sänker dina värmekostander`}
          subTitle5={"Våra tjänster"}
          text2={
            "Vi erbjuder, bergvärme, luftvärmepumpar, luft/vattenvärmepumpar, ac anläggningar, service och reperations av värmepumpar. Hos oss får du din värmepump monterad och klar med trygga garantier"
          }
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig med  ${query}?`}
          om={` är din auktoriserade återförsäljare och installatör av Daikin värmepumpar. Effect Energispar är ett företag som finns i Luleå, men har försäljning i hela Norrbotten.`}
        />
      </div>
      <div className="Tips">
        <Tips query={`Tips om ${query}`} />
      </div>
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
              href="https://stokktech.simplybook.it/v2/#book"
              target="_blank"
              rel="noreferrer"
            >
              BOKA
            </a>
          </button>
        </div>
        <LottieBooking lotti={booking} height={400} width={400} />
      </div>
      <div
        className="Nyheter"
        style={{ textAlign: "center", marginTop: "3rem" }}
      >
        <h2
          style={{
            maxWidth: "90%",
            marginBottom: "1rem",
            color: "#0369a1",
          }}
        >
          {mainquery} NEWS!
        </h2>
        <Nyheter />
      </div>
      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"genomgång"}
          text={
            "För att säkerställa vad som blir den energieffektivaste lösningen i ditt hus börjar vi alltid med en genomgång av ditt befintliga värmesystem, din planlösning, din nuvarande förbrukning och även dina personliga krav på värme och inomhuskomfort."
          }
        />
      </div>
    </div>
  );
};

export default Luftvarmepump;
