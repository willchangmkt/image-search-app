// src > App.js

import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";
// 套用CSS樣式
import "./styles/style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
