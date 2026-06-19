import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

function AdminPage() {

  const navigate = useNavigate();

  return (
    <div className="admin-page">

      <div className="admin-card">

        <h1>👨‍💼 Admin Dashboard</h1>

        <div className="admin-box">
          <h2>Total Orders</h2>
          <p>120</p>
        </div>

        <div className="admin-box">
          <h2>Today's Revenue</h2>
          <p>₹12,500</p>
        </div>

        <div className="admin-box">
          <h2>Pending Orders</h2>
          <p>18</p>
        </div>

        <button
          onClick={() => navigate("/home")}
        >
          Back To Home
        </button>

      </div>

    </div>
  );
}

export default AdminPage;