type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

export const Button = ({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const colors: any = {
    primary: "#0d6efd",
    secondary: "#6c757d",
    danger: "#dc3545",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: colors[variant || "primary"],
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "6px",
        margin: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {text}
    </button>
  );
};
