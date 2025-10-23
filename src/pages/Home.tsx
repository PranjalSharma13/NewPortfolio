import React from "react";
import Picture1 from './../assets/Pkawaii.png'
import Picture2 from './../assets/Pkawaii2.png'
import { useThemeMode } from "../hooks/useThemeModel";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import TechGirlImg  from "../assets/tech girl.png"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  const { mode } = useThemeMode();
  const { t } = useTranslation();
  return (
    <HomeWrapper>
      <Parallax pages={3}>
      <ParallaxLayer speed={-20} className="layer">
        <FirstSection>
          <img src={mode === "dark" ? Picture2 : Picture1} />
          <Title>
            {t("home.title", { wave: "" })} <Wave aria-hidden="true">👋</Wave>
          </Title>

        </FirstSection>
      </ParallaxLayer>
      <ParallaxLayer speed={-20} className="layer">
        <SecondSection>
        <Body>{t("home.body1")}</Body>
        <img src={TechGirlImg}></img>
        </SecondSection>
      </ParallaxLayer>
      <ParallaxLayer speed={-20} className="layer">
        <ThirdSection>
        <Body>{t("home.body2")}</Body>
        </ThirdSection>
      </ParallaxLayer>
      </Parallax>
    </HomeWrapper>
  );
}
export default Home
const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60%,100% { transform: rotate(0deg); }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Wave = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const HomeWrapper = styled.div`
  align-items: center;
  margin: 5rem 0rem;
  display: block
`;

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  img {
    width: 550px;
    height: auto;
    display: block;
  }
`;
const Body = styled.div`
 padding: 0rem 15rem;
`;

const ThirdSection = styled.section`
  margin: 5rem 0rem;
  display: flex;
  flex-direction: row;
`;
const SecondSection = styled.section`
  margin: 5rem 0rem;
  display: flex;
  flex-direction: row;
  img {
    width: 550px;
    height: auto;
    display: block;
  }
`;



