import React, { useRef, useState } from "react";
import "./AboutUs.css";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useSelector } from "react-redux";
import { AiOutlineMail } from "react-icons/ai";
import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";
import mapStyles from "../../utils/mapStyles";
import emailjs from "@emailjs/browser";
const AboutUs = ({ query, oss, om }) => {
  const customerData = useSelector(getCustomerData);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const form = useRef();
  const handleSubmit = (e) => {
    setSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k835y1d",
        "template_vky05mk",
        form.current,
        process.env.REACT_APP_EMAILJS_2
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("email sent");
            setSending(false);
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="aboutUs">
      <div className="aboutUs-info" style={{ maxWidth: "90%" }}>
        <h1 style={{ color: "#0369a1" }}>{query}</h1>
        <h4 style={{ margin: "0.5rem" }}>{oss}</h4>
        <p
          style={{
            margin: "0.75rem auto",
            maxWidth: "800px",
            fontSize: "0.8rem"
          }}
        >
          Vi på <strong>{customerData.business}</strong> {om}
        </p>
        <h5>Vi köper, tömmer, städar och säljer dödsbon </h5>
        <p
          style={{ maxWidth: "800px", fontSize: "0.9rem", lineHeight: "25PX" }}
        >
          När du behöver hjälp med att sälja ditt dödsbo, tömma dödsbo, städa
          dödsbo eller att vi köper från dödsboet så kan du kontakta oss. Vi ger
          dig kostnadsfri värdering och en offert som du kan ta ställning till.
          Om du bestämmer dig för att låta oss köpa ditt dödsbo kan du även få
          hjälp av oss med att tömma dösboet och sedan få dödsboet städat. Vi
          samarbetar med många auktionsfirmor och kan hjälpa er med att sälja
          lösöre som är av större värde. Vi kan även vara behjälpliga med
          bouppteckningen av dösboet.
        </p>
        <div>
          <form ref={form}>
            <AiOutlineMail
              style={{
                color: "#0369a1",
                fontSize: "1.4rem",
                margin: "0.5rem 0"
              }}
            />
            <label>
              Vill du få ett förslag på?
              <p style={{ fontSize: "0.7rem", fontWeight: "700" }}>{query}</p>
            </label>
            <input
              type="email"
              required
              placeholder="Din email"
              name="email"
              style={{ marginBottom: "0.5rem" }}
            />
            <input type="email" required placeholder="Telefon" name="telefon" />
            <textarea
              placeholder="Beskriv lite kort"
              name="beskriv"
              style={{
                marginTop: "0.5rem",
                textAlign: "center",
                height: "3rem",
                width: "90%"
              }}
            ></textarea>
            <button type="submit" onClick={handleSubmit}>
              {sending
                ? "skickar..."
                : sent
                ? "Tack för din förfrågan"
                : "Skicka"}
            </button>
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
              556469-5194
            </p>
          </div>
        </div>
      </div>

      <div className="map-container" style={{ height: "400px", width: "80%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLEMAPS_API_KEY
          }}
          defaultCenter={customerData.coords}
          center={customerData.coords}
          defaultZoom={13}
          margin={[50, 50, 50, 50]}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            styles: mapStyles
          }}
        >
          <div
            className="user-position"
            lat={Number(customerData.coords.lat)}
            lng={Number(customerData.coords.lng)}
          >
            <HiLocationMarker
              style={{ fontSize: "1.3rem", color: "#f44336" }}
            />
          </div>
          {customerData.weatherData?.list?.length &&
            customerData.weatherData.list.map((data, i) => (
              <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  height="70px"
                  loading="lazy"
                />
              </div>
            ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default AboutUs;
