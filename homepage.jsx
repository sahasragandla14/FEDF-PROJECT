import background from "../assets/background.jpg";

function HomePage() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: url(${background}),
      }}
    >
      <div className="overlay">
        <div className="home-content">
          <h1>🍴 College Canteen Token System</h1>

          <p>Fast • Easy • Smart Food Ordering</p>

          <div className="cards">
            
            <div className="card">
              <h2>🎫 Token Booking</h2>
              <p>Generate digital food tokens instantly.</p>
            </div>

            <div className="card">
              <h2>📋 Menu</h2>

              <ul>
                <li>Veg Meals - ₹80</li>
                <li>Chicken Biryani - ₹120</li>
                <li>Burger - ₹60</li>
                <li>Cold Coffee - ₹40</li>
              </ul>
            </div>

            <div className="card">
              <h2>💳 Billing</h2>

              <p>Total Bill: ₹200</p>

              <button className="pay-btn">
                Pay Now
              </button>
            </div>

            <div className="card">
              <h2>🔢 Token Number</h2>

              <p>Your Token: #A102</p>
            </div>

            <div className="card">
              <h2>🕒 Order Status</h2>

              <p>Preparing Your Order...</p>
            </div>

            <div className="card">
              <h2>📞 Help Desk</h2>

              <p>Contact: 9876543210</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;