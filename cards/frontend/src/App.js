import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import UploadPage from './pages/UploadPage';

function App() {
  console.log("App");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index element={<LoginPage />} />
      <Route path="/cards" index element={<CardPage />} />
      <Route path="/upload" index element={<UploadPage />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;
