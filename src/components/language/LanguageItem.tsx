// src/components/language/LanguageItem.tsx
import React from "react";
import styled from "styled-components";
import { Check } from "lucide-react";

type Props = {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const LanguageItem= ({ icon, label, active, onClick }:Props) => (
  <Item active={active} onClick={onClick} role="option" aria-selected={!!active} title={label}>
    <Left>
      <FlagImg src={icon} alt="" width={22} height={22} loading="lazy" />
      <span>{label}</span>
    </Left>
    {active && (
      <Right>
        <Check size={18} />
      </Right>
    )}
  </Item>
);

export default LanguageItem;

/* styles */
const Item = styled.button<{ active?: boolean }>`
  display: flex; align-items: center; justify-content: space-between;
  gap: 10px; width: 100%;
  padding: 10px 12px; border-radius: 12px;
  border: 1px solid ${({ active }) => (active ? "rgba(37,99,235,0.5)" : "rgba(0,0,0,0.08)")};
  background: ${({ active }) => (active ? "rgba(37,99,235,0.06)" : "transparent")};
  color: inherit; cursor: pointer; text-align: left;
  transition: border-color .15s ease, background .15s ease, transform .06s ease;
  &:hover { border-color: rgba(0,0,0,0.18); }
  &:active { transform: translateY(1px); }
  span { font-size: 14px; }
`;

const Left = styled.span`
  display: inline-flex; align-items: center; gap: 10px; min-width: 0;
  span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`;

const Right = styled.span`
  display: inline-flex; align-items: center; color: #2563eb;
`;

const FlagImg = styled.img`
  width: 22px; height: 22px; border-radius: 999px;
  background: #fff; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
  object-fit: cover; flex: 0 0 22px;
`;
