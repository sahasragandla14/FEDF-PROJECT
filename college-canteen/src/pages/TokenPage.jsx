import "../styles/Token.css";
import { useNavigate } from "react-router-dom";

function TokenPage() {

  const navigate = useNavigate();

  const tokenNumber =
    "CT" +
    Math.floor(
      1000 + Math.random() * 9000
    );

  localStorage.setItem(
    "lastToken",
    tokenNumber
  );

  const currentTime =
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  const goHome = () => {

    localStorage.removeItem("cart");

    navigate("/home");
  };

  return (
    <div className="token-page">

      <div className="token-card">

        <h1>🎟 Order Confirmed</h1>

        <h2>
          Token No : {tokenNumber}
        </h2>

        <p>
          🕒 Ordered At : {currentTime}
        </p>

        <p>
          ⏱ Estimated Wait Time :
          10 - 15 Minutes
        </p>

        <p>
          👨‍🍳 Status :
          Preparing
        </p>

        <p>
          🏪 Counter :
          2
        </p>

        <button
          onClick={() =>
            navigate("/history")
          }
        >
          📜 View History
        </button>

        <button
          onClick={goHome}
        >
          🏠 Home
        </button>

      </div>

    </div>
  );
}

export default TokenPage;