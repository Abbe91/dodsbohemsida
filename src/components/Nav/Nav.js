import React, { useState } from "react";
import "./Nav.css";
import { navlinks } from "../../utils/data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { addElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Links from "../externalLinks/Links";

const Nav = () => {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);
  const [showNav, setShowNav] = useState(false);
  const handleClick = (e) => {
    dispatch(addElement(e.currentTarget.innerText));
    if (e.currentTarget.innerText === "Om oss") {
      const value = e.currentTarget.innerText.split("oss")[0];
      dispatch(addElement(value));
    }

    setShowNav(false);
  };
  const clickToCall = () => {
    const today = new Date();
  };

  return (
    <>
      <section className="top-nav" style={{ margin: "0.5rem 0" }}>
        <div className="user-contact">
          <div>
            <p>
              <strong>Ring oss</strong>
            </p>
            {/* <a href={`mailto:${customerData.email}`}>
              <AiOutlineMail />
            </a>
            <p>{customerData.email}</p> */}
          </div>
          <div>
            <a href={`tel:${customerData.phone}`} onClick={clickToCall}>
              <Button
                variant="contained"
                style={{ background: "#0369a1", color: "white" }}
              >
                <AiTwotonePhone />
              </Button>
              {/* <p>{customerData.phone}</p> */}
            </a>
            <a href={"#main-comp-cont"}>
              <Button
                variant="contained"
                style={{
                  background: "#0369a1",
                  color: "white",
                  height: "1.6rem",
                  fontSize: "0.75rem"
                }}
              >
                Gratiskollen
              </Button>
              {/* <p>{customerData.phone}</p> */}
            </a>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav-logo">
          <h2 className="logo">{customerData.business}</h2>
        </div>
        <div className="navbar" onClick={() => setShowNav(!showNav)}>
          <AiOutlineBars />
        </div>
        <div className="nav-links">
          {navlinks.map((link) => {
            if (link.path) {
              return (
                <button
                  key={link.id}
                  style={{
                    background: "transparent",
                    border: "navajowhite",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    marginRight: " 0.75rem",
                    opacity: 0.8
                  }}
                >
                  <Link to={link.path} style={{ color: "white" }}>
                    {link.label}
                  </Link>
                </button>
              );
            } else {
              return (
                <div key={link.id}>
                  <button type="button" onClick={handleClick}>
                    {link.label}
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
          <button
            onClick={() => setShowNav(!showNav)}
            className="nav-btn-close"
          >
            <AiOutlineCloseCircle />
          </button>
          {navlinks.map((link, i) => {
            if (link.path) {
              return (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "black",
                    margin: "0.3rem 0",
                    fontSize: "1rem"
                  }}
                  key={link.id}
                >
                  <Link
                    to={link.path}
                    style={{ color: "black" }}
                    className="nav-menu-link"
                  >
                    {link.label}
                  </Link>
                </button>
              );
            } else {
              return (
                <div key={link.id}>
                  <button type="button" onClick={handleClick}>
                    {link.label}
                  </button>
                </div>
              );
            }
          })}
          <Links />
        </div>
      </nav>
    </>
  );
};

export default Nav;
