import React from "react";
import { useDispatch } from "react-redux";
import {
  setNamn,
  setEmail,
  setNummer
} from "../../redux-toolkit/snabbkollenSlice";
const GratisKollenKontakt = () => {
  const dispatch = useDispatch();
  const handleName = (e) => {
    dispatch(setNamn(e.target.value));
  };
  const handleNummer = (e) => {
    dispatch(setNummer(e.target.value));
  };
  const handleEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  return (
    <div>
      <h2 className="poppins">Återkoppling</h2>
      <p
        style={{ fontSize: "0.9rem", maxWidth: "255px", margin: "0.1rem auto" }}
      >
        Fyll i de fält nedan du önksar bli kontaktad på.
      </p>
      <section>
        <input
          type={"text"}
          placeholder="Ditt namn..."
          style={{
            height: "2.6rem",
            width: "255px",
            marginTop: "0.4rem",
            marginLeft: "0.4rem",
            marginBottom: "0.4rem",
            borderRadius: "5px",
            background: "transparent",
            color: "black",
            border: "1px solid black",
            fontSize: "16px"
          }}
          onChange={handleName}
        />
      </section>
      <section>
        <input
          style={{
            height: "2.6rem",
            width: "255px",
            marginTop: "0.4rem",
            marginLeft: "0.4rem",
            marginBottom: "0.4rem",
            borderRadius: "5px",
            background: "transparent",
            color: "black",
            border: "1px solid black",
            fontSize: "16px"
          }}
          type={"text"}
          placeholder="Ditt telefonnummer..."
          onChange={handleNummer}
        />
      </section>
      <section>
        <input
          style={{
            height: "2.6rem",
            width: "255px",
            marginTop: "0.4rem",
            marginLeft: "0.4rem",
            marginBottom: "0.4rem",
            borderRadius: "5px",
            background: "transparent",
            color: "black",
            border: "1px solid black",
            fontSize: "16px"
          }}
          type={"email"}
          placeholder="Din email..."
          onChange={handleEmail}
        />
      </section>
    </div>
  );
};

export default GratisKollenKontakt;
