import React from "react";
import LottieBooking from "../LottieAnimation/LottieBooking";
import partners from "../utils/animation/partners.json";
const Partners = () => {
  return (
    <div className="partners">
      <section>
        <h2 style={{ color: "#0369a1" }}>Dödsbo & Bohag</h2>
        <h4 style={{ margin: "0.5rem 0" }}>- Partners -</h4>
        <ul>
          <p style={{ margin: "0.5rem 0" }}>
            Vi samarbetar med en rad partners för att kunna ge dig en så
            heltäckande tjänst som möjligt för ditt dödsbo eller bohag. Bland
            våra samarbetspartners finns:
          </p>
          <li style={{ color: "#0369a1" }}>- Begravningsbyrå</li>
          <li style={{ color: "#0369a1" }}>- Auktionsverk</li>
          <li style={{ color: "#0369a1" }}>- Onlineauktioner</li>
          <li style={{ color: "#0369a1" }}>- Mäklare</li>
          <li style={{ color: "#0369a1" }}>- Hjälporganisationer</li>
        </ul>
      </section>
      <section>
        <LottieBooking lotti={partners} height={400} width={400} />
      </section>
    </div>
  );
};

export default Partners;
