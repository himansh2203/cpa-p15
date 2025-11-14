import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <nav className="dashboard-nav">
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
