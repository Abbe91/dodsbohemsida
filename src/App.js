import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Uppkopdodsbogoteborg from "./components/uppkopdodsbogoteborg/Uppkopdodsbogoteborg";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Tommadodsbogoteborg from "./components/tommadodsbogoteborg/Tommadodsbogoteborg";
import Varderadodsbogoteborg from "./blocks/Varderadodsbogoteborg";
import Saljadodsbogoteborg from "./blocks/Saljadodsbogoteborg";
import Bortforslingdodsbogoteborg from "./blocks/Bortforslingdodsbogoteborg";
import Bortforslingdodsboulricehamn from "./blocks/Bortforslingdodsboulricehamn";
import Varderadodsboulricehamn from "./blocks/Varderadodsboulricehamn";
import Hjalpdodsboulricehamn from "./blocks/Hjalpdodsboulricehamn";
import Saljadodsboulricehamn from "./blocks/Saljadodsboulricehamn";
import Tommadodsboulricehamn from "./blocks/Tommadodsboulricehamn";
import Uppkopdodsboulricehamn from "./blocks/Uppkopdodsboulricehamn";
import Hjalpdodsbogoteborg from "./blocks/Hjalpadodsbogoteborg";
import {
  setWeatherData,
  getCustomerData
} from "./redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWheaterData } from "./api/index";
import { addNews, setBingNews } from "./redux-toolkit/news/newsSlice";
import Links from "./internalLinks/Links";
import Snabbkollen from "./components/Snabbkollen";
function App() {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);

  const options = {
    method: "GET",
    headers: {
      "X-User-Agent": "desktop",
      "X-Proxy-Location": "SE",
      "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY
    }
  };
  const getTipsSearch = async () => {
    try {
      const resp = fetch(
        `https://google-search3.p.rapidapi.com/api/v1/search/q=s%C3%A4nka%20v%C3%A4rmekostnaden&num=100`,
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addNews(response.results)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  const getBingnews = async () => {
    const options = {
      method: "GET",
      headers: {
        "Accept-Language": "se",
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY
      }
    };
    try {
      const resp = fetch(
        "https://bing-news-search1.p.rapidapi.com/news/search?q=v%C3%A4rmepump&safeSearch=Off&textFormat=Raw&freshness=Month",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(setBingNews(response.value)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWheaterData(customerData.coords.lat, customerData.coords.lng).then(
      (data) => {
        dispatch(setWeatherData(data));
      }
    );
    getTipsSearch();
    getBingnews();
  }, []);
  return (
    <div className="App">
      {/* <div style={{ height: "10rem" }}>
        <Snabbkollen />
      </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tomma-dodsbo-goteborg"
            element={<Tommadodsbogoteborg />}
          />
          <Route
            path="/salja-dodsbo-goteborg"
            element={<Saljadodsbogoteborg />}
          />
          <Route
            path="/uppkop-dodsbo-goteborg"
            element={<Uppkopdodsbogoteborg />}
          />
          <Route
            path="/vardera-dodsbo-goteborg"
            element={<Varderadodsbogoteborg />}
          />
          <Route
            path="/bortforsling-dodsbo-goteborg"
            element={<Bortforslingdodsbogoteborg />}
          />
          <Route
            path="bortforsling-dodsbo-ulricehamn"
            element={<Bortforslingdodsboulricehamn />}
          />
          <Route
            path="vardera-dodsbo-ulricehamn"
            element={<Varderadodsboulricehamn />}
          />
          <Route
            path="hjalp-dodsbo-ulricehamn"
            element={<Hjalpdodsboulricehamn />}
          />
          <Route
            path="salja-dodsbo-ulricehamn"
            element={<Saljadodsboulricehamn />}
          />
          <Route
            path="tomma-dodsbo-ulricehamn"
            element={<Tommadodsboulricehamn />}
          />
          <Route
            path="uppkop-dodsbo-ulricehamn"
            element={<Uppkopdodsboulricehamn />}
          />
          <Route
            path="hjalp-dodsbo-goteborg"
            element={<Hjalpdodsbogoteborg />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <Links />
      </Router>
    </div>
  );
}

export default App;
