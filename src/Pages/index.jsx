import React from "react";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/HomePage/Hero/Hero";
import Perspective from "../Components/HomePage/Perspective/Perspective";
import TechInfo from "../Components/HomePage/TechInfo/TechInfo";
import TechNews from "../Components/HomePage/TechNews/TechNews";
import TechTrends from "../Components/HomePage/TechTrends/TechTrends";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
import Works from "../Components/HomePage/Works/Works";
import Nav from "../Components/Nav/Nav";
import BackToTop from "../Components/BackToTop/BackToTop";

import { AppWrapper, FluidContainer } from "./index.styled";

const IndexPage = () => {
  return (
    <AppWrapper>
      <FluidContainer>
        <Nav />
        <Hero />
        <TechNews />
        <TechInfo />
        <TechTrends />
        <Testimonials />
        <Works />
        <Perspective />
        <Footer />
        <BackToTop />
      </FluidContainer>
    </AppWrapper>
  );
};

export default IndexPage;
