import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [branch, setBranch] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {

    if (
      !name ||
      !rollNo ||
      !branch ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all details");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      alert("Name should contain only letters");
      return;
    }

    if (!/^[0-9]{10}$/.test(rollNo)) {
      alert("Roll Number must be exactly 10 digits");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const student = {
      name,
      rollNo,
      branch,
      password
    };

    localStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <h1 className="register-title">
          🎓 Student Registration
        </h1>

        <p className="register-subtitle">
          Create Your College Canteen Account
        </p>

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="10 Digit Roll Number"
          value={rollNo}
          onChange={(e) =>
            setRollNo(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Branch"
          value={branch}
          onChange={(e) =>
            setBranch(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password (Min 6 Characters)"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />

        <button
          className="register-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

      </div>

    </div>
  );
}

export default RegisterPage;