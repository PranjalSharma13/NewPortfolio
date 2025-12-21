import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PATH } from "../../routes/path";

const Item = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #0ea5e9;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
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

  &:focus-visible {
    outline: 2px solid transparent;
    box-shadow: 0 0 0 3px rgba(14,165,233,.45);
    border-radius: 4px;
  }


  @media (prefers-reduced-motion: reduce) {
    &::after { transition: none; }
  }
`;

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const { t } = useTranslation();

  return (
    <>
      <Item to={PATH.PROJECTS} end onClick={onClick}>
        {t("nav.projects")}
      </Item>
      <Item to={PATH.EXPERIENCE} onClick={onClick}>
        {t("nav.experience")}
      </Item>
      <Item to={PATH.CONTACT} onClick={onClick}>
        {t("nav.contact")}
      </Item>
    </>
  );
};

export default NavLinks
