import React from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";
const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  return (
    <div className="aboutUs">
      <div className="aboutUs-info">
        <h1>{query}</h1>
        <h4 style={{ margin: "0.5rem" }}>{oss}</h4>
        <p style={{ margin: "0.75rem auto", maxWidth: "800px" }}>{om}</p>
        <div>
          <form>
            <AiOutlineMail
              style={{
                color: "#0369a1",
                fontSize: "1.4rem",
                margin: "0.5rem 0",
              }}
            />
            <label>
              Jag vill få ett förslag på mail om hur jag kan sänka min
              värmakostander.
            </label>
            <input type="email" required placeholder="Din email" />
            <button type="submit">Skicka</button>
          </form>
        </div>
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
          <div>
            <h4>Kontakt</h4>
            <p>{customerData.phone}</p>
            <p>{customerData.email}</p>
          </div>
        </div>
      </div>
      <div className="asboutUs-map">karta och väder här</div>
    </div>
  );
};

export default AboutUs;
