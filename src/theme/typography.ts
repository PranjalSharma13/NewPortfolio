import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Body = styled.div`
  max-width: 80ch;
  margin: 0;

  /* Bigger, responsive type (em-based) */
  font-size: clamp(1.1em, 1.2vw + 0.6em, 1.5em);
  line-height: 1.65; /* unitless = best for scaling */

  /* Paragraph rhythm */
  p + p { margin-top: 0.9em; }

  @media (max-width: 1200px) { max-width: 70ch; }
  @media (max-width: 768px)  { max-width: 60ch; }
`;
