import "../styles/Feedback.css";
import { useNavigate } from "react-router-dom";

function FeedbackPage() {

  const navigate = useNavigate();

  const submitFeedback = () => {
    alert("Feedback Submitted Successfully!");
    navigate("/home");
  };

  return (
    <div className="feedback-page">

      <div className="feedback-card">

        <h1>⭐ Feedback</h1>

        <textarea
          rows="6"
          placeholder="Enter your feedback..."
        ></textarea>

        <button onClick={submitFeedback}>
          Submit Feedback
        </button>

        <button
          onClick={() => navigate("/history")}
        >
          ⬅ Back
        </button>

      </div>

    </div>
  );
}

export default FeedbackPage;