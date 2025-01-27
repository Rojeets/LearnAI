import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Make sure ExerciseList is rendered here */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/user" element={<CreateUser />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
