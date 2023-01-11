import React from "react";
import {
  internallinks,
  popularLinks,
  fleromrodenLinks
} from "../utils/links/internalLinks";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links-footer-container">
      <section style={{ margin: "1rem 1rem" }}>
        <h4>Populära sökningar</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {fleromrodenLinks?.map((link, i) => (
            <a
              key={i}
              href={link.path}
              title={link.title}
              style={{
                margin: "0.1rem 0",
                fontSize: "0.9rem",
                color: "black",
                opacity: 0.8
              }}
            >
              <p className="footer-links">{link.title}</p>
            </a>
          ))}
        </div>
      </section>
      <section style={{ margin: "1rem 1rem" }}>
        <h4>Andra även sökt</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {popularLinks?.map((link, i) => (
            <a
              key={i}
              href={link.path}
              title={link.title}
              style={{
                margin: "0.1rem 0",
                fontSize: "0.9rem",
                color: "black",
                opacity: 0.8
              }}
              className="footer-links"
            >
              <p className="footer-links">{link.title}</p>
            </a>
          ))}
        </div>
      </section>
      <section style={{ margin: "1rem 1rem" }}>
        <h4>Söktes på senast</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {internallinks?.map((link, i) => (
            <a
              key={i}
              href={link.path}
              title={link.title}
              style={{
                margin: "0.1rem 0",
                fontSize: "0.9rem",
                color: "black",
                opacity: 0.8
              }}
              className="footer-links"
            >
              <p className="footer-links">{link.title}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Links;
