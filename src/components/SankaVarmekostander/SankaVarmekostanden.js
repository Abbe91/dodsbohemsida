import React from "react";
import "./SankaVarmekostanden.css";
import MainComp from "../MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import AboutUs from "../AboutUs/AboutUs";
import Tips from "../Tips/Tips";
const SankaVarmekostanden = () => {
  const customerData = useSelector(getCustomerData);
  const mainquery = "sänka dina värmekostander";

  return (
    <div>
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
      <AboutUs
        query={"SÄNKA DINA VÄRMEKOSTANDER"}
        oss={`Vilka är vi? Och hur gör vi för att kunna hjälpa dig ${mainquery}?`}
        om={`Vi på Effect Energispar är din auktoriserade återförsäljare och installatör av Daikin värmepumpar. Effect Energispar är ett företag som finns i Luleå, men har försäljning i hela Norrbotten.`}
      />
      <Tips />
    </div>
  );
};

export default SankaVarmekostanden;
