import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game/Game";
import About from "./pages/About/About";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
