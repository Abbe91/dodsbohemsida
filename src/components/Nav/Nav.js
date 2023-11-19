import React, { useState } from "react";
import "./Nav.css";
import CallIcon from '@material-ui/icons/Call';
import { useAuth0 } from "@auth0/auth0-react";
import { navlinks } from "../../utils/data";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addElement } from "../../redux-toolkit/scrollElement/scrollElementSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCustomerData } from "../../redux-toolkit/customer/customerSlice";
import Links from "../externalLinks/Links";

const Nav = () => {
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const customerData = useSelector(getCustomerData);
  const handleClick = (e) => {
    dispatch(addElement(e.currentTarget.innerText));
    if (e.currentTarget.innerText === "Om oss") {
      const value = e.currentTarget.innerText.split("oss")[0];
      dispatch(addElement(value));
    }

    setShowNav(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo" onClick={() => (window.location.href = "/")}>
          <h2 className="logo">Dödsbo</h2>
          <h2 className="logo">Jouren</h2>
        </div>
     
       <a href={`tel:${customerData.phone}`} style={{display:'flex',alignItems:'center', color:'#eabb12'}}>
       <CallIcon style={{fontSize:'1.2rem'}}/>
       <p style={{marginLeft:'0.3rem',fontSize:'0.8rem'}}>Ring</p>
          </a>
    
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
                    color: "black",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    marginRight: " 0.75rem",
                    opacity: 0.8,
                    letterSpacing: "1px"
                  }}
                >
                  <Link
                    to={link.path}
                    style={{ color: "black" }}
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                </button>
              );
            } else {
              return (
                <div key={link.id} style={{ color: "black" }}>
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
          {!isAuthenticated && (
            <button
              style={{
                background: "#e3c148",
                width: "6.5rem",
                height: "1.8rem",
                marginTop: "2rem",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() => loginWithRedirect()}
            >
              Logga in
            </button>
          )}

          {isAuthenticated && (
            <button
              style={{
                background: "#e3c148",
                width: "6.5rem",
                height: "1.8rem",
                marginTop: "2rem",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logga ut
            </button>
          )}
          {isAuthenticated && (
            <Link
              to="/dashboard-main"
              style={{
                background: "#e3c148",
                width: "7.5rem",
                height: "2rem",
                marginTop: "0.5rem",
                borderRadius: "5px",
                fontWeight: "bold",
                textAlign: "center",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Dashboard
            </Link>
          )}
          <Links />
        </div>
      </nav>
    </>
  );
};

export default Nav;
