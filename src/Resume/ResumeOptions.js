import React from "react";
import "../all_css/resume_options.css"; // create a CSS file for styling

export default function ResumeOptions() {
  return (
    <div className="resume-options-container">
      <h1>What’s your experience level?</h1>
      <div className="options-grid">
        <div className="option-card student">
          <h2>Student</h2>
          <p>Build a resume tailored for students.</p>
        </div>
        <div className="option-card fresher">
          <h2>Fresher</h2>
          <p>Perfect for freshers entering the job market.</p>
        </div>
        <div className="option-card experienced">
          <h2>Experienced</h2>
          <p>Showcase your professional experience effectively.</p>
        </div>
      </div>
    </div>
  );
}
