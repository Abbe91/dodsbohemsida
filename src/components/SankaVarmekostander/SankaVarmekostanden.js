import React, { useState } from "react";
import "./SankaVarmekostanden.css";
import MainComp from "../MainComp/MainComp";
import { BsHouseDoor } from "react-icons/bs";
const SankaVarmekostanden = () => {
  const [business, setBusiness] = useState("Effect Energispar");
  return (
    <div>
      <MainComp
        query={"Sänka dina värmekostander"}
        formTitle="Sänk din värmekostander med upp till 70%"
        icon={<BsHouseDoor />}
        subTitle={`Välkommen till ${business}`}
        subTitle2={
          "Din auktoriserade återförsäljare och installatör av Daikin värmepumpar."
        }
      />
    </div>
  );
};

export default SankaVarmekostanden;
