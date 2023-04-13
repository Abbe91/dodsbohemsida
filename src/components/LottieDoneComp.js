import React from "react";
import LottieHouse from "../../LottieAnimation/LottieHouse";
import lottieanimation from "../../utils/animation/hus.json";
const LottieDoneComp = () => {
  return (
    <div
      style={{ textAlign: "center", margin: "2rem 0" }}
      className="main-content-container"
    >
      <div>
        <h1>Snabbt & Pålitligt</h1>
        <p>
          Letar du efter en som kan ta hand om{" "}
          <a
            href="/tomma-dodsbo"
            title="tömma dödsbo"
            style={{ color: "inherit" }}
          >
            dödsbon
          </a>{" "}
          och{" "}
          <a
            href="/tomma-bohag"
            title="tömma bohag och hushåll"
            style={{ color: "inherit" }}
          >
            hushåll
          </a>{" "}
          på ett professionellt sätt? Då har du kommit rätt! Vi är experter på
          att{" "}
          <a
            href="/uppkop-av-dodsbo"
            title="uppköp av dödsbo, bohag och hushåll"
            style={{ color: "inherit" }}
          >
            köpa
          </a>
          ,{" "}
          <a
            href="/tomma-dodsbo"
            title="tömma dödsbo"
            style={{ color: "inherit" }}
          >
            tömma
          </a>{" "}
          ,{" "}
          <a
            href="/stadning-av-dodsbo"
            title="tömma dödsbo"
            style={{ color: "inherit" }}
          >
            städa
          </a>{" "}
          och sälja dödsbon och hushåll.
        </p>
      </div>

      <LottieHouse lotti={lottieanimation} height={200} width={300} />
    </div>
  );
};

export default LottieDoneComp;
