import Card from "./card";
const UserCard = ({user : {name, email, active},
skills = ["html","CSS"],}) => {
    // console.log(props);
  return (
    
    <div className = "card user-card">
      <Card>
   <img 
    //   src = {kranti}
    //   alt = "User Profile"
    //   className = 'avatar'
       />
      <h3>I'am, {name}</h3>
      <p className = "email">Email : {email}</p>
      <p className = "active">Active : {active ? "true" : "false"}</p>
      <p className = "skills">Skills : {skills.join()}</p>
      </Card>
    </div>
    
  );
};

export default UserCard;