import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LoginPage() {
  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!rollNo || !password) {
      alert("Please enter Roll Number and Password");
      return;
    }

    if (rollNo.length !== 10) {
      alert("Roll Number must be 10 digits");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="food-icon">
          🍔 🍕 🍟 🥤 🍜 🍨
        </div>

        <h1>Smart College Canteen</h1>

        <p>
          Skip the Queue • Order Smart • Collect Fast
        </p>

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="register">
          New User?{" "}
          <span onClick={() => navigate("/register")}>
            Register Here
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;