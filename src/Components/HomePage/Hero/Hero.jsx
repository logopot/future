import React from "react";
import data from "../../Data/Data.json";
import heroImg from "../../../Img/Hero/robot.jpg";
import {
  HeroContainer,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroDesc,
  HeroButton,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroContainer bg={heroImg}>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>{data.hero.title}</HeroTitle>
        <HeroDesc>{data.hero.desc}</HeroDesc>
        <HeroButton href="/tech-news">{data.hero.cta}</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
