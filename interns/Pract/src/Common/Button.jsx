import "../Styles/Button.css";

function Button({
  text,
  variant ="primary",
  type = "button",
  onClick,
  disabled = false,
}) {
  return (
    <button
      className={`btn ${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;