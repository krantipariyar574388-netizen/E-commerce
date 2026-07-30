import { Children } from "react";

// const Greet = (props) => {
    const Greet = ({ name = "puku", role}) => {
    //     console.log(role);
    // console.log(props);
    console.log(role);
  return (
    <div>
    <h2>Good morning, {name}</h2>
    </div>
  );
};

export default Greet;

// Children props