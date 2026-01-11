import { CustomButton } from "@packages/ui";
import { useNavigate } from "react-router-dom";

import React from "react";

export const TestComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "300px",
      }}
    >
      <h2 style={{ marginBottom: "16px" }}>Test Route Works</h2>

      <CustomButton
        style={{
          background: "linear-gradient(135deg, #0ea5e9, #22d3ee)", // cyan theme
          borderRadius: "999px", // pill button
          boxShadow: "0 6px 18px rgba(14, 165, 233, 0.45)",
        }}
        onClick={() => navigate("/")}
      >
        ← Go back to Dashboard
      </CustomButton>

      <CustomButton onClick={() => alert("Test button clicked")}>
        Test Button
      </CustomButton>
    </div>
  );
};
