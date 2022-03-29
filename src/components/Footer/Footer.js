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
    <div className="footer">
      <a href={`tel:${customerData.phone}`}>
        <AiTwotonePhone />
        <p>{customerData.phone}</p>
      </a>
      <a href={`mailto:${customerData.email}`}>
        <AiOutlineMail />
        <p>{customerData.email}</p>
      </a>
      <a
        href="https://www.google.se/maps/place/Hampmyrv%C3%A4gen+25,+975+93+Lule%C3%A5/@65.5660359,21.789248,17z/data=!3m1!4b1!4m5!3m4!1s0x467f69bbd26e7c6f:0xbb18225242f805dd!8m2!3d65.5660359!4d21.7914367?hl=sv"
        target="_blank"
        rel="noreferrer"
      >
        <RiMapPinLine />
      </a>
    </div>
  );
};

export default Footer;
