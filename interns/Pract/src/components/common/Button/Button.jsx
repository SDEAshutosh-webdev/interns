import "../../../styles/Button.css";

function Button({
  text,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  children,
}) {
  return (
    <button
      className={`btn ${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text || children}
    </button>
  );
}

export default Button;
