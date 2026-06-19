import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

function ProfilePage() {

  const navigate = useNavigate();

  const student =
    JSON.parse(
      localStorage.getItem("student")
    ) || {};

  return (
    <div className="profile-page">

      <div className="profile-card">

        <h1>👤 Student Profile</h1>

        <div className="profile-info">

          <h3>
            👨 Name :
            {student.name || " Student"}
          </h3>

          <h3>
            🎓 Roll Number :
            {student.rollNo || " Not Available"}
          </h3>

          <h3>
            🏫 Branch :
            {student.branch || " Not Available"}
          </h3>

        </div>

        <button
          className="profile-btn"
          onClick={() => navigate("/history")}
        >
          📜 View Order History
        </button>

        <button
          className="profile-btn"
          onClick={() => navigate("/feedback")}
        >
          ⭐ Give Feedback
        </button>

        <button
          className="profile-btn"
          onClick={() => navigate("/home")}
        >
          🏠 Back To Home
        </button>

        <button
          className="logout-btn"
          onClick={() => navigate("/")}
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default ProfilePage;