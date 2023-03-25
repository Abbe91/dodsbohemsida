import React, { useRef, useEffect } from "react";
import { getSnabbkollenData } from "../../redux-toolkit/snabbkollenSlice";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import Timer from "../Timer";
const SnabbhjalpConfirm = () => {
  const data = useSelector(getSnabbkollenData);
  const form = useRef();
  const handleSubmit = () => {
    emailjs
      .sendForm(
        "service_k835y1d",
        "template_vky05mk",
        form.current,
        process.env.REACT_APP_EMAILJS_2
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log("email sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    handleSubmit();
  });
  return (
    <div
      style={{
        background: "#a2cfbc",
        padding: "1rem",
        borderRadius: "5px",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",

          transition: "all 0.3s linear"
        }}
      >
        <h3 className="poppins">Återkoppling</h3>
        <p
          style={{
            margin: "0.25rem auto",
            fontSize: "0.85rem",
            maxWidth: "280px"
          }}
        >
          Vi kommer att återkoppla till dig inom
        </p>
        <Timer />
      </section>
      <form ref={form} style={{ display: "none" }}>
        <input type={"text"} name="email" value={data?.contacts} />
        <input type={"text"} name="telefon" value={data?.contacts} />
        <input type={"text"} name="namn" value={data?.namn} />
        <input
          type={"text"}
          name="tjanster"
          value={data?.services.map((el) => el)}
        />
        <input type={"text"} name="typ" value={data?.bohagsTyp} />
        <input type={"text"} name="beskriv" value={data?.beskrivning} />
        <input type={"text"} name="path" value={window?.location?.pathname} />
      </form>
      <div
        style={{
          height: "1px",
          width: "80%",
          background: "gray",
          margin: "0.5rem auto"
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "0.8rem"
        }}
      >
        <p>
          <strong>Hjälp med:</strong>
        </p>
        <div style={{ display: "flex" }}>
          {data?.services.map((el, i) => (
            <div key={i}>
              <a
                href="/"
                title={`${el} hus, lägenhet eller dödsbo`}
                style={{
                  color: "black",
                  marginRight: "0.3rem",
                  textDecoration: "underline",
                  fontSize: "0.8rem"
                }}
              >
                {el}
              </a>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>
        <strong>Beskrivning: </strong>
      </p>
      <p
        style={{
          fontSize: "0.8rem",
          margin: "0.3rem 0rem",
          width: "260px"
        }}
      >
        {data.beskrivning}
      </p>
      <p style={{ fontSize: "0.8rem", maxWidth: "300px" }}>
        <strong>Typ:</strong> {data.bohagsTyp}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p
          style={{ fontSize: "0.8rem", maxWidth: "300px", fontWeight: "bold" }}
        >
          {data.kontaktSatt}
          {": "}
        </p>
        <p
          style={{
            fontSize: "0.8rem",
            maxWidth: "300px",
            marginLeft: "0.2rem"
          }}
        >
          {data.contacts}
        </p>
      </div>
    </div>
  );
};

export default SnabbhjalpConfirm;
