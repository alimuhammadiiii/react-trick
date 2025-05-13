import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: App,
});

function App() {
  return (
    <>
      <h1>App Layout</h1>
      <Outlet />
      demandchunks
    </>
  );
}
