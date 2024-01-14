import React from "react";
import Header from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Skills from "./Components/Skills/Skills";
import BigSkills from "./Components/BigSkills/BigSkills";
import Services from "./Components/Services/Services";
import VideosSection from "./Components/VideosSection/VideosSection";
import FAQSection from "./Components/FAQSection/FAQSection";
import LaptopView from "./Components/LaptopView/LaptopView";
import Portfolio from "./Components/Portfolio/Portfolio";

function Home() {
    return (
        <>
            <Header />
            <div id="about"></div>
            <AboutUs />
            <LaptopView />
            <Skills />
            <BigSkills />
            <div id="services"></div>
            <Services />
            <div id="portfolio"></div>
            <Portfolio />
            <VideosSection />
            {/* <Testimonials /> */}
            <FAQSection />

        </>
    );
}
export default React.memo(Home);