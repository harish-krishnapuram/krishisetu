import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import BuyerLayout from "../layouts/BuyerLayout/BuyerLayout";
import FarmerLayout from "../layouts/FarmerLayout/FarmerLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";

// Public Pages
import Home from "../pages/public/Home/Home";
import Shop from "../pages/public/Shop/Shop";
import Categories from "../pages/public/Categories/Categories";
import Farmers from "../pages/public/Farmers/Farmers";
import About from "../pages/public/About/About";
import Contact from "../pages/public/Contact/Contact";
import ProductDetails from "../pages/public/ProductDetails/ProductDetails";
import Cart from "../pages/public/Cart/Cart";
import Checkout from "../pages/public/Checkout/Checkout";
import Login from "../pages/public/Login/Login";
import Register from "../pages/public/Register/Register";

// Buyer Pages
import BuyerDashboard from "../pages/buyer/BuyerDashboard/BuyerDashboard";
import BuyerOrders from "../pages/buyer/BuyerOrders/BuyerOrders";
import OrderTrack from "../pages/buyer/OrderTrack/OrderTrack";
import BuyerWishlist from "../pages/buyer/BuyerWishlist/BuyerWishlist";
import BuyerNotifications from "../pages/buyer/BuyerNotifications/BuyerNotifications";
import BuyerProfile from "../pages/buyer/BuyerProfile/BuyerProfile";

// Farmer Pages
import FarmerDashboard from "../pages/farmer/FarmerDashboard/FarmerDashboard";
import FarmerProducts from "../pages/farmer/FarmerProducts/FarmerProducts";
import FarmerInventory from "../pages/farmer/FarmerInventory/FarmerInventory";
import FarmerOrders from "../pages/farmer/FarmerOrders/FarmerOrders";
import SalesReport from "../pages/farmer/SalesReport/SalesReport";
import FarmerReviews from "../pages/farmer/FarmerReviews/FarmerReviews";
import FarmerProfile from "../pages/farmer/FarmerProfile/FarmerProfile";

// Admin Pages
import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import ManageFarmers from "../pages/admin/ManageFarmers/ManageFarmers";
import ManageBuyers from "../pages/admin/ManageBuyers/ManageBuyers";
import ManageProducts from "../pages/admin/ManageProducts/ManageProducts";
import ManageCategories from "../pages/admin/ManageCategories/ManageCategories";
import AdminOrders from "../pages/admin/AdminOrders/AdminOrders";
import AdminReports from "../pages/admin/AdminReports/AdminReports";
import AdminSettings from "../pages/admin/AdminSettings/AdminSettings";

function AppRoutes() {
  return (
    <Routes>
      {/* 1. Public E-Commerce Marketplace Routes (Persistent MainLayout: Navbar + Outlet + Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 2. Buyer Portal Protected Routes */}
      <Route
        path="/buyer"
        element={
          <ProtectedRoute allowedRoles={["buyer", "farmer", "admin"]}>
            <BuyerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<BuyerDashboard />} />
        <Route path="orders" element={<BuyerOrders />} />
        <Route path="orders/:id/track" element={<OrderTrack />} />
        <Route path="wishlist" element={<BuyerWishlist />} />
        <Route path="notifications" element={<BuyerNotifications />} />
        <Route path="profile" element={<BuyerProfile />} />
      </Route>

      {/* 3. Farmer Producer Portal Protected Routes */}
      <Route
        path="/farmer"
        element={
          <ProtectedRoute allowedRoles={["farmer", "admin"]}>
            <FarmerLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<FarmerDashboard />} />
        <Route path="products" element={<FarmerProducts />} />
        <Route path="inventory" element={<FarmerInventory />} />
        <Route path="orders" element={<FarmerOrders />} />
        <Route path="sales-report" element={<SalesReport />} />
        <Route path="reviews" element={<FarmerReviews />} />
        <Route path="profile" element={<FarmerProfile />} />
      </Route>

      {/* 4. Super Admin Governance Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="farmers" element={<ManageFarmers />} />
        <Route path="buyers" element={<ManageBuyers />} />
        <Route path="products" element={<ManageProducts />} />
        <Route path="categories" element={<ManageCategories />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* Catch-all fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;