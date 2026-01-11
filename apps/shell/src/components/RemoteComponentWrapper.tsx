import React, { Suspense, LazyExoticComponent } from "react";
import { useNavigate } from "react-router-dom";
import { RemoteErrorBoundary } from "./RemoteErrorBoundary";
import { CustomButton } from "@packages/ui";

interface RemoteComponentWrapperProps {
  component: LazyExoticComponent<React.ComponentType<any>>;
  fallback?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string; // optional title for the MFE
  showDashboardButton?: boolean; // whether to show "Go back" button
}

export const RemoteComponentWrapper: React.FC<RemoteComponentWrapperProps> = ({
  component: Component,
  fallback = <div>Loading remote app...</div>,
  className,
  style,
  title,
  showDashboardButton = true, // default to showing the button
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={className}
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        ...style,
      }}
    >
      {showDashboardButton && (
        <CustomButton
          onClick={() => navigate("/")}
          style={{ marginBottom: "16px" }}
        >
          ← Go back to Dashboard
        </CustomButton>
      )}

      <RemoteErrorBoundary>
        <Suspense fallback={fallback}>
          {title && (
            <h2
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "1.5rem",
                color: "#333",
              }}
            >
              {title}
            </h2>
          )}
          <Component />
        </Suspense>
      </RemoteErrorBoundary>
    </div>
  );
};
