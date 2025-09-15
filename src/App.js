import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpeningPage from "./OpeningPage";  
import ResumeOptions from "./Resume/ResumeOptions"; // import your ResumeOptions page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/resume-options" element={<ResumeOptions />} />
      </Routes>
    </Router>
  );
}

export default App;
