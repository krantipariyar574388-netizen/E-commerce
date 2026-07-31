const Card = ({ children }) => {
  //
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        width: "fit-content",
        textAlign: "start",
        boxShadow: "2px 0px 10px gray",
      }}
    >
      {children}
    </div>
  );
};

export default Card;