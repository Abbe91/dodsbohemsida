import React, { useState } from "react";
import "./SankaVarmekostanden.css";
import MainComp from "../MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
const SankaVarmekostanden = () => {
  const customerData = useSelector(getCustomerData);
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
        text={`Behöver du hjälp med att sänka dina värmekostander? Då är vi på ${customerData.business} det självklara valet. Vi är en firma som verkligen kan allt kring hur man sänker värmekostanden. Vi kan också agera auktionsmäklare och erbjuder en full logistiklösning med målet att ge det bästa försäljningsvärdet för dig. Som kund hos har du allt samlat hos ett och samma företag - försäljning, installation och service.`}
        subTitle4={"Helhetslösning för att sänka värmekostanden."}
        text1={`Vårt företag är auktoriserad återförsäljare för världsledande Daikin utmanar med ett komplett program värmepumpar utvecklade för Sverige. Vi hjälper dig att sänka dina värmekostander och vi sköter allt från försäljning till installation och självklart service. Vårt mål är att kunna leverera den bästa produkten som även sänker dina värmekostander`}
      />
    </div>
  );
};

export default SankaVarmekostanden;
