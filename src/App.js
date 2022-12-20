import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Partners from "./components/Partners";
//
import { getContentData } from "./redux-toolkit/content/contentSlice";

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
  const Hjalpdodsboale = lazy(() => import("./blocks/ale/Hjalpdodsboale"));
  const Saljadosboale = lazy(() => import("./blocks/ale/Saljadosboale"));
  const Tommadodsboale = lazy(() => import("./blocks/ale/Tommadodsboale"));
  const Uppkopdodsboale = lazy(() => import("./blocks/ale/Uppkopdodsboale"));
  const Varderadodsboale = lazy(() => import("./blocks/ale/Varderadodsboale"));
  const DodsboGoteborg = lazy(() => import("./blocks/DodsboGoteborg"));
  const Bortforslingdodsbofrolunda = lazy(() =>
    import("./blocks/frolunda/Bortforslingdodsbofrolunda")
  );
  const Saljadodsbofrolunda = lazy(() =>
    import("./blocks/frolunda/Saljadodsbofrolunda")
  );
  const Tommadodsbofrolunda = lazy(() =>
    import("./blocks/frolunda/Tommadodsbofrolunda")
  );
  const Uppkopdodsbofrolunda = lazy(() =>
    import("./blocks/frolunda/Uppkopdodsbofrolunda")
  );
  const Varderadodsbofrolunda = lazy(() =>
    import("./blocks/frolunda/Varderadodsbofrolunda")
  );
  const Bortforslinghisingen = lazy(() =>
    import("./blocks/Hisingen/Bortforslinghisingen")
  );
  const Saljadodsbohisingen = lazy(() =>
    import("./blocks/Hisingen/Saljadodsbohisingen")
  );
  const Tommadodsbohisingen = lazy(() =>
    import("./blocks/Hisingen/Tommadodsbohisingen")
  );
  const Uppkopdodsbohisingen = lazy(() =>
    import("./blocks/Hisingen/Uppkopdodsbohisingen")
  );
  const Varderadodsbohisingen = lazy(() =>
    import("./blocks/Hisingen/Varderadodsbohisingen")
  );
  const ExternaLankar = lazy(() =>
    import("./components/externalLinks/ExternaLankar")
  );
  const Dodsboanmalan = lazy(() => import("./pages/InfoPages/Dodsboanmalan"));
  const Dodsbodelagare = lazy(() => import("./pages/InfoPages/Dodsbodelagare"));
  const Dodsboet = lazy(() => import("./pages/InfoPages/Dodsboet"));
  const SaljaDodsbo = lazy(() => import("./pages/InfoPages/SaljaDodsbo"));
  //
  const DodsboUppkopare = lazy(() =>
    import("./blocks/Goteborg/DodsboUppkopare")
  );
  const Dodsbouppkoparegoteborg = lazy(() =>
    import("./blocks/Goteborg/Dodsbouppkoparegoteborg")
  );
  const Tommerdodsbo = lazy(() => import("./blocks/Goteborg/Tommerdodsbo"));
  const Dodsbofirma = lazy(() => import("./blocks/Goteborg/Dodsbofirma"));
  //
  const Uppkopavbohag = lazy(() => import("./blocks/Goteborg/Uppkopavbohag"));
  const Tommadodsbo = lazy(() => import("./blocks/Goteborg/Tommadodsbo"));
  const Foretagsomkoperbohag = lazy(() =>
    import("./blocks/Goteborg/Foretagsomkoperbohag")
  );
  //
  const Oppetider = lazy(() => import("./components/Oppetider"));
  const Recensioner = lazy(() => import("./components/Recensioner"));
  const Seo = lazy(() => import("./components/SEO/Seo"));
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);
  const contentData = useSelector(getContentData);

  const getTipsSearch = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com"
      }
    };
    try {
      fetch(
        "https://google-search72.p.rapidapi.com/search?query=d%C3%B6dsbo&gl=sv&lr=sv&num=10&start=0&sort=relevance",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addNews(response.items)));
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
            <Route
              path="/"
              element={<Home videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-dodsbo-goteborg"
              element={
                <Tommadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-goteborg"
              element={
                <Saljadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-goteborg"
              element={
                <Uppkopdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo-goteborg"
              element={
                <Varderadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-goteborg"
              element={
                <Bortforslingdodsbogoteborg
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="bortforsling-dodsbo-ulricehamn"
              element={
                <Bortforslingdodsboulricehamn
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="vardera-dodsbo-ulricehamn"
              element={
                <Varderadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-ulricehamn"
              element={
                <Hjalpdodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-ulricehamn"
              element={
                <Saljadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-ulricehamn"
              element={
                <Tommadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-ulricehamn"
              element={
                <Uppkopdodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-goteborg"
              element={
                <Hjalpdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-kungalv"
              element={
                <BortforslingDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-kungalv"
              element={
                <HjalpDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-kungalv"
              element={
                <SaljaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kungalv"
              element={
                <TommaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-kungalv"
              element={
                <VarderaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-kungalv"
              element={
                <UppkopDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-ale"
              element={
                <Bortforslingdodsboale videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-ale"
              element={<Hjalpdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo-ale"
              element={<Saljadosboale videoText={contentData?.videoText} />}
            />
            <Route
              path="tomma-dodsbo-ale"
              element={<Tommadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-dodsbo-ale"
              element={<Uppkopdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="vardera-dodsbo-ale"
              element={<Varderadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-goteborg"
              element={<DodsboGoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="bortforsling-dodsbo-frolunda"
              element={
                <Bortforslingdodsbofrolunda
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-frolunda"
              element={
                <Tommadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-frolunda"
              element={
                <Uppkopdodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-frolunda"
              element={
                <Varderadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-hisingen"
              element={
                <Varderadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-hisingen"
              element={
                <Tommadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-hisingen"
              element={
                <Saljadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-hisingen"
              element={
                <Uppkopdodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-hisingen"
              element={
                <Bortforslinghisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsboanmalan"
              element={<Dodsboanmalan videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo"
              element={<SaljaDodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="Dodsboet"
              element={<Dodsboet videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbodelagare"
              element={<Dodsbodelagare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbouppkopare"
              element={<DodsboUppkopare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbouppkopare-goteborg"
              element={
                <Dodsbouppkoparegoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommerdodsbo"
              element={<Tommerdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbofirma"
              element={<Dodsbofirma videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-av-bohag"
              element={<Uppkopavbohag videoText={contentData?.videoText} />}
            />
            <Route
              path="foretag-som-koper-bohag"
              element={
                <Foretagsomkoperbohag videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo"
              element={<Tommadodsbo videoText={contentData?.videoText} />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <Besok />
          <Oppetider />
          <Recensioner />
          <Footer />
          <Links />
          <ExternaLankar />
          <Seo />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
