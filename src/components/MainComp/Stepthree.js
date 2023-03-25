import { doc } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setKontaktsatt,
  setBeskrivning,
  setContacts
} from "../../redux-toolkit/snabbkollenSlice";
const Stepthree = () => {
  const [placeHolderText, setplaceHolderText] = useState("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    document.querySelector(".stepthree-input").classList.add("height");
    dispatch(setKontaktsatt(e.target.innerText));
    e.target.style.background = "#D6CA98";
    e.target.style.color = "black";
    if (e.target.innerText === "Bli uppringd") {
      setplaceHolderText("Ditt nummer");
    } else {
      setplaceHolderText("Din e-mail");
    }
  };
  const handledbClick = (e) => {
    e.target.style.background = "black";
    e.target.style.color = "white";
  };
  const handleChange = (e) => {
    dispatch(setBeskrivning(e.target.value));
  };
  const handleContactChange = (e) => {
    dispatch(setContacts(e.target.value));
  };

  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "2rem",
          transition: "all 0.3s linear"
        }}
      >
        <h3 className="poppins">Snabbhjälpen</h3>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.85rem" }}>
          Hur vill du få återkoppling?
        </p>
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              transition: "all 0.3s linear"
            }}
          >
            <button
              style={{
                background: "black",
                border: "none",
                width: "6.2rem",
                height: "2.2rem",
                borderRadius: "5px",
                marginLeft: "0.3rem",
                marginBottom: "0.3rem",
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "white"
              }}
              onClick={handleClick}
              onDoubleClick={handledbClick}
            >
              Bli uppringd
            </button>
            <button
              style={{
                background: "black",
                border: "none",
                width: "6.2rem",
                height: "2.2rem",
                borderRadius: "5px",
                marginLeft: "0.3rem",
                marginBottom: "0.3rem",
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "white"
              }}
              onClick={handleClick}
              onDoubleClick={handledbClick}
            >
              Få e-mail
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type={"text"}
              required
              name={placeHolderText === "Ditt nummer" ? "telefon" : "email"}
              placeholder={placeHolderText}
              onChange={handleContactChange}
              className="stepthree-input"
            />
            <textarea
              type={"text"}
              placeholder="Vill du beskriva något mer?"
              style={{
                height: "2.6rem",
                width: "205px",
                marginTop: "0.4rem",
                marginLeft: "0.4rem",
                marginBottom: "0.4rem",
                borderRadius: "5px",
                background: "transparent",
                color: "black",
                border: "1px solid black",
                fontSize: "16px"
              }}
              onChange={handleChange}
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Stepthree;
