import React from "react";
import "./Tips.css";
import { getNewsData } from "../../redux-toolkit/news/newsSlice";
import { useSelector } from "react-redux";
const Tips = ({ query }) => {
  const newsData = useSelector(getNewsData);
  console.log(newsData);
  return (
    <div className="tips">
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
          opacity: "0.7",
        }}
      >
        Data hämtad från google search
      </p>
    </div>
  );
};

export default Tips;
