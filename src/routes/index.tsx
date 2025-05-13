import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <ul className="flex flex-col m-auto p-5">
        <li className="font-bold">
          <Link to="/useReducer">1-use reducer</Link>
        </li>
      </ul>
    </>
  );
}
