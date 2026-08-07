import Card from "./card";
import { Link } from "react-router";

const UserCard = ({user : {name, email, active,id},
skills = ["html","CSS"],}) => {
    // console.log(props);
  return (
    <Link style = {{ textDecoration : "none" }} to = {`users/${id}`}>
    <div className = "card user-card">
      <Card>
        <img 
          // src = {kranti}
          // alt = "User Profile"
          // className = 'avatar'
          />
      <h3>I'am, {name}</h3>
      <p className = "email">Email : {email}</p>
      <p className = "active">Active : {active ? "true" : "false"}</p>
      <p className = "skills">Skills : {skills.join()}</p>
      </Card>
    </div>
    </Link>
    
  );
};

export default UserCard;