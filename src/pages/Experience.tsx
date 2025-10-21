import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import type { YearItem } from "../data/Experience";



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


const Rail = styled.div`
  position: relative;
  padding-left: 32px;

`;

const Line = styled.div`
  position: absolute;
  left: 12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--line);
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
`;

const Dot = styled.span<{ active?: boolean }>`
  position: absolute;
  left: -28px;
  top: 10px;
  width: 16px; height: 16px; border-radius: 999px;
  background: #fff; border: 2px solid var(--line);
  ${({ active }) => active && css`border-color: var(--brand); box-shadow: 0 0 0 4px rgba(14,165,233,.18);`}
`;

// The year button, alternating sides relative to the line
const YearButton = styled.button<{ side: "left" | "right"; active?: boolean }>`
  appearance: none; border: 1px solid var(--line); background: #fff; color: var(--text);
  font-weight: 800; letter-spacing: .02em;
  padding: 10px 14px; border-radius: 12px; cursor: pointer;
  position: relative;

  /* nudge left items toward the outer left, right items toward the inner area */
  ${({ side }) => side === "left" ? css`
    margin-left: -8px;
    transform-origin: right center;
  ` : css`
    margin-left: 18px;
    transform-origin: left center;
  `}

  &:hover { border-color: var(--brand); }
  &:focus-visible { outline: 3px solid rgba(14,165,233,.35); outline-offset: 2px; }
  ${({ active }) => active && css`border-color: var(--brand); box-shadow: 0 1px 0 rgba(0,0,0,.03), 0 0 0 3px rgba(14,165,233,.12);`}
`;

// Right detail panel
const Detail = styled.div`
  border: 1px solid var(--line);
  border-radius: 16px;
  background: #fff;
  padding: 20px 18px;
  box-shadow: 0 1px 0 rgba(0,0,0,.02);
  min-height: 280px;
`;

const Role = styled.h2`
  margin: 0 0 4px; font-size: 1.1rem;
`;
const Company = styled.div`
  color: var(--text); font-weight: 700; margin-bottom: 6px;
`;
const Meta = styled.div`
  color: var(--muted); font-size: .95rem; margin-bottom: 12px;
`;
const Bullets = styled.ul`
  margin: 0; padding-left: 18px; display: grid; gap: 6px;
  li{ line-height: 1.4; }
`;

const StackRow = styled.div`
  display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;
`;
const Chip = styled.span`
  border: 1px solid var(--line); border-radius: 999px; padding: 6px 10px; font-size: .85rem; background:#fff;
`;

// ---------- Component ----------
export default function Experience({ data }: TimelineProps) {
    // sort years descending (latest at bottom looks natural on a vertical rail)
    const years = useMemo(() => [...data].sort((a, b) => a.year - b.year), [data]);
    const [activeYear, setActiveYear] = useState<number>(years[years.length - 1]?.year);

    const active = years.find(y => y.year === activeYear);

    return (
        <Wrap aria-labelledby="timeline-heading">
            <Rail>
                <Line />
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
            </Rail>

            {/* RIGHT: details for active year */}
            <Detail role="region" aria-live="polite" aria-label={`Details for ${active?.year}`}>
                {active ? (
                    <div>
                        {active.company && <Company>{active.company}</Company>}
                        {active.role && <Role>{active.role}</Role>}
                        {active.locationDate && <Meta>{active.locationDate}</Meta>}

                        <Bullets>
                            {active.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </Bullets>

                        {active.stack && active.stack.length > 0 && (
                            <StackRow>
                                {active.stack.map(s => <Chip key={s}>{s}</Chip>)}
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

