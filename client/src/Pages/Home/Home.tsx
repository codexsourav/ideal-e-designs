import React from "react"
import Header from "./Components/Header/Header"
import AboutUs from "./Components/AboutUs/AboutUs";
import Skills from "./Components/Skills/Skills";
import BigSkills from "./Components/BigSkills/BigSkills";
import Services from "./Components/Services/Services";
import VideosSection from "./Components/VideosSection/VideosSection";
import Testimonials from "./Components/Testimonials/Testimonials";
import FAQSection from "./Components/FAQSection/FAQSection";
import LaptopView from "./Components/LaptopView/LaptopView";

function Home() {
    return (
        <>
            <Header />
            <AboutUs />
            <LaptopView />
            <Skills />
            <BigSkills />
            <Services />
            <VideosSection />
            <Testimonials />
            <FAQSection />

        </>
    );
}
export default React.memo(Home);