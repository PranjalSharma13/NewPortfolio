// src/pages/Contact.tsx
import styled from "styled-components";
import { Mail, Twitter, Github, Calendar } from "lucide-react";
import ContactAvatar from "../assets/Pkawaii.png";

const Contact = () => {
  return (
    <Wrapper>
      <Title>Ping Me, Maybe?</Title>
      <Graph aria-label="Contact graph">
        <Connectors viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
          <path d="M430 300 C 340 280, 250 250, 200 220" />
          {/* calendly (bottom-left) */}
          <path d="M430 300 C 340 330, 260 370, 210 410" />
          {/* dm (top-right) */}
          <path d="M570 300 C 660 280, 750 250, 800 220" />
          {/* github (bottom-right) */}
          <path d="M570 300 C 660 330, 740 370, 790 410" />
        </Connectors>
        <Center>
          <Headshot src={ContactAvatar} alt="Pranjal avatar" />
        </Center>

        {/* Pills */}
        <Pill style={{ left: "8%", top: "26%" }} href="mailto:pranjal.sharm98@gmail.com">
          <Mail size={18} />
          <span>Email</span>
        </Pill>

        <Pill style={{ left: "9%", bottom: "14%" }} href="https://calendly.com/">
          <Calendar size={18} />
          <span>Calendly</span>
        </Pill>

        <Pill style={{ right: "8%", top: "26%" }} href="https://x.com/">
          <Twitter size={18} />
          <span>DM</span>
        </Pill>

        <Pill style={{ right: "9%", bottom: "14%" }} href="https://github.com/PranjalSharma13">
          <Github size={18} />
          <span>GitHub</span>
        </Pill>
      </Graph>
    </Wrapper>
  );
};

export default Contact;

/* ---------- styles ---------- */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  margin: 5rem 0;
`;

const Title = styled.h1`
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const Graph = styled.section`
  position: relative;
  width: min(1380px, 92vw);
  aspect-ratio: 16 / 9;
  background: transparent;
  overflow: hidden;

`;

const Connectors = styled.svg`
  position: absolute;
  inset: 0;
  pointer-events: none;

  path, circle {
    fill: none;
    stroke: ${({ theme }) => theme.colors?.accent ?? "#60a5fa"};
    stroke-width: 3;
  }
  path {
    stroke-linecap: round;
    opacity: 0.55;
  }
`;

const Center = styled.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(180px, 28vw, 260px);
  height: clamp(180px, 28vw, 260px);
  border-radius: 999px;
  display: grid; place-items: center;
  background: ${({ theme }) => theme.colors?.bg ?? "#0b1020"};
  box-shadow:
    0 10px 30px rgba(0,0,0,.18),
    inset 0 0 0 2px ${({ theme }) => theme.colors?.accent ?? "#1772a3"};
`;

const Headshot = styled.img`
width: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const Pill = styled.a`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.text ?? "#111827"};
  background: ${({ theme }) => theme.colors?.bg ?? "#fff"};
  box-shadow: 0 8px 20px rgba(0,0,0,.08), inset 0 0 0 2px ${({ theme }) => theme.colors?.accent ?? "#60a5fa"}33;
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
  opacity: 0.95;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(0,0,0,.10), inset 0 0 0 2px ${({ theme }) => theme.colors?.accent ?? "#60a5fa"}55;
    opacity: 1;
  }

  svg { flex: 0 0 auto; }
  span { font-weight: 600; }
`;
