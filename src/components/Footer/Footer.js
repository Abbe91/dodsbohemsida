import React from "react";
import "./Footer.css";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiMapPinLine } from "react-icons/ri";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const customerData = useSelector(getCustomerData);
  return (
    <>
      <div className="footer" style={{ height: "300px" }}>
        <div>
          <h3 style={{ marginBottom: "0.7rem" }}>Dödsbo Jouren</h3>
          <a href={`tel:${customerData.phone}`}>
            <AiTwotonePhone style={{ marginBottom: "0.2rem" }} />
            <p>{customerData.phone}</p>
          </a>
        </div>

        {/* <a href={`mailto:${customerData.email}`}>
        <AiOutlineMail />
        <p>{customerData.email}</p>
      </a>
      <a
        href="https://www.google.se/maps/place/Hampmyrv%C3%A4gen+25,+975+93+Lule%C3%A5/@65.5660359,21.789248,17z/data=!3m1!4b1!4m5!3m4!1s0x467f69bbd26e7c6f:0xbb18225242f805dd!8m2!3d65.5660359!4d21.7914367?hl=sv"
        target="_blank"
        rel="noreferrer"
      >
        <RiMapPinLine />
      </a> */}
        <section style={{ margin: "1rem 1rem" }}>
          <h4 style={{ marginBottom: "0.5rem" }}>Våra kontor/butiker</h4>
          <div className="office">
            <div>
              <h5>Göteborg</h5>
              <p>Hisingsgatan 10</p>
              <p>417 03 Göteborg</p>
            </div>
            <div>
              <h5>Tjörn, Skärhamn</h5>
              <p>Magasinsgatan 11</p>
              <p>47 132 Skärhamn</p>
            </div>
            <div>
              <h5>Ulricehamn</h5>
              <p>Bogesundsgatan 2</p>
              <p>52 338 Ulricehamn</p>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              margin: "0.2rem 0"
            }}
          >
            Orgnummer: 556469-5194{" "}
          </p>
        </section>
      </div>
      <div
        style={{
          background: "#0369a1",
          color: "white",
          height: "300px",
          textAlign: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <p
          style={{
            maxWidth: "340px",
            lineHeight: "24px",
            margin: "0.5rem auto",
            fontSize: "0.8rem"
          }}
        >
          Välj oss för att få professionell och pålitlig hjälp med att tömma
          hushåll och dödsbon. Vi har många års erfarenhet av alla typer av
          flyttar och städningar och vi sanerar dödsbon och hushåll för att ge
          dig en trygg och ren miljö. Vi erbjuder också värdering av dödsbon och
          köper upp lösöre för att underlätta processen för dig. Vårt team av
          experter är alltid redo att hjälpa till med att skapa en smidig och
          stressfri lösning för alla dina behov. Kontakta oss idag för mer
          information.
        </p>
      </div>
    </>
  );
};

export default Footer;
