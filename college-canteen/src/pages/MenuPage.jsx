import "../styles/Menu.css";
import { useNavigate, useParams } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate();
  const { category } = useParams();

  const menuData = {
  breakfast: [
    { name: "Idli", price: 30 },
    { name: "Dosa", price: 40 },
    { name: "Upma", price: 35 },
    { name: "Poori", price: 45 },
    { name: "Pongal", price: 50 },
    { name: "Sandwich", price: 60 },
    { name: "Cheese Toast", price: 55 },
    { name: "Omelette", price: 40 }
  ],

  meals: [
    { name: "Veg Biryani", price: 80 },
    { name: "Chicken Biryani", price: 120 },
    { name: "Full Meals", price: 100 },
    { name: "Paneer Biryani", price: 110 },
    { name: "Fried Rice", price: 90 },
    { name: "Chicken Fried Rice", price: 130 },
    { name: "Veg Meals", price: 90 },
    { name: "Dal Rice", price: 70 }
  ],

  snacks: [
    { name: "Burger", price: 60 },
    { name: "Pizza Slice", price: 80 },
    { name: "French Fries", price: 50 },
    { name: "Samosa", price: 20 },
    { name: "Veg Puff", price: 25 },
    { name: "Corn Cup", price: 40 },
    { name: "Popcorn", price: 35 },
    { name: "Masala Peanuts", price: 30 }
  ],

  juices: [
    { name: "Mango Juice", price: 40 },
    { name: "Orange Juice", price: 45 },
    { name: "Coke", price: 30 },
    { name: "Apple Juice", price: 50 },
    { name: "Pineapple Juice", price: 45 },
    { name: "Watermelon Juice", price: 40 },
    { name: "Milkshake", price: 60 },
    { name: "Cold Coffee", price: 70 }
  ],

  pizza: [
    { name: "Margherita Pizza", price: 120 },
    { name: "Farmhouse Pizza", price: 150 },
    { name: "Cheese Pizza", price: 140 },
    { name: "Corn Pizza", price: 135 },
    { name: "Mushroom Pizza", price: 160 },
    { name: "Spicy Veg Pizza", price: 170 }
  ],

  burgers: [
    { name: "Veg Burger", price: 60 },
    { name: "Cheese Burger", price: 90 },
    { name: "Chicken Burger", price: 120 },
    { name: "Spicy Burger", price: 100 },
    { name: "Crispy Veg Burger", price: 80 },
    { name: "Double Patty Burger", price: 150 }
  ],

  noodles: [
    { name: "Veg Noodles", price: 70 },
    { name: "Egg Noodles", price: 90 },
    { name: "Chicken Noodles", price: 120 },
    { name: "Schezwan Noodles", price: 100 },
    { name: "Hakka Noodles", price: 110 },
    { name: "Mixed Veg Noodles", price: 85 }
  ],

  icecreams: [
    { name: "Vanilla Ice Cream", price: 50 },
    { name: "Chocolate Ice Cream", price: 60 },
    { name: "Strawberry Ice Cream", price: 70 },
    { name: "Mango Ice Cream", price: 65 },
    { name: "Oreo Ice Cream", price: 90 },
    { name: "Butterscotch Ice Cream", price: 80 },
    { name: "Kulfi", price: 40 },
    { name: "Choco Bar", price: 35 },
    { name: "Black Current Ice Cream", price: 85 },
    { name: "Cone Ice Cream", price: 45 }
  ],

  healthy: [
    { name: "Green Salad", price: 50 },
    { name: "Fruit Salad", price: 60 },
    { name: "Milk", price: 25 },
    { name: "Sprouts", price: 45 },
    { name: "Veg Bowl", price: 70 },
    { name: "Banana Shake", price: 50 }
  ],

  specials: [
    { name: "Special Thali", price: 150 },
    { name: "Chef Special", price: 180 },
    { name: "Chicken Combo", price: 220 },
    { name: "Burger Combo", price: 180 },
    { name: "Pizza Combo", price: 250 },
    { name: "Festival Combo", price: 300 }
  ]
};

  const foods = menuData[category] || [];

  const addToCart = (food) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(food);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(food.name + " Added To Cart");
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <button onClick={() => navigate("/home")}>
          Back
        </button>

        <h1>{category?.toUpperCase()}</h1>

        <button onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>

      <div className="food-grid">
        {foods.map((food, index) => (
          <div className="food-card" key={index}>
            <h2>{food.name}</h2>

            <p>₹{food.price}</p>

            <button onClick={() => addToCart(food)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;