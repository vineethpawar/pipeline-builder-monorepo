import React from "react";

export default function Page(): JSX.Element {
  const Editor = React.lazy(() => import("@repo/ui/Editor"));
  const SideBar = React.lazy(() => import("@repo/ui/Sidebar"));
  return (
    <React.Suspense fallback="Loading...">
    <main>
      <SideBar />
      <Editor/>
    </main>
    </React.Suspense>
  );
}
