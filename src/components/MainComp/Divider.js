import React from "react";

const Divider = () => {
  return (
    <div style={{ marginBottom: "3rem" }} className="main-comp-divider-comp">
      <img
        style={{
          objectFit: "contain",
          width: "340px",
          height: "300px",
          marginLeft: "0.5rem"
        }}
        src="https://svenskcykling.se/wp-content/uploads/2021/01/slide-2.jpg"
        alt="tömma lägenheter"
        title="tömma lägenheter"
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
      </section>
    </div>
  );
};

export default Divider;
