import React, { useState } from "react";
import "./MainComp.css";
import image from "../../utils/images/värmepump.jpg";
const MainComp = ({ query, formTitle, icon, subTitle, subTitle2 }) => {
  const [accept, setAccept] = useState(false);
  return (
    <div className="mainComp">
      <div className="main-content-container">
        <div>
          <h1>{query}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              margin: "0.5rem 0",
            }}
          >
            <h4 style={{ marginRight: "0.5rem" }}>{subTitle}</h4>
            <p> {icon}</p>
          </div>
          <h5 style={{ maxWidth: "400px" }}>{subTitle2}</h5>
        </div>
      </div>
      <form>
        <div
          style={{
            dislay: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "1rem",
            letterSpacing: "1px",
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>Gratiskollen</p>
          <i style={{ fontSize: "1.5rem" }}>{icon}</i>
        </div>
        <h4>{formTitle}</h4>
        <input type="text" placeholder="Ditt namn" />
        <input type="text" placeholder="Din email" />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <label htmlFor="typ">Typ</label>
          <select>
            <option value="bergvärme">Luftvärme</option>
            <option value="bergvärme">Bergvärme</option>
            <option value="bergvärme">Luft/Vatten</option>
            <option value="ac">AC</option>
            <option value="ac">Service</option>
          </select>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0.7rem 0",
            }}
          >
            <p style={{ fontSize: ".8rem", marginRight: "0.3rem" }}>
              Jag har något installerat hemma
            </p>
            <input type="checkbox" />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ fontSize: ".8rem", marginRight: "0.3rem" }}>
              Jag har <strong>INTE</strong> något installerat hemma
            </p>
            <input type="checkbox" />
          </div>
        </div>
        <a href={`tel:${""}`}></a>
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default MainComp;
