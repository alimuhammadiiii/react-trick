import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  console.log(postId);
  return <div> post Id: {postId}</div>;
}
