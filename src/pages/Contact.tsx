import styled from "styled-components";
import { Mail, Twitter, Github, Calendar } from "lucide-react";
import ContactAvatar from "../assets/Pkawaii.png";
import { CENTER, curvePath, pillPos, TARGETS } from "../data/connectors";

const Contact = () => {
    return (
        <Wrapper>
            <Title>Ping Me, Maybe?</Title>
            <Graph aria-label="Contact graph">
                <Connectors viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                    {TARGETS.map(t => {
                        const d = curvePath(CENTER.x, CENTER.y, t.x, t.y, t.seed);
                        return (
                            <g key={t.seed}>
                                <path className="halo" d={d} />
                                <path className="line" d={d} />
                            </g>
                        );
                    })}
                </Connectors>
                <Center>
                    <Headshot src={ContactAvatar} alt="Pranjal avatar" />
                </Center>
                {/* Pills — positioned from TARGETS so they hug the curve ends */}
                <Pill style={pillPos(TARGETS[0],94)} href="mailto:pranjal.sharm98@gmail.com" target="_blank">
                    <Mail size={20} />
                    <span>Email</span>
                </Pill>

                <Pill style={{ ...pillPos(TARGETS[1], 135), marginTop: "-40px" }}  href="https://calendly.com/" target="_blank">
                    <Calendar size={20} />
                    <span>Calendly</span>
                </Pill>

                <Pill style={pillPos(TARGETS[2])} href="https://x.com/" target="_blank">
                    <Twitter size={20} />
                    <span>DM</span>
                </Pill>

                <Pill style={pillPos(TARGETS[3])} href="https://github.com/PranjalSharma13" target="_blank">
                    <Github size={20} />
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
  position: absolute; inset: 0; pointer-events: none;

  .halo { stroke: #60a5fa; stroke-opacity: .18; stroke-width: 8; }
  .line { stroke: #60a5fa; stroke-opacity: .65; stroke-width: 3; }
  path { fill: none; stroke-linecap: round; }
`;


const Center = styled.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: clamp(220px, 40vw, 380px);
  height: clamp(220px, 40vw, 380px);
  border-radius: 999px;
  display: grid; place-items: center;
  background: ${({ theme }) => theme.colors?.bg ?? "#0b1020"};
  box-shadow:
    0 10px 30px rgba(0,0,0,.18),
    inset 0 0 0 2px "#60a5fa";
`;

const Headshot = styled.img`
width: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
    border: 1px solid #60a5fa;
`;

const Pill = styled.a`
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;                /* a bit more breathing room */
  padding: 0.72rem 1rem;       /* bigger pill */
  border-radius: 999px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.text ?? "#111827"};
  background: ${({ theme }) => theme.colors?.bg ?? "#fff"};
  box-shadow: 0 10px 24px rgba(0,0,0,.10),
              inset 0 0 0 2px "#60a5fa" 33;
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
  opacity: 0.97;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 30px rgba(0,0,0,.12),
                inset 0 0 0 2px "#60a5fa" 55;
    opacity: 1;
  }

  svg { width: 20px; height: 20px; }   /* ensure larger icon even if size prop omitted */
  span { font-weight: 650; font-size: 0.975rem; }
`;

