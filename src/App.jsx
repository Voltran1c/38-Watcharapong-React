import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Owner from "./components/Owner";
import UserHomeSector from "./components/UserHomeSector";
import AdminHomeSector from "./components/AdminHomeSector";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/user-home" element={<UserHomeSector />} />
        <Route path="/admin-home" element={<AdminHomeSector />} />
      </Routes>
    </Router>
  );
}

export default App;
