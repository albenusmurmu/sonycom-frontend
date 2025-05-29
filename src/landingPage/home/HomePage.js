import React from "react";


// import Home from "./Home";
import Showcase from './Showcase';
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import TechVerse from "./Techverse";
import TestimonialsCarousel from "./ClientReview";


function HomePage(){
    return(
        <>
        <Hero />
        <Showcase />
        <Testimonials/>
        <TechVerse/>
        <TestimonialsCarousel/>
        </>
    )
}

export default HomePage;