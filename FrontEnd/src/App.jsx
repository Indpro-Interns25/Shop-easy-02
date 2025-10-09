import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/LoginPage.jsx";
import Register from "./components/RegisterPage.jsx";
import Footer from "./components/Footer.jsx"; // Optional if you have it
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Common Navbar */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;