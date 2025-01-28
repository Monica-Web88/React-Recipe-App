import React, { useState, useEffect } from "react";
import MainLayout from "./MainLayout";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
}
