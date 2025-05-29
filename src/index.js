import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./landingPage/ScrollToTop"; // ✅ import here
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./index.css";

import HomePage from "./landingPage/home/HomePage";
import ServicePage from "./landingPage/services/ServicePage";
import AboutPage from "./landingPage/about/AboutPage";
import ContactPage from "./landingPage/contact/ContactPage";
// import ResumePage from "./Portfolio/resume/ResumePage";

import NotFound from "./landingPage/NotFound";
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import BlogsPage from "./landingPage/blog/BlogsPage";
// import StudyPage from "./landingPage/study/StudyPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ScrollToTop /> {/* ✅ Put this right after <Router> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="/services" element={<ServicePage />} />            
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
