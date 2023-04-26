import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { tocData } from "../../utils/tocdata";
const TableOfConent = ({ showInneHall, setshowInneHall }) => {
  return (
    <>
      <div
        className="toc-root"
        style={{
          position: showInneHall && "relative",
          marginTop: showInneHall && "2rem"
        }}
        onClick={() => setshowInneHall(!showInneHall)}
      >
        <h3>INNEHÅLL</h3>
        <IoIosArrowDown />
      </div>
      <ul style={{ display: showInneHall ? "block" : "none" }}>
        <h3
          style={{
            fontWeight: "100",
            letterSpacing: "0.5px",
            marginBottom: "0.3rem",
            borderBottom: "0.5px solid white"
          }}
        >
          Innehållsförteckning
        </h3>
        {tocData?.map((toc, i) => {
          return (
            <li
              key={i}
              style={{ textAlign: "left", margin: "0.75rem 0.5rem" }}
              className="toc-links"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`${toc.path}`)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <a
                hrefLang="sv"
                href={toc.path}
                title={toc.title}
                style={{
                  color: "white"
                }}
              >
                - {toc.title}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TableOfConent;
