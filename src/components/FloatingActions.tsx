// components/FloatingActions.tsx
import React, { useCallback } from "react";
import styled from "styled-components";
import { Globe, Download } from "lucide-react";
import type { i18n as I18n } from "i18next";
import { useThemeMode } from "../hooks/useThemeModel";

/**
 * Language switcher tries common setups in this order:
 * 1) window.i18next (global react-i18next)
 * 2) imported i18n instance (if you wire it later)
 * 3) Fallback: store desired lang and reload so your app can read it on boot
 */

// Type the global window so TS knows about i18next if you expose it
declare global {
  interface Window {
    i18next?: {
      changeLanguage: (lng: string) => Promise<void> | void;
    };
  }
}

// Optional i18n instance (if you export default from src/i18n.ts)
let i18nInstance: I18n | undefined;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  i18nInstance = (require("../i18n").default ?? undefined) as I18n | undefined;
} catch {
  // no-op if not present
}

const CV_FILE_NAME = "PranjalSharmaN.pdf";
const CV_PATH = "/assets/PranjalSharmaN.pdf";

const FloatingActions = () => {
  const mode= useThemeMode();
  const changeToNepali = useCallback(() => {
    const targetLang = "ne";

    if (typeof window !== "undefined" && window.i18next?.changeLanguage) {
      window.i18next.changeLanguage(targetLang);
      return;
    }
    if (i18nInstance?.changeLanguage) {
      i18nInstance.changeLanguage(targetLang);
      return;
    }

    // Fallback: let the app read from localStorage on startup and set its language.
    localStorage.setItem("app_lang", targetLang);

    // Optional: notify listeners immediately
    const evt = new CustomEvent("app:lang", { detail: targetLang });
    window.dispatchEvent(evt);

    // If your app only reads the lang on boot, consider:
    // window.location.reload();
  }, []);

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
      <Item>
        <Fab
          onClick={changeToNepali}
          aria-label="Switch app language to Nepali"
          title="Switch to Nepali"
        >
          <Globe size={25} />
        </Fab>
        <Tip>Switch to Nepali</Tip>
      </Item>

      <Item>
        <Fab onClick={downloadCV} aria-label="Download my CV" title="Download CV">
          <Download size={25} />
        </Fab>
        <Tip>Download CV</Tip>
      </Item>
    </Wrap>
  );
};

export default FloatingActions;

const Wrap = styled.div`
  position: fixed;
  right: 25px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
`;

const Item = styled.div`
  position: relative;
  &:hover > div[data-tip] {
    opacity: 1;
    transform: translateX(-6px);
    pointer-events: auto;
  }
`;


const Fab = styled.button<{ asChild?: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
  }
`;

const Tip = styled.div.attrs({ "data-tip": true })`
  position: absolute;
  right: 64px; /* sits left of the button */
  top: 50%;
  transform: translateY(-50%);
  background: ${({ theme }) => theme?.colors?.bg ?? "rgba(17, 24, 39, 0.95)"};
  color: ${({ theme }) => theme?.colors?.text ?? "#fff"};
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease, transform 0.12s ease;

  &::after {
    content: "";
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: inherit;
  }
`;
