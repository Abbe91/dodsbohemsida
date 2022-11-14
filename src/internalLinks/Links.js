import React from "react";
import { internallinks } from "../utils/links/internalLinks";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links-footer-container">
      <section style={{ margin: "1rem 1rem" }}>
        <h4>Andra har även sökt</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {internallinks?.map((link, i) => (
            <Link
              id={i}
              to={link.path}
              style={{
                margin: "0.1rem 0",
                fontSize: "0.9rem",
                color: "black",
                opacity: 0.8
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Links;
