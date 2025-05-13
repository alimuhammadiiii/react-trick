import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to="/useReducer">use reducer</Link>
        </li>
      </ul>
    </>
  );
}
