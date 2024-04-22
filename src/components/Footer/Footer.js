import React from "react";
import "./Footer.css";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";

const Footer = () => {
  const customerData = useSelector(getCustomerData);
  return (
    <>
      <div className="footer" style={{ height: "300px" }}>
        <div>
          <h3 style={{ marginBottom: "0.7rem" }}>Dödsbo Jouren</h3>
          <a href={`tel:${customerData.phone}`} style={{ color: "white" }}>
            <AiTwotonePhone style={{ marginBottom: "0.2rem" }} />
            <p>{customerData.phone}</p>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100091387485178"
            title="Dödsbo Jouren Facebook"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              fontSize: "1.4rem"
            }}
          >
            <FaFacebook />
          </a>
        </div>

        {/* <section style={{ margin: "1rem 1rem" }}>
          <h4 style={{ marginBottom: "0.5rem" }}>Våra kontor/butiker</h4>
          <div className="office">
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
        </section> */}
      </div>
      <div
        style={{
          background: "#e3c148",
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
