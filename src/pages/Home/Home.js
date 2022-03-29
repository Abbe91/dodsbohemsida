import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/">Home</Link>
      <Link to="/sankavarmekostnaden">sankavarmekostnaden</Link>
      <Link to="/luftvarmepump">luftvarmepump</Link>
      <Link to="/luftvattenvarmepump">luftvattenvarmepump</Link>
      <Link to="/bergvarme">bergvarme</Link>
    </div>
  );
};

export default Home;
