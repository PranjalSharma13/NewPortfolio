import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";
import WhiteLogo from '../assets/PS_Logo_White.png';
import BlackLogo from '../assets/PS_Logo_Black.png'
import { Link, NavLink } from "react-router-dom";
import { PATH } from "../routes/path";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background: ${({ theme }) => theme.colors.navBarBackground};
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.3s ease, color 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    font-size: 1.25em;
    line-height: 1.5;
   }
`;

const LogoImg = styled.img`
  height: 42px;
  user-select: none;
`;
const Item = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #0ea5e9;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 2px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 180ms ease;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
  }

  /* keyboard focus ring */
  &:focus-visible {
    outline: 2px solid transparent;
    box-shadow: 0 0 0 3px rgba(14,165,233,.45);
    border-radius: 4px;
  }

  /* motion-sensitive users */
  @media (prefers-reduced-motion: reduce) {
    &::after { transition: none; }
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  const { t } = useTranslation();
  const navRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.set(nav, { y: 0 });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const current = self.scroll();

        if (current > lastScroll.current && current > 80) {
          // scrolling DOWN → hide
          gsap.to(nav, {
            y: "-100%",
            duration: 0.35,
            ease: "power2.out",
          });
        } else {
          // scrolling UP → show
          gsap.to(nav, {
            y: "0%",
            duration: 0.35,
            ease: "power2.out",
          });
        }

        lastScroll.current = current;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);
  return (
    <Nav  ref={navRef}>
      <Link to={PATH.HOME} aria-label="Home">
        <LogoImg
          src={mode === "light" ? BlackLogo : WhiteLogo}
          alt="PS Logo"
        />
      </Link>
      <NavItems>
        <Item to={PATH.PROJECTS} end>{t("nav.projects")}</Item>
        <Item to={PATH.EXPERIENCE}>{t("nav.experience")}</Item>
        <Item to={PATH.CONTACT}>{t("nav.contact")}</Item>
        <ToggleButton onClick={toggleMode} aria-label="Toggle theme">
          {mode === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavItems>
    </Nav>
  );
};
