import { useState } from "react";

const style = {
  minWidth: "130px",
  borderRadius: "6px",
  background: "#fefefe",
  fontWeight: 700,
  fontSize: "20px",
  letterSpacing: "0.3px",
  color: "#4e4e4e",
  padding: "10px",
  border: "none",
  cursor: "pointer",
};

const Counter = () => {
  // const [getter , setter] = useState(initial)
  let [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    // setCount(count + 1);
    console.log(count);
  };

  const onDecrement = () => {
    // count--;
    setCount((count) => { return count - 1}); 
    // setCount((count) => { return count - 1});
    console.log(count);
  };

  console.log("counter", count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement} style={style}>
        Increment
      </button>
      <button onClick={onDecrement} style={style}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;