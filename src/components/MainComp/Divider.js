import React from "react";

const Divider = () => {
  return (
    <div style={{ marginBottom: "3rem" }} className="main-comp-divider-comp">
      <img
        style={{
          borderRadius: "5px",
          objectFit: "contain",
          marginBottom: "1rem"
        }}
        src="https://offerta.se/images/campaign/brf-campaign.jpg"
        alt="lägenheter"
      />
      <section>
        <h2 style={{ marginBottom: "0.5rem", marginLeft: "0.5rem" }}>
          Få hjälp av proffsen!
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            maxWidth: "440px",
            marginBottom: "0.5rem",
            marginLeft: "0.5rem",
            marginRight: "0.5rem"
          }}
        >
          Vårt team är välutbildat och erfaret, och vi arbetar snabbt och
          effektivt för att underlätta för våra kunder under en tuff tid.
        </p>
        <button
          onClick={() => (window.location.href = "/dodsbojouren/gratiskollen")}
          style={{
            background: "transparent",
            color: "black",
            border: "1px solid black",
            fontWeight: "bold",
            width: "10rem",
            fontSize: "0.9rem",
            height: "2.8rem",
            borderRadius: "20px",
            marginLeft: "0.5rem"
          }}
        >
          Gratiskollen
        </button>
      </section>
    </div>
  );
};

export default Divider;
