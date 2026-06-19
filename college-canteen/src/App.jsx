import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import TokenPage from "./pages/TokenPage";
import HistoryPage from "./pages/HistoryPage";
import FeedbackPage from "./pages/FeedbackPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={<LoginPage />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Home Page */}
        <Route
          path="/home"
          element={<HomePage />}
        />

        {/* Menu Categories */}
        <Route
          path="/menu/:category"
          element={<MenuPage />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<CartPage />}
        />

        {/* Billing */}
        <Route
          path="/billing"
          element={<BillingPage />}
        />

        {/* Token */}
        <Route
          path="/token"
          element={<TokenPage />}
        />

        {/* Order History */}
        <Route
          path="/history"
          element={<HistoryPage />}
        />

        {/* Feedback */}
        <Route
          path="/feedback"
          element={<FeedbackPage />}
        />

        {/* Admin */}
        <Route
          path="/admin"
          element={<AdminPage />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<ProfilePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;