import { useNavigate } from "react-router-dom";
import "../styles/Billing.css";

function BillingPage() {

  const navigate = useNavigate();

  const cartItems =
    JSON.parse(
      localStorage.getItem("cart")
    ) || [];

  const subtotal =
    cartItems.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );

  const gst =
    Math.round(subtotal * 0.05);

  const total =
    subtotal + gst;

  const currentTime =
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  return (
    <div className="billing-page">

      <button
        className="back-btn"
        onClick={() =>
          navigate("/cart")
        }
      >
        ⬅ Back
      </button>

      <div className="billing-card">

        <h1 className="billing-title">
          🍽️ Canteen Billing Summary
        </h1>

        {cartItems.length === 0 ? (

          <div className="empty-box">

            <h2>
              No Items Selected
            </h2>

            <button
              className="home-btn"
              onClick={() =>
                navigate("/home")
              }
            >
              🏠 Go Home
            </button>

          </div>

        ) : (

          <>

            {cartItems.map(
              (item, index) => (

              <div
                key={index}
                className="bill-item"
              >

                <span>
                  {item.name}
                </span>

                <span>
                  ₹{item.price}
                </span>

              </div>

            ))}

            <div className="total-box">

              <h3>
                Sub Total
              </h3>

              <h2>
                ₹{subtotal}
              </h2>

              <h3>
                GST (5%)
              </h3>

              <h2>
                ₹{gst}
              </h2>

              <h3>
                Final Amount
              </h3>

              <h1>
                ₹{total}
              </h1>

              <p>
                🕒 Billing Time :
                {currentTime}
              </p>

              <p>
                ⏱ Estimated Food
                Ready Time :
                10 - 15 Minutes
              </p>

            </div>

            <button
              className="token-btn"
              onClick={() =>
                navigate("/token")
              }
            >
              🎟️ Generate Token
            </button>

          </>

        )}

      </div>

    </div>
  );
}

export default BillingPage;