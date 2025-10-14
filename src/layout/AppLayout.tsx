
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import FluidCursor from "../components/FluidCursor";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FluidCursor />
    </>
  );
}
