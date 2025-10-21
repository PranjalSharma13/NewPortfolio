import React from "react";

import styled from "styled-components";
import { useThemeMode } from "../hooks/useThemeModel";
import { PROJECTS } from "../data/projects";
import { TECHS } from "../data/textIcons";
import { ExternalLink, Github } from "lucide-react";


const Projects = () => {
  const { mode } = useThemeMode();
  return (
    <section aria-labelledby="projects-heading">
      <Grid>
        {PROJECTS.map((p) => (
          <Card key={p.title} tabIndex={0} aria-label={`${p.title}`} mode={mode === "dark"}>
            <Thumb>
              <img src={p.image} alt={`${p.title} preview`} />
            </Thumb>

            <Content>
              <Title>{p.title}</Title>
              <Blurb>{p.blurb}</Blurb>
            </Content>
            <Overlay aria-hidden="true">
              <Actions>
                {(() => {
                  const link = p.live ?? p.repo;
                  if (!link) return null;
                  const isLive = Boolean(p.live);
                  return (
                    <IconBtn
                      as="a"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={isLive ? "Open live site" : "Open GitHub repository"}
                      title={isLive ? "Open live site" : "Open GitHub repository"}
                      tabIndex={-1}
                    >
                      {isLive ? <ExternalLink size={18} /> : <Github size={18} />}
                    </IconBtn>
                  );
                })()}
              </Actions>
              <BadgeWrap>
                {p.badges.map((id) => {
                  const meta = TECHS[id];
                  return (
                    <Badge key={id} title={meta.label}>
                      <BadgeImg src={meta.icon} alt="" aria-hidden="true" />
                      <span>{meta.label}</span>
                    </Badge>
                  );
                })}
              </BadgeWrap>
            </Overlay>
          </Card>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;

/* ============ styles ============ */


const Grid = styled.div`
  margin: 5rem 2rem;
  display: grid;
  gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(495px, 1fr));
  justify-items: center;
  @media (min-width: 640px) { --card-w: 340px; }
  @media (min-width: 768px) { --card-w: 360px; }
  @media (min-width: 1280px){ --card-w: 380px; }
`;

const Card = styled.article<{ mode?: boolean }>`
  position: relative;
  border-radius: 16px;
  overflow: clip;
  height: auto;

  backdrop-filter: blur(8px);
  border: 1px solid ${({ mode }) => (mode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)")};
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(0,0,0,0.35);
    border-color: ${({ mode }) => (mode
    ? "rgba(255,255,255,0.2)"
    : "rgba(0,0,0,0.15)")};
  }

  &:hover ${() => Overlay},
  &:focus-visible ${() => Overlay} {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const Thumb = styled.div`
  aspect-ratio: 16 / 9;
  overflow: hidden;
  padding: 1rem ;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 300ms ease;
    border-radius: 16px;
  }

  ${Card}:hover & img,
  ${Card}:focus-visible & img {
    transform: scale(1.03);
  }
`;

const Content = styled.div`
  margin: 1.75rem 0rem;
  padding: 14px 14px 16px 14px;
`;

const Title = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 6px;
`;

const Blurb = styled.p`
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.85;
`;

/* hover overlay with badges */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  align-content: end;
  gap: 10px;
  padding: 12px;

  background: linear-gradient(to top, rgba(0,0,0,0.58), rgba(0,0,0,0.0) 55%);

  opacity: 0;
  transform: translateY(6px);
  pointer-events: none;
  transition: opacity 220ms ease, transform 220ms ease;
`;

const BadgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(255,255,255,0.16);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.28);
  backdrop-filter: blur(6px);
  line-height: 1;
  white-space: nowrap;
`;

const BadgeImg = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
`;

const Actions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(4px);
  cursor: pointer;
  line-height: 1;
  font-size: 0.8rem;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  svg {
    flex: 0 0 auto;
  }
`;

