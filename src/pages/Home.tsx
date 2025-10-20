import React from "react";
import Picture1 from './../assets/Pkawaii.png'
import Picture2 from './../assets/Pkawaii2.png'
import { useThemeMode } from "../hooks/useThemeModel";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

const Home=() =>{
  const { mode } = useThemeMode();
  const {t}= useTranslation();
  return (
    <HomeWrapper>
      <img
        src={mode === "dark" ? Picture1 : Picture2}
      />
      <Title>
      {t("home.title", { wave: "" })} <Wave aria-hidden="true">👋</Wave>
    </Title>
    <Body>{t("home.body1")}</Body>
    <Body>{t("home.body2")}</Body>
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
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  margin: 4.5rem 0rem;
  img {
    width: 450px;
    height: auto;
    display: block;
  }
`;
const Body = styled.div`
 padding: 0rem 15rem;
`;



