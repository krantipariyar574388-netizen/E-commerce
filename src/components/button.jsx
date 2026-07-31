const Button = ({ label = "Button" }) => {
  return (
    <button
      style={{
        minWidth: "130px",
        borderRadius: "6px",
        background: "#0c41ee",
        fontWeight: 700,
        fontSize: "20px",
        letterSpacing: "0.3px",
        color: "#ffff",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;

//<Button /> // Login
//<Button /> // Register