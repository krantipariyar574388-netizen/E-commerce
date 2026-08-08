import { useParams } from "react-router";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <p>Loading.....</p>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", margin: "20px", borderRadius: "8px" }}>
      <h2>I'm, {user.name}</h2>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
      <p>Website : {user.website}</p>
    </div>
  );
};

export default UserDetail;