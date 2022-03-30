import React, { useEffect } from "react";
import "./SankaVarmekostanden.css";
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
const SankaVarmekostanden = () => {
  const customerData = useSelector(getCustomerData);
  const mainquery = "sänka dina värmekostander";
  const element = useSelector(getElement);
  useEffect(() => {
    document
      .querySelector(`.${element}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [element]);
  return (
    <div>
      <div className="Nav">
        <Nav />
      </div>
      <div className="Hem">
        <MainComp
          query={"SÄNKA DINA VÄRMEKOSTANDER"}
          formTitle="Sänk din värmekostander med upp till 70%"
          icon={<BsHouseDoor />}
          subTitle={`Välkommen till ${customerData.business}`}
          subTitle2={
            "Din auktoriserade återförsäljare och installatör av Daikin värmepumpar."
          }
          subTitle3={
            "Behöver du professionell hjälp med att sänka dina värmekostander?"
          }
          text={`Behöver du hjälp med att sänka dina värmekostander? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring hur man sänker värmekostanden. Vi kan också hjälpa dig med installation och vi erbjuder en full helhetslösning med målet att ge det bästa valet för dig och din plånbok. Som kund hos har du allt samlat hos ett och samma företag - försäljning, installation och service.`}
          subTitle4={"Helhetslösning för att sänka värmekostanden."}
          text1={`Vårt företag är auktoriserad återförsäljare för världsledande Daikin utmanar med ett komplett program värmepumpar utvecklade för Sverige. Vi hjälper dig att sänka dina värmekostander och vi sköter allt från försäljning till installation och självklart service. Vårt mål är att kunna leverera den bästa produkten som även sänker dina värmekostander`}
        />
      </div>

      <div className="Om">
        <AboutUs
          query={"SÄNKA DINA VÄRMEKOSTANDER"}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig ${mainquery}?`}
          om={` är din auktoriserade återförsäljare och installatör av Daikin värmepumpar. Effect Energispar är ett företag som finns i Luleå, men har försäljning i hela Norrbotten.`}
        />
      </div>
      <div className="Tips">
        <Tips query={"Tips om sänka dina värmekostnader"} />
      </div>
      <div className="Tjänster">
        <Erbjuder />
      </div>

      <div
        className="Nyheter"
        style={{ textAlign: "center", marginTop: "3rem" }}
      >
        <h2
          style={{
            maxWidth: "90%",
            marginBottom: "1rem",
          }}
        >
          Sänka dina värmekostander NEWS!
        </h2>
        <Nyheter />
      </div>
      <div className="Kostnadsfri">
        <Kostnadsfri
          vad={"genomgång"}
          mainquery={mainquery}
          text={
            "För att säkerställa vad som blir den energieffektivaste lösningen i ditt hus börjar vi alltid med en genomgång av ditt befintliga värmesystem, din planlösning, din nuvarande förbrukning och även dina personliga krav på värme och inomhuskomfort."
          }
        />
      </div>
    </div>
  );
};

export default SankaVarmekostanden;
