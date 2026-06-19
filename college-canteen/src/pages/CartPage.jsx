import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function CartPage() {
  const navigate = useNavigate();

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="cart-page">

      <h1 className="cart-title">🛒 My Cart</h1>

      <div className="cart-buttons">
        <button onClick={() => navigate("/home")}>
          ⬅ Back
        </button>

        <button onClick={clearCart}>
          ❌ Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>No Items Added</h2>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item"
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
            <h2>Total: ₹{total}</h2>
          </div>

          <button
            className="billing-btn"
            onClick={() =>
              navigate("/billing")
            }
          >
            Proceed To Billing
          </button>
        </>
      )}

    </div>
  );
}

export default CartPage;