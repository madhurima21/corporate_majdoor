import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./all_css/opening_page.css"; // Import your CSS
import LoginRegister from "./user_authantication/LoginRegister";

export default function OpeningPage() {
    const [showForm, setShowForm] = useState(false); // State to toggle modal
    return (
        <>
            <header>
                <div className="logo">JobPortal</div>
                <nav>
                    <a href="#" onClick={(e) => { e.preventDefault(); setShowForm(true); }}>Login/Register</a>
                    <a href="#">Interview Question</a>
                    <a href="#">Job Opportunities</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>

            <div>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                >
                    <div className="slide internship">
                        <h2>Internship</h2>
                    </div>
                    <div className="slide course">
                        <h2>Course</h2>
                    </div>
                    <div
                        className="slide resume"
                        onClick={() => window.location.href = "/resume-options"} // or use navigate() with React Router
                        style={{ cursor: "pointer" }}
                    >
                        <h2>Resume Builder</h2>
                    </div>
                </Carousel>
            </div>

            <section className="animated-text">
                <p>Find your dream job and take the first step towards your career goals.</p>
                <p>Prepare with expert-curated interview questions and resources.</p>
                <p>Build a professional resume that stands out to recruiters.</p>
            </section>

            <footer>
                <div className="social">
                    <a href="https://wa.me/" target="_blank" rel="noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="location">📍 Newtown, Kolkata</div>
            </footer>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setShowForm(false)}>X</button>
                        <LoginRegister />
                    </div>
                </div>
            )}
        </>
    );
}
