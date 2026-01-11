import React from "react";

const defaultStyles = {
  button: {
    background: "linear-gradient(135deg, #f0a834ff, #ebc262ff)", // indigo gradient
    color: "#ffffff",
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: "0.3px",
    boxShadow: "0 6px 16px rgba(79, 70, 229, 0.35)",
    transition: "all 0.25s ease-in-out, transform 0.15s ease-in-out",
    outline: "none",
  },
  hover: {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 24px rgba(79, 70, 229, 0.45)",
    background: "linear-gradient(135deg, #4338ca, #4f46e5)",
  },
  active: {
    transform: "translateY(0)",
    boxShadow: "0 4px 10px rgba(79, 70, 229, 0.3)",
  },
  disabled: {
    background: "#c7c7c7",
    color: "#6b6b6b",
    cursor: "not-allowed",
    boxShadow: "none",
    transform: "none",
  },
};

export const CustomButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  style,
  disabled,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...props
}) => {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const mergedStyle: React.CSSProperties = {
    ...defaultStyles.button,
    ...(hover && !disabled ? defaultStyles.hover : {}),
    ...(active && !disabled ? defaultStyles.active : {}),
    ...(disabled ? defaultStyles.disabled : {}),
    ...style,
  };

  return (
    <button
      {...props}
      disabled={disabled}
      style={mergedStyle}
      onMouseEnter={(e) => {
        setHover(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        setActive(false);
        onMouseLeave?.(e);
      }}
      onMouseDown={(e) => {
        setActive(true);
        onMouseDown?.(e);
      }}
      onMouseUp={(e) => {
        setActive(false);
        onMouseUp?.(e);
      }}
    >
      {children}
    </button>
  );
};
