// import logo from './logo.svg';
import './App.css';
import './Style.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home, About, Shoes, Add, Login } from './pages';
import Navigation from './components/navbar';




function App() {
  return (
    <>
      <Navigation />
        <BrowserRouter>
          <Routes>
            <Route extac path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/add" element={<Add />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
