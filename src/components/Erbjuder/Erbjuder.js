import React from "react";
import "./Erbjuder.css";
import { BsHouseDoor } from "react-icons/bs";
import { erbjuder } from "../../utils/data";
const Erbjuder = () => {
  return (
    <div className="erbjuder">
      <BsHouseDoor className="icon" />
      <div className="erbjuder-item">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 className="title">Vi Erbjuder</h2>
          {erbjuder?.map((el) => (
            <div key={el.id} className="erbjudande">
              <i
                style={{
                  marginRight: "0.5rem",
                  color: "#0369a1",
                  fontSize: "1.2rem",
                }}
              >
                {el.icon}
              </i>
              <h4>{el.title}</h4>
            </div>
          ))}
        </div>
        <div>
          <h2 style={{ marginTop: "2rem" }}>Vill du ha en offert?</h2>
          <form>
            <div>
              <input type="email" placeholder="Din email" />
              <button type="submit">Skicka</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Erbjuder;
