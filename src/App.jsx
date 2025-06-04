import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import EmergencyPage from "./Pages/EmergencyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="Emergency" element={<EmergencyPage />} />}
        {<Route path="" element={<Home />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
