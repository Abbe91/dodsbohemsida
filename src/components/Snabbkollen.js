import React, { useState } from "react";

const Snabbkollen = () => {
  const [querys, setQuerys] = useState({
    from: "",
    to: "",
    service: "",
    budget: 0,
    when: ""
  });
  return (
    <div className="Snabbkollen">
      <section className="snabb-kollen-input">
        <form className="snabb-kollen-form">
          <input
            type="text"
            value={querys.from}
            placeholder="Vart ligger detta?"
          />
          <input
            type="text"
            value={querys.to}
            placeholder="Skall detta någonstans?"
          />
          <input
            type="text"
            value={querys.service}
            placeholder="Vad behöver du hjälp med?"
          />
          <input
            type="number"
            value={querys.budget}
            placeholder="Vad är din budget för detta?"
          />
          <input
            type="date"
            value={querys.when}
            placeholder="När behöver du få detta gjort?"
          />
        </form>
        <p>Så här mkt kommer det kosta på ett unegfär</p>
        <p>Dessa företag kan hjälpa dig</p>
        <button>Vill du bli kontaktad?</button>
      </section>
    </div>
  );
};

export default Snabbkollen;
