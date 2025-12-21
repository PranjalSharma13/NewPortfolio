import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Sun, Moon, X, Menu } from "lucide-react";
import { useThemeMode } from "../../hooks/useThemeModel";
import WhiteLogo from '../../assets/PS_Logo_White.png';
import BlackLogo from '../../assets/PS_Logo_Black.png'
import { Link } from "react-router-dom";
import { PATH } from "../../routes/path";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavLinks from "./NavBarLinks";

gsap.registerPlugin(ScrollTrigger);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background: ${({ theme }) => theme.colors.navBarBackground};
  color: ${({ theme }) => theme.colors.text};
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const LogoImg = styled.img`
  height: 42px;
  user-select: none;
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
const Hamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const MobileMenu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.mobileNavBarBackground};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  text-align: center;

  transform: ${({ open }) =>
    open ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};

transition: transform 0.25s ease, opacity 0.25s ease;

  a {
    font-size: 1.2rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  const navRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.set(nav, { y: 0 });

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const current = self.scroll();
        if (menuOpen && current > lastScroll.current) {
          setMenuOpen(false);
        }
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
    <Nav ref={navRef}>
      <Link to={PATH.HOME} aria-label="Home">
        <LogoImg
          src={mode === "light" ? BlackLogo : WhiteLogo}
          alt="PS Logo"
        />
      </Link>
      <NavItems>
         <NavLinks />
        <ToggleButton onClick={toggleMode} aria-label="Toggle theme">
          {mode === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavItems>
      {/* HAMBURGER */}
      <Hamburger onClick={() => setMenuOpen((v) => !v)}>
        {menuOpen ? <X /> : <Menu />}
      </Hamburger>
      <MobileMenu open={menuOpen}>
       <NavLinks onClick={() => setMenuOpen(false)} />
        <ToggleButton onClick={toggleMode}>
          {mode === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </MobileMenu>
    </Nav>
  );
};
