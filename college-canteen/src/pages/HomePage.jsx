import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function HomePage() {

  const navigate = useNavigate();

  const categories = [
    { emoji: "🍳", name: "Breakfast", path: "breakfast", className: "breakfast" },
    { emoji: "🍲", name: "Meals", path: "meals", className: "meals" },
    { emoji: "🍟", name: "Snacks", path: "snacks", className: "snacks" },
    { emoji: "🥤", name: "Juices", path: "juices", className: "juices" },
    { emoji: "🍕", name: "Pizza", path: "pizza", className: "pizza" },
    { emoji: "🍔", name: "Burgers", path: "burgers", className: "burgers" },
    { emoji: "🍜", name: "Noodles", path: "noodles", className: "noodles" },
    { emoji: "🍨", name: "Ice Creams", path: "icecreams", className: "icecream" },
    { emoji: "🥗", name: "Healthy", path: "healthy", className: "healthy" },
    { emoji: "⭐", name: "Specials", path: "specials", className: "specials" }
  ];

  const showTimings = () => {
    alert(
      "🏫 College Canteen Timings\n\n" +
      "⏰ Opens : 8:00 AM\n\n" +
      "☕ Break : 1:00 PM - 1:20 PM\n\n" +
      "🔔 Reopens : 1:20 PM\n\n" +
      "🚪 Closes : 5:00 PM\n\n" +
      "⚡ Average Order Preparation Time : 10 - 15 Minutes"
    );
  };

  return (
    <div className="home-page">

      <div className="hero-section">

        <h1 className="home-title">
          🍽️ Smart College Canteen
        </h1>

        <p className="home-subtitle">
          Skip the Queue • Order Smart • Collect Fast
        </p>

      </div>

      <div className="top-buttons">

        <button
          className="top-btn"
          onClick={() => navigate("/profile")}
        >
          👤 Profile
        </button>

        <button
          className="top-btn"
          onClick={() => navigate("/history")}
        >
          📜 History
        </button>

        <button
          className="top-btn"
          onClick={() => navigate("/feedback")}
        >
          ⭐ Feedback
        </button>

        <button
          className="top-btn"
          onClick={() => navigate("/admin")}
        >
          👨‍💼 Admin
        </button>

        <button
          className="top-btn"
          onClick={showTimings}
        >
          🕒 Timings
        </button>

        <button
          className="top-btn logout"
          onClick={() => navigate("/")}
        >
          🚪 Logout
        </button>

      </div>

      <div className="categories-grid">

        {categories.map((item, index) => (

          <div
            key={index}
            className={`category-card ${item.className}`}
            onClick={() =>
              navigate(`/menu/${item.path}`)
            }
          >

            <div className="category-icon">
              {item.emoji}
            </div>

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HomePage;