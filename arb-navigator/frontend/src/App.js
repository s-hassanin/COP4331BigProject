import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';

function App() {
  console.log("App");
  return (
    <BrowserRouter>
    <Routes>
      <Switch>
      <Route path="/" index element={<LoginPage />} />
      <Route path="/login" index element={<LoginPage />} />
      <Route path="/cards" index element={<CardPage />} />
      <Route path="/signup" index element={<SignupPage />} />
      </Switch>
    </Routes>
  </BrowserRouter>
);
}

export default App;
