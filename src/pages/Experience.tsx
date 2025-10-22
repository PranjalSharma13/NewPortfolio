import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import type { YearItem } from "../data/Experience";
import { useThemeMode } from "../hooks/useThemeModel";



export type TimelineProps = {
    data: YearItem[];
};

// ---------- Layout ----------
const Wrap = styled.section`
  --line: #e5e7eb; /* gray-200 */
  --text: #0f172a; /* slate-900 */
  --muted: #64748b; /* slate-500 */
  --brand: #0ea5e9; /* sky-500 */

  margin: 5rem 0rem;
  color:${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
`;


const YearList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: grid;
  gap: 7.5rem;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 1.25rem;
    bottom: 1.25rem;
    width: 2px;
    background: var(--line);
  }
`;


const YearItemLi = styled.li`
  position: relative;
  min-height: 56px;
`;

const Dot = styled.span<{ active?: boolean }>`
  position: absolute;
  left: calc(50% - 8px);  /* 16px dot → shift by 8px to center on the 2px rail */
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #fff;
  border: 2px solid var(--line);

  ${({ active }) =>
    active &&
    css`
      border-color: var(--brand);
      box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.18);
    `}
`;

const YearButton = styled.button<{ side: "left" | "right"; active?: boolean }>`
  appearance: none;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--text);
  font-weight: 800;
  letter-spacing: 0.02em;
  padding: 10px 14px;
  border-radius: 12px;
  cursor: pointer;

  position: absolute;
  top: 2px;
  ${({ side }) =>
    side === "left"
      ? css`
          right: calc(50% + 30px); /* 24px gap from the rail */
        `
      : css`
          left: calc(50% + 33px);
        `}
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 2px;
    width: 24px;              /* match the offset above */
     background: ${({ active }) => (active ? "var(--brand)" : "var(--line)")};
    transform: translateY(-50%);
    ${({ side }) =>
      side === "left"
        ? css`
            right: -24px;
          `
        : css`
            left: -24px;
          `}
  }

  &:hover {
    border-color: var(--brand);
  }
  &:focus-visible {
    outline: 3px solid rgba(14, 165, 233, 0.35);
    outline-offset: 2px;
  }
  ${({ active }) =>
    active &&
    css`
      border-color: var(--brand);
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03), 0 0 0 3px rgba(14, 165, 233, 0.12);
    `}
`;

const Detail = styled.div<{mode:boolean}>`
  border: 1px solid var(--line);
  border-radius: 16px;
  background: ${({ mode }) =>mode ? "rgba(0, 0, 0, 0.85)" : "rgba(51, 50, 50, 0.02)"};
  padding: 20px 18px;
  box-shadow: 0 1px 0 rgba(0,0,0,.02);
  align-self: center;
  width: 450px;
`;

const Role = styled.h2`
  margin: 0 0 4px; font-size: 1.1rem;
`;
const Company = styled.div<{mode:boolean}>`
  color: ${({ mode }) => (mode ? "var(--brand)" : "var(--text)")}; font-weight: 700; margin-bottom: 8px;
`;
const Meta = styled.div<{ mode: boolean }>`
  color: ${({ mode }) => (mode ? "#035784" : "var(--muted)")}; font-size: .95rem; margin-bottom: 32px;
`;
const Bullets = styled.ul`
  margin: 0;  display: grid; gap: 8px;
  li{ line-height: 1.4; text-align: left; }
`;

const StackRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0px;
  padding: 0px 16px;
`;

const Chip = styled.span <{mode:boolean}>`
  border: 1px solid ${({ mode }) => (mode ? "var(--brand)" : "var(--line)")};; border-radius: 999px; padding: 6px 10px; font-size: .85rem; background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;

// ---------- Component ----------
export default function Experience({ data }: TimelineProps) {
    // sort years descending (latest at bottom looks natural on a vertical rail)
    const years = useMemo(() => [...data].sort((a, b) => a.year - b.year), [data]);
    const [activeYear, setActiveYear] = useState<number>(years[years.length - 1]?.year);
    const {mode}=useThemeMode();

    const active = years.find(y => y.year === activeYear);

    return (
        <Wrap aria-labelledby="timeline-heading">
                <YearList>
                    {years.map((y, idx) => {
                        const side: "left" | "right" = idx % 2 === 0 ? "left" : "right"; // 2021 left, 2022 right, ...
                        const isActive = y.year === activeYear;
                        return (
                            <YearItemLi key={y.year}>
                                <Dot aria-hidden active={isActive} />
                                <YearButton
                                    side={side}
                                    active={isActive}
                                    aria-pressed={isActive}
                                    onClick={() => setActiveYear(y.year)}
                                    title={`Show ${y.year} experience`}
                                >
                                    {y.year}
                                </YearButton>
                            </YearItemLi>
                        );
                    })}
                </YearList>

            {/* RIGHT: details for active year */}
            <Detail role="region" aria-live="polite" aria-label={`Details for ${active?.year}`} mode={mode=="dark"}>
                {active ? (
                    <div>
                        {active.company && <Company mode={mode==="dark"}>{active.company}</Company>}
                        {active.role && <Role>{active.role}</Role>}
                        {active.locationDate && <Meta mode={mode==="dark"}>{active.locationDate}</Meta>}

                        <Bullets>
                            {active.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </Bullets>

                        {active.stack && active.stack.length > 0 && (
                            <StackRow>
                                {active.stack.map(s => <Chip mode={mode==="dark"} key={s}>{s}</Chip>)}
                            </StackRow>
                        )}
                    </div>
                ) : (
                    <div>Select a year to view experience.</div>
                )}
            </Detail>
        </Wrap>
    );
}

