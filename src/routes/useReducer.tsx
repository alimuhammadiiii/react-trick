import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/useReducer")({
  component: UseReducer,
});

function UseReducer() {
  return <div>Hello "/useReducer"!</div>;
}
