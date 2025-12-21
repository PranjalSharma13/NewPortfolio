
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import FluidCursor from "../components/FluidCursor";
import Footer from "../components/Footer";
import styled from "styled-components";
import FloatingActions from "../components/FloatingActions";

const Shell = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.screenBackground};
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

export default function AppLayout() {
  return (
    <Shell>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <FluidCursor />
      <FloatingActions />
    </Shell>
  );
}
