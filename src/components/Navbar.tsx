import React from "react";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";
import WhiteLogo from '../assets/PS_Logo_White.png';
import BlackLogo from '../assets/PS_Logo_Black.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.bg};
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
`;

const LogoImg = styled.img`
  height: 32px;
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

export const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();
  return (
    <Nav>
      <a href="#home" aria-label="Home">
        <LogoImg
          src={mode === "light" ? BlackLogo : WhiteLogo}
          alt="PS Logo"
        />
      </a>
      <NavItems>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <ToggleButton onClick={toggleMode} aria-label="Toggle theme">
          {mode === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavItems>
    </Nav>
  );
};
