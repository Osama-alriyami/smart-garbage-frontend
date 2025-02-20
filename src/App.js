import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddGarbage from "./pages/AddGarbage";
import Navbar from "./components/Navbar"; 
import './index.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Add Navbar */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddGarbage />} />
      </Routes>
    </div>
  );
}

export default App;
