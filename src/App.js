import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SankaVarmekostanden from "./components/SankaVarmekostander/SankaVarmekostanden";
import Luftvarmepump from "./components/Luftvarmepump/Luftvarmepump";
import LuftVattenVarmePump from "./components/LuftVattenVarmePump/LuftVattenVarmePump";
import Bergvarme from "./components/Bergvarme/Bergvarme";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import {
  setWeatherData,
  getCustomerData,
} from "./redux-toolkit/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWheaterData } from "./api/index";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const customerData = useSelector(getCustomerData);
  useEffect(() => {
    getWheaterData(customerData.coords.lat, customerData.coords.lng).then(
      (data) => {
        dispatch(setWeatherData(data));
      }
    );
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
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
      </Router>
    </div>
  );
}

export default App;
