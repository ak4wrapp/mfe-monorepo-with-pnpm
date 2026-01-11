// shell/src/App.tsx
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy } from "react";
import React from "react";
import { CustomButton } from "@packages/ui";
import { RemoteComponentWrapper } from "./RemoteComponentWrapper";

// Lazy load remote MFEs
const AKApp = lazy(() => import("mfe_ak/App"));
const RKApp = lazy(() => import("mfe_rk/App"));

// Table styles
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

// Routes table data
const routes = [
  { path: "/ak", label: "Ak", desc: "Loads mfe_ak remote app" },
  { path: "/rk", label: "Rk", desc: "Loads mfe_rk remote app" },
  { path: "/test", label: "Test", desc: "Test route (local)" },
];

// Table of navigation buttons
const TableButtons = () => {
  const navigate = useNavigate();

  return (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}
    >
      <thead>
        <tr>
          <th style={thStyle}>Route</th>
          <th style={thStyle}>Description</th>
        </tr>
      </thead>
      <tbody>
        {routes.map(({ path, label, desc }) => (
          <tr key={path}>
            <td style={tdStyle}>
              <CustomButton onClick={() => navigate(path)}>
                {label}
              </CustomButton>
            </td>
            <td style={tdStyle}>{desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Main App
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Welcome to the Shell App</h2>
              <p>Use the following routes to load remote MFEs:</p>
              <TableButtons />
            </div>
          }
        />
        {/* Use RemoteComponentWrapper for MFEs */}
        <Route
          path="/ak/*"
          element={<RemoteComponentWrapper component={AKApp} title="AK App" />}
        />
        <Route
          path="/rk/*"
          element={<RemoteComponentWrapper component={RKApp} title="RK App" />}
        />

        {/* Local test route */}
        <Route path="/test" element={<div>Test Route Works!</div>} />
      </Routes>
    </BrowserRouter>
  );
}
