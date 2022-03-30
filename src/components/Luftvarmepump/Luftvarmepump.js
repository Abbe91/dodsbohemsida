import "./Luftvarmepump.css";
import React, { useEffect } from "react";
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
const Luftvarmepump = () => {
  const customerData = useSelector(getCustomerData);
  const mainquery = "Luftvärmepump";
  const query = "luftvärmepump";
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
        />
      </div>

      <div className="Om">
        <AboutUs
          query={mainquery}
          oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig med  ${query}?`}
          om={`Vi på Effect Energispar är din auktoriserade återförsäljare och installatör av Daikin värmepumpar. Effect Energispar är ett företag som finns i Luleå, men har försäljning i hela Norrbotten.`}
        />
      </div>
      <div className="Tips">
        <Tips query={`Tips om ${query}`} />
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
          }}
        >
          {mainquery} NEWS!
        </h2>
        <Nyheter />
      </div>
    </div>
  );
};

export default Luftvarmepump;
