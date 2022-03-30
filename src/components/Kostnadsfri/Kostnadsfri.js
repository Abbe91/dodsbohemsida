import React from "react";
import "./Kostnadsfri.css";
const Kostnadsfri = ({ vad, text }) => {
  return (
    <div className="kostandri-cont">
      <h1>Kostnadsfri {vad}</h1>
      <div className="divider"></div>
      <p>{text}</p>
      <form>
        <h2>Vill du veta mer?</h2>
        <input type="email" required placeholder="Din email" />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Kostnadsfri;
