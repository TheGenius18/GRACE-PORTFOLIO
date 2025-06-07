import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";

import Home from "./Pages/Home";
import EmergencyPage from "./Pages/EmergencyPage";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  };

  // Set the initial direction and lang on first render
  useEffect(() => {
    const lng = i18n.language || "en";
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <div className="p-0">
        <Routes>
          <Route path="/Emergency" element={<EmergencyPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
