import React from "react";
import Picture1 from "./../assets/Pkawaii.png";
import Picture2 from "./../assets/Pkawaii2.png";
import { useThemeMode } from "../hooks/useThemeModel";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import TechGirlImg from "../assets/tech girl.png";
import TechGirlImg1 from "../assets/finalpic.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Body } from "../theme/typography";
import Sun from  "../assets/sun.png";
import Moon from "../assets/moon.png";

const Home = () => {
  const { mode } = useThemeMode();
  const { t } = useTranslation();

  return (
    <HomeWrapper>
      <ParallaxRoot pages={5} style={{ height: "100%" }}>
        {/* ---------- Page 1 ---------- */}
        <ParallaxLayer offset={0} speed={0}>
          <Frame>
            <FirstSection>
              <img src={mode === "dark" ? Picture2 : Picture1} alt="" />
              <Title>
                {t("home.title", { wave: "" })} <Wave aria-hidden="true">👋</Wave>
              </Title>
            </FirstSection>
          </Frame>
        </ParallaxLayer>

        {/* ---------- Sticky #1 (RIGHT): pages 2–3 ---------- */}
        <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ pointerEvents: "none", zIndex: 0 }}>
          <Frame>
            <StickyRight>
              <StickyImg src={TechGirlImg} alt="Tech girl" />
            </StickyRight>
          </Frame>
        </ParallaxLayer>

        {/* ---------- Content pages 2 & 3 ---------- */}
        <ParallaxLayer offset={1} speed={0} style={{ zIndex: 1 }}>
          <Frame>
            <ContentLeft>
              <Inner><Body>{t("home.body1")}</Body></Inner>
            </ContentLeft>
          </Frame>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} style={{ zIndex: 1 }}>
          <Frame>
            <ContentLeft>
              <Inner><Body>{t("home.body2")}</Body></Inner>
            </ContentLeft>
          </Frame>
        </ParallaxLayer>

        {/* ---------- Sticky #2 (LEFT bg): pages 4–5 ---------- */}
       {/* ---------- Sticky #2 (LEFT images): pages 4–5 ---------- */}
<ParallaxLayer sticky={{ start: 3, end: 5 }} style={{ pointerEvents: "none", zIndex: 0 }}>
  <Frame>
    <StickyArt>
      {/* left image (tech girl) */}
      <img className="left" src={TechGirlImg1} alt="" />

      {/* right image (sun/moon) */}
      <img className="right" src={mode === "dark" ? Moon : Sun} alt="" />
    </StickyArt>
  </Frame>
</ParallaxLayer>


        {/* ---------- Page 4 ---------- */}
        <ParallaxLayer offset={3} speed={0} style={{ zIndex: 10 }}>
          <Frame>
            <ContentRight style={{ position: "relative", zIndex: 1 }}>
              <Inner><Body>{t("home.body3")}</Body></Inner>
            </ContentRight>
          </Frame>
        </ParallaxLayer>

        {/* ---------- Page 5 ---------- */}
        <ParallaxLayer offset={4} speed={0} style={{ zIndex: 1 }}>
          <Frame>
            <ContentRight>
              <Inner><Body>{t("home.body4")}</Body></Inner>
            </ContentRight>
          </Frame>
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
  height: 100vh;
  overflow: hidden;
  max-width: 1400px;

  /* Shared tokens for this page */
  --imgW: clamp(240px, 38vw, 560px);
  --gutter: clamp(16px, 6vw, 64px);
`;

/* Clamp the whole experience to 1500px and center it */
const Frame = styled.div`
  width: min(100%, 1500px);
  margin-inline: auto;
  height: 100%;
  position: relative;
  padding-inline: max(var(--gutter), calc((100vw - 1500px) / 2));
`;

const ParallaxRoot = styled(Parallax)`
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Wave = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const FirstSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 400px;
    height: auto;
  }
`;

/* Sticky RIGHT art (hidden on small to avoid overlap) */
const StickyRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;
`;

const StickyImg = styled.img`
  width: var(--imgW);
  height: auto;
  display: block;
  opacity: 0.95;

  @media (max-width: 900px) {
    display: none; /* kill overlap on small screens */
  }
`;

/* Left text; reserve space for sticky art, but collapse on small */
const ContentLeft = styled.section`
  height: 100vh;
  display: grid;
  align-items: center;
  box-sizing: border-box;

  padding-right: calc(var(--imgW) + var(--gutter));

  @media (max-width: 900px) {
    padding-right: 0; /* sticky image hidden -> no reserve */
  }
`;

/* Right text; mirror of left; collapse on small */
const ContentRight = styled.section`
  height: 100vh;
  display: grid;
  align-items: center;
  box-sizing: border-box;

  padding-left: calc(var(--imgW) + var(--gutter));

  @media (max-width: 900px) {
    padding-left: 0;
  }
`;

/* Keep line-length readable */
const Inner = styled.div`
  max-width: 70ch;
`;

const StickyArt = styled.div`
  position: relative;
  height: 100%;
  pointer-events: none;

  /* left art */
  img.left {
    position: absolute;
    left: var(--gutter);
    top: 60%;
    transform: translateY(-50%);
    width: clamp(200px, 28vw, 520px);   /* ← set exactly what you want */
    height: auto;
  }

  /* right art */
  img.right {
    position: absolute;
    right: var(--gutter);
    top: 30%;
    right: -5%;
    transform: translateY(-50%);
    width: clamp(140px, 18vw, 300px);   /* ← independent size */
    height: auto;
  }

  @media (max-width: 900px) {
    display: none; /* keep mobile clean */
  }
`;

