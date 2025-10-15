
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import FluidCursor from "../components/FluidCursor";
import Footer from "../components/Footer";
import styled from "styled-components";

const Shell = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
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
    </Shell>
  );
}
