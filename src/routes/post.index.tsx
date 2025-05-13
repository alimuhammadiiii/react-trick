import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/post/")({
  component: PostIndex,
});

function PostIndex() {
  return (
    <>
      <h1>Please select Post</h1>
    </>
  );
}
