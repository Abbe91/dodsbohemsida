import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Besok from "./components/Besok";
import Partners from "./components/Partners";
//

import {
  setWeatherData,
  getCustomerData
} from "./redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWheaterData } from "./api/index";
import { addNews, setBingNews } from "./redux-toolkit/news/newsSlice";
import Links from "./internalLinks/Links";
import { Audio } from "react-loader-spinner";
function App() {
  // lazy imports
  const Uppkopdodsbogoteborg = lazy(() =>
    import("./components/uppkopdodsbogoteborg/Uppkopdodsbogoteborg")
  );
  const Error = lazy(() => import("./pages/Error/Error"));
  const Home = lazy(() => import("./pages/Home/Home"));
  const Footer = lazy(() => import("./components/Footer/Footer"));
  const Tommadodsbogoteborg = lazy(() =>
    import("./components/tommadodsbogoteborg/Tommadodsbogoteborg")
  );
  const Varderadodsbogoteborg = lazy(() =>
    import("./blocks/Varderadodsbogoteborg")
  );
  const Saljadodsbogoteborg = lazy(() =>
    import("./blocks/Saljadodsbogoteborg")
  );
  const Bortforslingdodsbogoteborg = lazy(() =>
    import("./blocks/Bortforslingdodsbogoteborg")
  );
  const Bortforslingdodsboulricehamn = lazy(() =>
    import("./blocks/Bortforslingdodsboulricehamn")
  );
  const Varderadodsboulricehamn = lazy(() =>
    import("./blocks/Varderadodsboulricehamn")
  );
  const Hjalpdodsboulricehamn = lazy(() =>
    import("./blocks/Hjalpdodsboulricehamn")
  );
  const Saljadodsboulricehamn = lazy(() =>
    import("./blocks/Saljadodsboulricehamn")
  );
  const Tommadodsboulricehamn = lazy(() =>
    import("./blocks/Tommadodsboulricehamn")
  );
  const Uppkopdodsboulricehamn = lazy(() =>
    import("./blocks/Uppkopdodsboulricehamn")
  );
  const Hjalpdodsbogoteborg = lazy(() =>
    import("./blocks/Hjalpadodsbogoteborg")
  );
  const Besok = lazy(() => import("./components/Besok"));
  const BortforslingDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/BortforslingDodsboKungalv")
  );
  const HjalpDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/HjalpDodsboKungalv")
  );
  const SaljaDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/SaljaDodsboKungalv")
  );
  const TommaDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/TommaDodsboKungalv")
  );
  const VarderaDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/VarderaDodsboKungalv")
  );
  const UppkopDodsboKungalv = lazy(() =>
    import("./blocks/kungalv/UppkopDodsboKungalv")
  );
  const Bortforslingdodsboale = lazy(() =>
    import("./blocks/ale/Bortforslingdodsboale")
  );
  //

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
      <Suspense
        fallback={
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        }
      >
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
            <Route
              path="bortforsling-dodsbo-kungalv"
              element={<BortforslingDodsboKungalv />}
            />
            <Route
              path="hjalp-dodsbo-kungalv"
              element={<HjalpDodsboKungalv />}
            />
            <Route
              path="salja-dodsbo-kungalv"
              element={<SaljaDodsboKungalv />}
            />
            <Route
              path="tomma-dodsbo-kungalv"
              element={<TommaDodsboKungalv />}
            />
            <Route
              path="vardera-dodsbo-kungalv"
              element={<VarderaDodsboKungalv />}
            />
            <Route
              path="uppkop-dodsbo-kungalv"
              element={<UppkopDodsboKungalv />}
            />
            <Route
              path="bortforsling-dodsbo-ale"
              element={<Bortforslingdodsboale />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <Besok />
          <Footer />
          <Links />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
