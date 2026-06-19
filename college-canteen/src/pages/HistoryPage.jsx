import { useNavigate } from "react-router-dom";
import "../styles/History.css";

function HistoryPage() {
  const navigate = useNavigate();

  const orders = [
    {
      token: "CT101",
      items: "🍕 Pizza, 🍔 Burger",
      total: 180,
    },
    {
      token: "CT102",
      items: "🍜 Noodles, 🥤 Coke",
      total: 120,
    },
    {
      token: "CT103",
      items: "🍛 Veg Biryani",
      total: 80,
    },
  ];

  return (
    <div className="history-container">

      <div className="history-header">

        <button
          className="back-btn"
          onClick={() => navigate("/home")}
        >
          ⬅ Back
        </button>

        <h1 className="history-title">
          🍽️ Order History
        </h1>

      </div>

      <div className="history-card">

        {orders.length > 0 ? (
          <>
            {orders.map((order, index) => (
              <div
                className="order-item"
                key={index}
              >
                <div>
                  <h3>{order.token}</h3>
                  <p>{order.items}</p>
                </div>

                <div className="amount">
                  ₹{order.total}
                </div>
              </div>
            ))}

            <button
              className="feedback-btn"
              onClick={() => navigate("/feedback")}
            >
              ⭐ Give Feedback
            </button>
          </>
        ) : (
          <div className="no-orders">
            <h2>No Orders Found</h2>
          </div>
        )}

      </div>

    </div>
  );
}

export default HistoryPage;