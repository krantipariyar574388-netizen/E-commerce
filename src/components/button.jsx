const style = {
  minWidth: "130px",
  borderRadius: "6px",
  background: "#0a66f1",
  fontWeight: 700,
  fontSize: "20px",
  letterSpacing: "0.3px",
  color: "#ffff",
  padding: "10px",
  border: "none",
  cursor: "pointer",
};
const Button = ({ label = "Button", type = "button", onClick }) => {
  return (
    <button onClick={onClick} style={style} type={type}>
      {label}
    </button>
  );
};

export default Button;

//<Button /> // Login
//<Button /> // Register