import React from "react";
import styled from "styled-components";
import type { LanguageItem as Language } from "../../i18n/types";
import LanguageItem from "./LanguageItem";

type Props = {
  languages: Language[];
  current: string;
  onPick: (code: string) => void;
};

const LanguageGrid = ({ languages, current, onPick }:Props) => {
  return (
    <Grid role="listbox" aria-label="Available languages">
      {languages.map(({ code, label, icon }) => {
        const active = code === current;
        return (
          <LanguageItem
            key={code}
            icon={icon}
            label={label}
            active={active}
            onClick={() => onPick(code)}
          />
        );
      })}
    </Grid>
  );
};

export default LanguageGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 14px;
  margin-bottom: 32px;
`;
