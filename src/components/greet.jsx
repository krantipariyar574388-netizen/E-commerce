// props ={}

import Button from "./button";

// const Greet = (props) => {
const Greet = ({ name = "Guest", role }) => {
  // props.name = "hello";
  // console.log(props);
  // let { name} = props;
  // name = "hello";
  console.log(role);
  return (
    <div>
      <h2>Good Morning,{name}</h2>
      {/* {role === "Admin" ? <Button label="Manage Users" /> : null} */}
      {role === "Admin" && <Button label="Manage Users" />}
    </div>
  );
};

export default Greet;