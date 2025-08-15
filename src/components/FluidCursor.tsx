
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { default as initFluidCursor } from '../hooks/useFluidCursor';

// Full-screen, behind content, won’t block clicks (pointer-events: none)
const FluidRoot = styled.div<{ $z?: number; $allowPointerEvents?: boolean }>`
  position: fixed;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  z-index: ${({ $z }) => ($z ?? -1)};
  pointer-events: ${({ $allowPointerEvents }) =>
    $allowPointerEvents ? 'auto' : 'none'};

  canvas#fluid {
    width: 100vw;
    height: 100vh;
    display: block;
  }
`;

type Props = {
  /** Layer order; use -1 to sit behind the app (default) */
  zIndex?: number;
  /** Set true only if you *want* the canvas to intercept clicks */
  allowPointerEvents?: boolean;
};

export default function FluidCursor({
  zIndex = -1,
  allowPointerEvents = false,
}: Props) {
  // guard so we init only once (avoids re-init in strict/dev)
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;
    initFluidCursor(); // initializes the simulation (attaches events, starts RAF)
  }, []);

  return (
    <FluidRoot $z={zIndex} $allowPointerEvents={allowPointerEvents}>
      <canvas id="fluid" />
    </FluidRoot>
  );
}
