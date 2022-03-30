import React from "react";
import "./Nyheter.css";
import { getBingNews } from "../../redux-toolkit/news/newsSlice";
import { useSelector } from "react-redux";
const Nyheter = () => {
  const bingNews = useSelector(getBingNews);

  return (
    <div className="bingNews">
      {bingNews?.map((news, i) => {
        return (
          <div key={i} className="bing-news-item">
            <div>
              <img src={news.image.thumbnail.contentUrl} alt={news.name} />
            </div>
            <h4>{news.name}</h4>
            <p>
              {news.description}...
              <a href={news.url} target="_blank" rel="noreferrer">
                Läs mer
              </a>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Nyheter;
