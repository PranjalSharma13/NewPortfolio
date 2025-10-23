// components/FloatingActions.tsx
import React, { useCallback, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Globe, Download } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";
import LanguagePickerModal from "./modal/LanguagePickerModal";


const CV_FILE_NAME = "PranjalSharmaN.pdf";
const CV_PATH = "/assets/PranjalSharmaN.pdf";

const FloatingActions = () => {
  const { mode } = useThemeMode(); // "light" | "dark"
  const [openModal, setOpenModal] = useState(false);

  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = CV_FILE_NAME;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <Wrap>
      {/* Stagger: first btn 0ms, second btn 120ms */}
      <DropItem delay={0}>
        <Fab mode={mode} aria-label="Switch language" onClick={() => setOpenModal(true)}>
          <Globe size={25} />
        </Fab>
      </DropItem>

      <DropItem delay={240}>
        <Fab mode={mode} aria-label="Download my CV" onClick={downloadCV}>
          <Download size={25} />
        </Fab>
      </DropItem>

      {openModal && <LanguagePickerModal onClose={() => setOpenModal(false)} />}
    </Wrap>
  );
};

export default FloatingActions;

/* ---------------- styles ---------------- */

const Wrap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
`;

const dropIn = keyframes`
  0%   { transform: translateY(-140vh); opacity: 0; }
  100% { transform: translateY(0);      opacity: 1; }
`;

const DropItem = styled.div<{ delay?: number }>`
  position: relative;
  will-change: transform, opacity;

  /* Slow, clean fall (no bounce) */
  animation: ${dropIn} 1600ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${({ delay = 0 }) => css`animation-delay: ${Math.max(0, delay)}ms;`}

  &:hover > div[data-tip] {
    opacity: 1;
    transform: translateX(-6px);
    pointer-events: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
`;



const Fab = styled.button<{ mode: "light" | "dark" | string }>`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: 1px solid
    ${({ mode }) => (mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(134,130,130,0.08)")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  background: ${({ theme }) => theme?.colors?.bg};
  color: ${({ theme }) => theme?.colors?.text};
  box-shadow: ${({ mode }) =>
    mode === "light" ? "0 8px 24px rgba(80,79,79,0.1)" : "0 8px 24px rgba(0,0,0,0.18)"};
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.25s ease, color 0.25s ease;
  will-change: transform, box-shadow;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ mode }) =>
      mode === "light" ? "0 12px 28px rgba(0,0,0,0.12)" : "0 12px 28px rgba(0,0,0,0.22)"};
  }
  &:active {
    transform: translateY(0);
  }

  svg {
    display: block;
    pointer-events: none;
  }
`;
