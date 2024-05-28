import React, { useState } from "react";
import TableOfConent from "../toc/TableOfConent";
import { LazyLoadImage } from "react-lazy-load-image-component";
export const items = [
  {
    title: "Bortforsling",
    alt: "bortforsling av dödsbo och möbler",
    srcImg: "https://www.svgrepo.com/show/85909/furniture.svg",
    srcPath: "https://dodsbojouren.com/bortforsling-dodsbo"
  },
  {
    title: "Dödsbo",
    alt: "Värderar dödsbo, tömmer dödsbo",
    srcImg: "https://www.svgrepo.com/show/490798/house.svg",
    srcPath: "https://dodsbojouren.com"
  },
  {
    title: "Städning",
    alt: "Flyttstädning och städning av dödsbo",
    srcImg: "https://www.svgrepo.com/show/287614/cleaning-mop.svg",
    srcPath: "https://dodsbojouren.com/flyttstadning"
  },
  {
    title: "Flytt",
    alt: "Bohagsflytt och trasnport",
    srcImg: "https://www.svgrepo.com/show/270968/truck.svg",
    srcPath: "https://dodsbojouren.com/bohagsflytt"
  },
  {
    title: "Återvinning",
    alt: "återvinning och återvinningstjänster",
    srcImg: "https://www.svgrepo.com/show/230586/recycling-bin-recycle-bin.svg",
    srcPath: "https://dodsbojouren.com/atervinning"
  },
  {
    title: "Avfall",
    alt: "avfallshantering och avfallstjänster",
    srcImg: "https://www.svgrepo.com/show/484065/trash-can.svg",
    srcPath: "https://dodsbojouren.com/avfallshantering"
  },
  {
    title: "Uppköp",
    alt: "Uppköp av lösöre och dödsbo",
    srcImg: "https://www.svgrepo.com/show/480209/painting-1.svg",
    srcPath: "https://dodsbojouren.com/uppkop-av-dodsbo"
  },
  {
    title: "Tömning",
    alt: "Tömning av dödsboo och hushåll",
    srcImg:
      "https://www.svgrepo.com/show/307953/mover-going-downstairs-stairs-ladder-moving-boxes.svg",
    srcPath: "https://dodsbojouren.com/tomning-av-dodsbo"
  },
  {
    title: "Värdering",
    alt: "Värdering av dödsbo, lösöre och hushåll",
    srcImg: "https://www.svgrepo.com/show/160931/judge.svg",
    srcPath: "https://dodsbojouren.com/vardering-av-dodsbo"
  },
  {
    title: "Sanering",
    alt: "sanering av dödsbo och hushåll",
    srcImg: "https://www.svgrepo.com/show/393486/avatar-face-face-mask.svg",
    srcPath: "https://dodsbojouren.com/sanera-dodsbo"
  }
];
const MainUseComp = ({ formTitle }) => {
  const [showInneHall, setshowInneHall] = useState(false);

  return (
    <>
      <div className="mainComp" style={{ height: showInneHall && "1500px" }}>
        <section style={{ maxWidth: "600px", marginBottom: "2rem" }}>
          <h1
            style={{
              opacity: "0",
              borderBottom: "1px solid white"
            }}
          >
            {formTitle}
          </h1>
          <h2 style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>
            Detta kan vi hjälpa dig med..
          </h2>
          <p
            style={{
              maxWidth: "90%",
              margin: "0 auto",
              fontSize: "1rem",
              letterSpacing: "1px"
            }}
          >
            <a
              href="/atervinning"
              title="återvinning"
              style={{ color: "inherit" }}
            >
              Återvinning
            </a>{" "}
            och{" "}
            <a
              href="/avfallshantering"
              title="avfallshantering"
              style={{ color: "inherit" }}
            >
              Avfallshantering
            </a>
            .{" "}
            <a
              href="/uppkop-av-dodsbo"
              title="uppköp av dödsbo, bohag och hushåll"
              style={{ color: "inherit" }}
            >
              Uppköp
            </a>
            ,{" "}
            <a
              href="/vardera-dodsbo"
              title="värdering av dödsbo, bohag och hushåll"
              style={{ color: "inherit" }}
            >
              värdering
            </a>
            ,{" "}
            <a
              href="/tomma-dodsbo"
              title="tömma dödsbo"
              style={{ color: "inherit" }}
            >
              tömning
            </a>
            ,{" "}
            <a
              href="/bortforsling-dodsbo"
              title="bortforsling av möbler och dödsbo"
              style={{ color: "inherit" }}
            >
              bortforsling
            </a>
            ,{" "}
            <a
              href="/sanera-dodsbo"
              title="sanering av dödsbo"
              style={{ color: "inherit" }}
            >
              sanering
            </a>
            ,{" "}
            <a
              href="/bohagsflytt"
              title="bohagsflytt"
              style={{ color: "inherit" }}
            >
              flytt
            </a>{" "}
            och{" "}
            <a
              href="/stadning-av-dodsbo"
              title="städning av dödsbo"
              style={{ color: "inherit" }}
            >
              städning
            </a>{" "}
            av{" "}
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
              title="tömma bohag"
              style={{ color: "inherit" }}
            >
              bohag
            </a>
            .
          </p>
        </section>
        <section
          style={{
            display: "flex",
            maxWidth: "700px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {items?.map((el, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "1.5rem 1.5rem"
                }}
              >
                <LazyLoadImage
                  alt={el.alt}
                  height={"60px"}
                  src={el.srcImg}
                  width={"60px"}
                  style={{
                    background: "white",
                    borderRadius: "50%",
                    padding: "0.8rem"
                  }}
                />
                <a
                  href={el.srcPath}
                  title={el.alt}
                  style={{
                    fontSize: "0.8rem",
                    color: "white",
                    maxWidth: "100px",
                    marginTop: "0.3rem",
                    fontWeight: "bold",
                    letterSpacing: "0.5px"
                  }}
                >
                  {el.title}
                </a>
              </div>
            );
          })}
        </section>
        <TableOfConent
          showInneHall={showInneHall}
          setshowInneHall={setshowInneHall}
        />
      </div>
    </>
  );
};

export default MainUseComp;
