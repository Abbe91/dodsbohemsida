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
    <div className="footer" style={{ height: "280px" }}>
      <a href={`tel:${customerData.phone}`}>
        <AiTwotonePhone />
        <p>{customerData.phone}</p>
      </a>
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
      </section>
    </div>
  );
};

export default Footer;
