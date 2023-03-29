import React from "react";
import { useDispatch } from "react-redux";
import {
  setBeskrivning,
  setWhen,
  setArea
} from "../../redux-toolkit/snabbkollenSlice";
const StepThreeGratiskollen = () => {
  const dispatch = useDispatch();
  const handleBeskrivning = (e) => {
    dispatch(setBeskrivning(e.target.value));
  };
  const handleArea = (e) => {
    dispatch(setArea(e.target.value));
  };
  const handleWhen = (e) => {
    dispatch(setWhen(e.target.value));
  };
  return (
    <div>
      <h2 className="poppins">Lite mer detaljer</h2>
      <p
        style={{ fontSize: "0.9rem", maxWidth: "255px", margin: "0.1rem auto" }}
      >
        Detta kommer göra att vi kan ge dig bättre hjälp och rådgivning.
      </p>
      <section>
        <input
          type={"text"}
          placeholder="Vart ligger detta?"
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
          onChange={handleArea}
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
          placeholder="När skulle du vilja få detta gjort?"
          onChange={handleWhen}
        />
      </section>
      <textarea
        onChange={handleBeskrivning}
        type={"text"}
        placeholder="Beskriva gärna lite kort..."
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
        //   onChange={handleChange}
      />
    </div>
  );
};

export default StepThreeGratiskollen;
