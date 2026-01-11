// shell/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AKApp = lazy(() => import("mfe_ak/App"));
const RKApp = lazy(() => import("mfe_rk/App"));

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
                <a href="/mfe_ak">/mfe_ak</a> - to load mfe_ak remote app
                <br />
                <a href="/mfe_rk">/mfe_rk</a> - to load mfe_rk remote app
                <br />
              </div>
            }
          />
          <Route path="/mfe_ak/*" element={<AKApp />} />
          <Route path="/mfe_rk/*" element={<RKApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
