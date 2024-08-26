import React, { useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="aboutUs">
      <div
        className="aboutUs-info"
        style={{
          maxWidth: "90%",
          transition: "all 0.3s linear",
          width: "100%"
        }}
      >
        <h2 style={{ color: "white", marginTop: "1rem", fontSize: "1.4rem" }}>
          {query}
        </h2>
        <p
          style={{
            margin: "0.75rem auto",
            maxWidth: "800px",
            fontSize: "0.8rem"
          }}
        >
          Vi på <strong>{customerData.business}</strong> {om}
        </p>
        <h5>Vi köper, tömmer, städar och säljer dödsbon och hushåll.</h5>
        <p
          style={{
            maxWidth: "800px",
            fontSize: "0.8rem",
            lineHeight: "27px",
            margin: "0 auto",
            height: "100%",
            overflow: "hidden",
            transition: "all 0.3s linear"
          }}
        >
          När du behöver hjälp med att sälja ditt dödsbo,{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "white" }}
            title="tömma dödsbo"
          >
            tömma dödsbo
          </a>
          , städa dödsbo eller att vi köper från{" "}
          <a href="/dodsboet" style={{ color: "white" }} title="dödsboet">
            dödsboet
          </a>{" "}
          så kan du kontakta oss. Vi ger dig kostnadsfri{" "}
          <a
            href="/vardering-av-dodsbo"
            title="värdering av dödsbo"
            style={{ color: "white" }}
          >
            värdering
          </a>{" "}
          och en offert som du kan ta ställning till. Om du bestämmer dig för
          att låta oss{" "}
          <a
            href="/uppkop-av-dodsbo"
            style={{ color: "white" }}
            title="uppköp av dödsbo"
          >
            köpa ditt dödsbo
          </a>{" "}
          kan du även få hjälp av oss med att{" "}
          <a
            href="/tomma-dodsbo"
            style={{ color: "white" }}
            title="tömma dödsbo"
          >
            tömma dödsboet
          </a>{" "}
          och sedan få dödsboet städat. Vi samarbetar med många auktionsfirmor
          och kan hjälpa er med att sälja lösöre som är av större värde. Vi kan
          även vara behjälpliga med bouppteckningen av dödsboet.
        </p>

        <div className="aboutUs-contact">
          <div>
            <h4>Adress</h4>
            <div>
              <p>{customerData.adress}</p>
              <p>
                {customerData.zip} {customerData.city}
              </p>
            </div>
          </div>
          <div style={{ lineHeight: "20px" }}>
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "1px",
                margin: "0.2rem 0"
              }}
            >
              <strong>orgnummer</strong>
            </p>
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "1px",
                margin: "0.2rem 0"
              }}
            >
              559060-1554
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
