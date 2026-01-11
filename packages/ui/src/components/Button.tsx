import React from "react";

// Base styles for the button
const defaultStyles = {
  button: {
    backgroundColor: "#4CAF50", // default background
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  hover: {
    backgroundColor: "#0aacf7ff", // hover background
  },
};

export const CustomButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, style, onMouseEnter, onMouseLeave, ...props }) => {
  const [hover, setHover] = React.useState(false);

  // Merge default button styles with hover styles and user overrides
  const mergedStyle: React.CSSProperties = {
    ...defaultStyles.button,
    ...(hover ? defaultStyles.hover : {}),
    ...style,
  };

  return (
    <button
      style={mergedStyle}
      {...props} // Pass any other button props like onClick, disabled, etc.
      onMouseEnter={(e) => {
        setHover(true); // internally track hover state
        onMouseEnter?.(e); // call user-defined handler if provided
      }}
      onMouseLeave={(e) => {
        setHover(false); // reset hover state
        onMouseLeave?.(e); // call user-defined handler if provided
      }}
    >
      {children}
    </button>
  );
};
