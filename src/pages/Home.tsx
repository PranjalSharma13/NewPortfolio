import React, { useEffect, useRef, useState } from "react";
import Picture1 from "./../assets/Pkawaii.png";
import Picture2 from "./../assets/Pkawaii2.png";
import { useThemeMode } from "../hooks/useThemeModel";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import TechGirlImg from "../assets/tech girl.png";
import TechGirlImg1 from "../assets/finalpic.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Body } from "../theme/typography";
import Sun from  "../assets/sun.png"
import Moon from "../assets/moon.png"


const Home = () => {
  const { mode } = useThemeMode();
  const { t } = useTranslation();
  const bgImgs = [
  `url(${TechGirlImg1})`,
  `url(${mode === "dark" ? Moon : Sun})`,
];

  return (
    <HomeWrapper>
      <ParallaxRoot pages={5} style={{ height: "100%" }}>
        {/* ---------- Page 1 ---------- */}
        <ParallaxLayer offset={0} speed={0}>
          <FirstSection>
            <img src={mode === "dark" ? Picture2 : Picture1} alt="" />
            <Title>
              {t("home.title", { wave: "" })} <Wave aria-hidden="true">👋</Wave>
            </Title>
          </FirstSection>
        </ParallaxLayer>

        {/* ---------- Sticky #1 (RIGHT): pages 2–3 ---------- */}
        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          style={{ pointerEvents: "none", zIndex: 0 }}
        >
          <StickyRight>
            <StickyImg src={TechGirlImg} alt="Tech girl" />
          </StickyRight>
        </ParallaxLayer>

        {/* ---------- Content pages 2 & 3 ---------- */}
        <ParallaxLayer offset={1} speed={0} style={{ zIndex: 1 }}>
          <ContentLeft>
            <Inner><Body>{t("home.body1")}</Body></Inner>
          </ContentLeft>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} style={{ zIndex: 1 }}>
          <ContentLeft>
            <Inner><Body>{t("home.body2")}</Body></Inner>
          </ContentLeft>
        </ParallaxLayer>

        {/* ---------- Sticky #2 (LEFT): pages 4–5 ---------- */}
        <ParallaxLayer
          sticky={{ start: 3, end: 5 }}
          style={{
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage:bgImgs.join(", "),
            backgroundRepeat: "no-repeat",
            backgroundSize: "var(--imgW) auto",
            backgroundPosition: "left var(--gutter) center, right calc(-10vw) center",
          }}
        />


        {/* ---------- Page 4 (sun drops; content right) ---------- */}
        <ParallaxLayer offset={3} speed={0} style={{ zIndex: 10 }}>
            <ContentRight style={{ position: "relative", zIndex: 1 }}>
              <Inner><Body>{t("home.body3")}</Body></Inner>
            </ContentRight>

        </ParallaxLayer>

        {/* ---------- Page 5 ---------- */}
        <ParallaxLayer offset={4} speed={0} style={{ zIndex: 1 }}>
          <ContentRight>
            <Inner><Body>{t("home.body4")}</Body></Inner>
          </ContentRight>
        </ParallaxLayer>
      </ParallaxRoot>
    </HomeWrapper>
  );
};

export default Home;

/* ---------------- styles ---------------- */

const wave = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60%,100% { transform: rotate(0deg); }
`;

/* Page root = single source of truth for spacing + image width */
const HomeWrapper = styled.main`
  height: 100vh;        /* viewport for Parallax */
  overflow: hidden;     /* kill outer scrollbar */

  /* Shared tokens for this page */
  --imgW: clamp(280px, 38vw, 560px);
  --gutter: clamp(16px, 6vw, 64px);
`;

/* Parallax root */
const ParallaxRoot = styled(Parallax)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
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
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const FirstSection = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 8vh 6vw;
  box-sizing: border-box;

  img {
    width: 550px;
    max-width: 90vw;
    height: auto;
    display: block;
  }
`;

/* ----- Sticky image docks RIGHT (pages 2–3) ----- */
const StickyRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
  padding-right: var(--gutter);
`;

const StickyImg = styled.img`
  width: var(--imgW);
  height: auto;
  display: block;
  opacity: 0.95;
`;

/* ----- Left-side text (reserves space on the right for sticky image) ----- */
const ContentLeft = styled.section`
  height: 100vh;
  display: grid;
  align-items: center;
  box-sizing: border-box;

  padding-left: var(--gutter);
  padding-right: calc(var(--imgW) + var(--gutter));

  @media (max-width: 900px) {
    padding-right: var(--gutter);
  }
`;

/* ----- Right-side text (reserves space on the left for sticky image) ----- */
const ContentRight = styled.section`
  height: 100vh;
  display: grid;
  align-items: center;
  box-sizing: border-box;

  /* mirror of ContentLeft */
  padding-right: var(--gutter);
  padding-left: calc(var(--imgW) + var(--gutter));

  @media (max-width: 900px) {
    padding-left: var(--gutter);
  }
`;

/* Keep line-length readable */
const Inner = styled.div`
  max-width: 70ch;
`;

