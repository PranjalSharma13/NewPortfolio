import React from "react";
import Picture1 from './../assets/Pkawaii.png'
import Picture2 from './../assets/Pkawaii2.png'
import { useThemeMode } from "../hooks/useThemeModel";
import styled, { keyframes } from "styled-components";

const Home=() =>{
  const { mode } = useThemeMode();
  return (
    <section>
      <img
        src={mode === "dark" ? Picture1 : Picture2}
        alt="Kawaii me on a laptop"
      />
      <Title>
      Hey, I’m Pranjal <Wave aria-hidden="true">👋</Wave>
    </Title>
      <p>This is a simple theme toggle example.</p>
    </section>
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


