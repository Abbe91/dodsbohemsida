import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SankaVarmekostanden from "./components/SankaVarmekostander/SankaVarmekostanden";
import Luftvarmepump from "./components/Luftvarmepump/Luftvarmepump";
import LuftVattenVarmePump from "./components/LuftVattenVarmePump/LuftVattenVarmePump";
import Bergvarme from "./components/Bergvarme/Bergvarme";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
function App() {
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
      </Router>
    </div>
  );
}

export default App;
