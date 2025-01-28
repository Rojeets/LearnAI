import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import About from "./components/about.component";
import Course from "./components/courses.component";
import Login from "./components/login.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mern" element={<Home />} /> {/* Make sure ExerciseList is rendered here */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
