// src/components/modal/Modal.tsx
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { X } from "lucide-react";
import { useThemeMode } from "../../hooks/useThemeModel";

type Props = { onClose: () => void; children?: React.ReactNode };

const Modal = ({ onClose, children }:Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const onOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("keydown", onKey);
    setTimeout(() => document.addEventListener("mousedown", onOutside), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [onClose]);

  return (
    <Overlay>
      <Dialog ref={dialogRef} role="dialog" aria-modal="true">
        <Header>
          <CloseBtn aria-label="Close" onClick={onClose} mode={mode}>
            <X size={18} />
          </CloseBtn>
        </Header>
        {children}
      </Dialog>
    </Overlay>
  );
};

export default Modal;

/* styles */
const Overlay = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.35);
  display: grid; place-items: center;
  z-index: 1100;
`;

const Dialog = styled.div`
  width: min(520px, 92vw);
  max-height: 80vh; overflow: auto;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  position: relative; padding: 20px 18px 16px;
`;

const CloseBtn = styled.button<{ mode?: "light" | "dark" }>`
  position: absolute; top: -10px; right: 0px;
  border: none; background: transparent; color: inherit; cursor: pointer;
  padding: 6px; border-radius: 8px;
  &:hover  { background: ${({ mode }) => mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(127,127,127,0.12)"}; }
  &:active { background: ${({ mode }) => mode === "dark" ? "rgba(255,255,255,0.16)" : "rgba(127,127,127,0.18)"}; }
`;

const Header = styled.div`
  position: sticky;
  top: 600;
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0 10px;
  z-index: 1;
  background: inherit;
`;
