// shell/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AtlasApp = lazy(() => import("atlas/App"));
const NovaApp = lazy(() => import("nova/App"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/atlas/*" element={<AtlasApp />} />
          <Route path="/nova/*" element={<NovaApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
