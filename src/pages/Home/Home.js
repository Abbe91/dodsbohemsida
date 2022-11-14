import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/tommadodsbogoteborg">Tömma dödsbo Göteborg</Link>
      <Link to="/uppkopdodsbogoteborg">Uppköp dödsbo Göteborg</Link>
      <Link to="/luftvattenvarmepump">luftvattenvarmepump</Link>
      <Link to="/bergvarme">bergvarme</Link>
    </div>
  );
};

export default Home;
