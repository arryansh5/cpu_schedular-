import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Simulator from "./pages/Simulator";
import Results from "./pages/Results";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex gap-6">
        <Link to="/" className="font-semibold">Home</Link>
        <Link to="/simulator" className="font-semibold">Simulator</Link>
        <Link to="/results" className="font-semibold">Results</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </main>
    </div>
  );
}
