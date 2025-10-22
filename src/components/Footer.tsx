// src/components/Footer.tsx
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter, Mail, Globe } from "lucide-react";
import { useThemeMode } from "../hooks/useThemeModel";
import WhiteLogo from "../assets/PS_Logo_White.png";
import BlackLogo from "../assets/PS_Logo_Black.png";
import { PATH } from "../routes/path";
import { useTranslation } from "react-i18next";
import type { AnchorHTMLAttributes } from "react";

const FooterRoot = styled.footer`
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  padding: 2rem 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: start;
`;

const Left = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const BigLogo = styled.img`
  height: 56px;
  width: auto;
  display: block;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  a {
    display: inline-flex;
    padding: 0.4rem;
    border-radius: 999px;
    text-decoration: none;
    color: inherit;
    opacity: 0.9;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }
  a:hover { opacity: 1; transform: translateY(-1px); }
`;

const Address = styled.address`
  font-style: normal;
  opacity: 0.8;
  line-height: 1.4;
  display: flex;
  align-items: center;
`;

const Copy = styled.small`
  display: flex;
  align-items: center;
  opacity: 0.7;
`;

const Right = styled.nav`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColor};
    opacity: 0.9;
  }
  a.active { text-decoration: none; opacity: 1; }
`;

const Ext = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);

export default function Footer() {
  const { mode } = useThemeMode();
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <FooterRoot>
      <FooterGrid>
        {/* Left side */}
        <Left>
          <Link to={PATH.HOME} aria-label="Home">
            <BigLogo
              src={mode === "light" ? BlackLogo : WhiteLogo}
              alt="PS Logo"
            />
          </Link>

          <SocialRow aria-label="Social media links">
            <Ext href="https://github.com/PranjalSharma13" aria-label="GitHub">
              <Github size={22} />
            </Ext>
            <Ext href="https://www.linkedin.com/in/pranjalsharma28/" aria-label="LinkedIn">
              <Linkedin size={22} />
            </Ext>
            <Ext href="https://instagram.com/" aria-label="Instagram">
              <Instagram size={22} />
            </Ext>
            <Ext href="https://x.com/" aria-label="Twitter/X">
              <Twitter size={22} />
            </Ext>
            <Ext href="mailto:pranjal.sharm98@gmail.com" aria-label="Email">
              <Mail size={22} />
            </Ext>
            <Ext href="https://pranjalsharma13.netlify.app/" aria-label="Website">
              <Globe size={22} />
            </Ext>
          </SocialRow>

          <Address>
            90-47 51st Ave, Elmhurst, NY 11373<br />
            United States<br />
          </Address>

          <Copy>© {year} Pranjal Sharma. All rights reserved.</Copy>
        </Left>
        <Right aria-label="Footer navigation">
          <NavLink to={PATH.PROJECTS}>{t("nav.projects")}</NavLink>
          <NavLink to={PATH.CONTACT}>{t("nav.contact")}</NavLink>
          <NavLink to={PATH.EXPERIENCE}>{t("nav.experience")}</NavLink>
        </Right>
      </FooterGrid>
    </FooterRoot>
  );
}
