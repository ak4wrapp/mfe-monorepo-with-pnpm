// shell/src/App.tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";

const AKApp = lazy(() => import("mfe_ak/App"));
const RKApp = lazy(() => import("mfe_rk/App"));

const thStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "left",
  backgroundColor: "#f5f5f5",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Welcome to the Shell App</h2>
                <p>Use the following routes to load remote MFEs:</p>

                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "16px",
                  }}
                >
                  <thead>
                    <tr>
                      <th style={thStyle}>Route</th>
                      <th style={thStyle}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}>
                        <Link to="/ak">/ak</Link>
                      </td>
                      <td style={tdStyle}>Loads mfe_ak remote app</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        <Link to="/rk">/rk</Link>
                      </td>
                      <td style={tdStyle}>Loads mfe_rk remote app</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        <Link to="/test">/test</Link>
                      </td>
                      <td style={tdStyle}>Test route (local)</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}>
                        <Link to="/test_route">/test_route</Link>
                      </td>
                      <td style={tdStyle}>Test route (local)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          />

          <Route path="/ak/*" element={<AKApp />} />
          <Route path="/rk/*" element={<RKApp />} />
          <Route path="/test" element={<div>Test Route Works!</div>} />
          <Route path="/test_route" element={<div>Test Route Works!</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
