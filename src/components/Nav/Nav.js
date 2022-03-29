import React, { useState } from "react";
import "./Nav.css";
import { navlinks } from "../../utils/data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../../utils/images/effect.png";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [userMail, setUserEmail] = useState("info@effectenergispar.se");
  const [userPhone, setUserPhone] = useState("070-3424117");
  return (
    <>
      <section className="top-nav">
        <div className="user-contact">
          <div>
            <a href={`tel:${userPhone}`}>
              <AiTwotonePhone />
            </a>
            <p>{userPhone}</p>
          </div>
          <div>
            <a href={`mailto:${userMail}`}>
              <AiOutlineMail />
            </a>
            <p>{userMail}</p>
          </div>
        </div>
      </section>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar" onClick={() => setShowNav(!showNav)}>
          <AiOutlineBars />
        </div>
        <div className="nav-links">
          {navlinks.map((link) => (
            <div key={link.id}>
              <button type="button">{link.label}</button>
            </div>
          ))}
        </div>
        <div className={showNav ? "nav-menu show-nav" : "nav-menu"}>
          <button
            onClick={() => setShowNav(!showNav)}
            className="nav-btn-close"
          >
            <AiOutlineCloseCircle />
          </button>
          {navlinks.map((link) => (
            <div key={link.id} className="nav-links-div">
              <button type="button">{link.label}</button>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
