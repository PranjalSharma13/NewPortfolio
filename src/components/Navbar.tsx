import React from "react";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";
import WhiteLogo from '../assets/PS_Logo_White.png';
import BlackLogo from '../assets/PS_Logo_Black.png'
import { Link, NavLink } from "react-router-dom";
import { PATH } from "../routes/path";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
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
  const { t } = useTranslation();
  return (
    <Nav>
      <Link to={PATH.HOME} aria-label="Home">
        <LogoImg
          src={mode === "light" ? BlackLogo : WhiteLogo}
          alt="PS Logo"
        />
      </Link>
      <NavItems>
        <NavLink to={PATH.PROJECTS}>{t("nav.projects")}</NavLink>
        <NavLink to={PATH.EXPERIENCE}>{t("nav.experience")}</NavLink>
        <NavLink to={PATH.CONTACT}>{t("nav.contact")}</NavLink>
        <ToggleButton onClick={toggleMode} aria-label="Toggle theme">
          {mode === "light" ? <Moon /> : <Sun />}
        </ToggleButton>
      </NavItems>
    </Nav>
  );
};
