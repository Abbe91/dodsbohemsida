import React from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  return (
    <div className="aboutUs">
      <div className="aboutUs-info">
        <h1>{query}</h1>
        <h4>{oss}</h4>
        <p>{om}</p>
        <div>
          <form>
            <label>
              Jag vill få ett förslag på mail om hur jag kan sänka min
              värmakostander
            </label>
            <button type="submit">Skicka</button>
          </form>
        </div>
        <div className="aboutUs-contact">
          <a>{customerData.phone}</a>
          <a>{customerData.email}</a>
          <p>{customerData.address}</p>
          <p>{customerData.org}</p>
        </div>
      </div>
      <div className="asboutUs-map">karta och väder här</div>
    </div>
  );
};

export default AboutUs;
