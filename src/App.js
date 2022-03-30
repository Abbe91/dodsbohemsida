import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SankaVarmekostanden from "./components/SankaVarmekostander/SankaVarmekostanden";
import Luftvarmepump from "./components/Luftvarmepump/Luftvarmepump";
import LuftVattenVarmePump from "./components/LuftVattenVarmePump/LuftVattenVarmePump";
import Bergvarme from "./components/Bergvarme/Bergvarme";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {
  setWeatherData,
  getCustomerData,
} from "./redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWheaterData } from "./api/index";
import { addNews } from "./redux-toolkit/news/newsSlice";
function App() {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "google-web-search.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    },
  };
  const getTipsSearch = async () => {
    try {
      const resp = fetch(
        "https://google-web-search.p.rapidapi.com/?query=s%C3%A4nka%20v%C3%A4rmekostaden&gl=SE&max=10",
        options
      )
        .then((response) => response.json())
        .then((response) => dispatch(addNews(response.results)))
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
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sankavarmekostnaden"
            element={<SankaVarmekostanden />}
          />
          <Route path="/luftvarmepump" element={<Luftvarmepump />} />
          <Route
            path="/luftvattenvarmepump"
            element={<LuftVattenVarmePump />}
          />
          <Route path="/bergvarme" element={<Bergvarme />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
