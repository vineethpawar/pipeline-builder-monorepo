import React from "react";

export default function Page(): JSX.Element {
  const Builder = React.lazy(() => import("@repo/ui/Builder"));
  return (
    <React.Suspense fallback="Loading...">
      <Builder/>
    </React.Suspense>
  );
}
