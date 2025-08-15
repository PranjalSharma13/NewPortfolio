import React from "react";
import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease, color 0.3s ease;
`;

const Logo = styled.a<{ $size?: number }>`
  /* Adjust size if you want: <Logo $size={48}>P</Logo> */
  --size: ${({ $size }) => ($size ? `${$size}px` : "44px")};
  width: var(--size);
  /* Regular flat-top hex: width/height ≈ 1.1547 */
  aspect-ratio: 1.1547;
  position: relative;
  display: grid;
  place-items: center;
  text-decoration: none;
  font-weight: 800;
  font-size: calc(var(--size) * 0.6);
  line-height: 1;
  color: ${({ theme }) => theme.text};
  isolation: isolate; /* keeps pseudo-elements behind the text */

  /* Outer hex (border) */
  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: polygon(
      25% 6.7%,
      75% 6.7%,
      100% 50%,
      75% 93.3%,
      25% 93.3%,
      0% 50%
    );
    transition: transform 180ms ease, opacity 180ms ease;
  }

  /* Border layer */
  &::before {
    background: ${({ theme }) => theme.text};
    z-index: -2;
  }

  /* Fill layer (creates a border by insetting) */
  &::after {
    inset: 2px; /* border thickness */
    background: ${({ theme }) => theme.background};
    z-index: -1;
  }

  /* Subtle hover */
  &:hover::before {
    transform: scale(1.04);
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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

export const Navbar: React.FC = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <Nav>
      <Logo  href="/" aria-label="Home">P</Logo>
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
