import React from "react";
import { useDispatch } from "react-redux";
import { setBohagstyp } from "../../redux-toolkit/snabbkollenSlice";
const Steptwo = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setBohagstyp(e.target.innerText));
    e.target.style.background = "#D6CA98";
    e.target.style.color = "black";
  };
  const handledbClick = (e) => {
    e.target.style.background = "black";
    e.target.style.color = "white";
  };
  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "2rem"
        }}
      >
        <h3 className="poppins">Snabbhjälpen</h3>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.85rem" }}>
          Välj det som matchar.
        </p>
        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
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
              Dödsbo
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
              Konkursbo
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
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
              Hus
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
              Lägenhet
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
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
              Kontor
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
              Annat
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Steptwo;
