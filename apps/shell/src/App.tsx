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
          <Route
            path="/"
            element={
              <div>
                Welcome to the Shell App
                <br />
                Use the following routes to load remotes:
                <br />
                <a href="/atlas">/atlas</a> - to load Atlas remote app
                <br />
                <a href="/nova">/nova</a> - to load Nova remote app
                <br />
              </div>
            }
          />
          <Route path="/atlas/*" element={<AtlasApp />} />
          <Route path="/nova/*" element={<NovaApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
