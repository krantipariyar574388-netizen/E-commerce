import Card from "./card";
import { Link } from "react-router";

const UserCard = ({user, skills = ["html","CSS"],}) => {
    // console.log(props);
    if (!user) return null;

    const { name, email, active, id } = user;
    
  return (
    <Link style = {{ textDecoration : "none" }} to = {`/users/${user.id}`}>
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