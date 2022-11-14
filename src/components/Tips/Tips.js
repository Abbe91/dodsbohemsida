import React from "react";
import "./Tips.css";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import { useSelector } from "react-redux";
import LottieHouse from "../../LottieAnimation/LottieHouse";
import home from "../../utils/animation/hus.json";
const Tips = ({ query, newsData }) => {
  return (
    <div className="tips">
      <div>
        <h1>{query}.</h1>
        <div className="tips-search-result">
          {newsData?.map((news, i) => (
            <div key={i} className="search-result">
              <h4>{news.title}</h4>
              <a href={news.link} target="_blank" rel="noreferrer">
                Läs mer
              </a>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "1px",
            opacity: "0.7"
          }}
        >
          Data hämtad från google search
        </p>
      </div>
      <div className="tips-image">
        <LottieHouse lotti={home} height={400} width={600} />
      </div>
    </div>
  );
};

export default Tips;
