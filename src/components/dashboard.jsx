import Button from "./button";

const Dashboard = ({ isLoading, isLoggedIn, error, role }) => {
  if (!isLoading) {
    return (
      <div style={{ minHeight: "200px", marginTop: "20px" }}>
        <p>Loading....</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: "200px", marginTop: "20px" }}>
        <p>Login Required</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: "200px", marginTop: "20px" }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <section style={{ minHeight: "200px", marginTop: "20px" }}>
      {role === "Admin" ? <h2>Admin Dashboard</h2> : <h2>User Dashboard</h2>}
      <p> Welcome {role === "Admin" ? "Admin" : "User"}</p>
      {role === "Admin" && <Button label="Manage Users" />}
    </section>
  );
};

export default Dashboard;