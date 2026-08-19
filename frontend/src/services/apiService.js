import apiClient from "./apiClient";
import {
  MOCK_PRODUCTS,
  MOCK_CATEGORIES,
  MOCK_FARMERS,
  MOCK_ORDERS,
  MOCK_ANALYTICS
} from "../data/mockData";

// ==========================================
// ACCOUNTS & AUTHENTICATION API ENDPOINTS
// ==========================================

export const loginApi = async (email, password, role = "buyer") => {
  try {
    const response = await apiClient.post("/accounts/login/", { email, password, role });
    return response.data;
  } catch (error) {
    console.warn("Backend API unavailable or error, using demo auth response:", error.message);
    // Fallback response for offline demo testing
    return {
      token: `jwt-token-${role}-${Date.now()}`,
      user: {
        id: `user-${Date.now()}`,
        name: email.split("@")[0].toUpperCase(),
        email,
        role,
        avatar: role === "farmer"
          ? "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80"
          : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        address: "123 Green Valley, India"
      }
    };
  }
};

export const registerApi = async (userData) => {
  try {
    const response = await apiClient.post("/accounts/register/", userData);
    return response.data;
  } catch (error) {
    console.warn("Backend API registration fallback:", error.message);
    return {
      token: `jwt-token-${userData.role || 'buyer'}-${Date.now()}`,
      user: { id: `user-${Date.now()}`, ...userData }
    };
  }
};

export const getProfileApi = async () => {
  try {
    const response = await apiClient.get("/accounts/me/");
    return response.data;
  } catch (error) {
    return null;
  }
};

// ==========================================
// PRODUCTS & CATEGORIES API ENDPOINTS
// ==========================================

export const getProductsApi = async (params = {}) => {
  try {
    const response = await apiClient.get("/products/items/", { params });
    // Transform backend fields if needed
    if (Array.isArray(response.data)) {
      return response.data.map(transformBackendProduct);
    } else if (response.data?.results) {
      return response.data.results.map(transformBackendProduct);
    }
    return MOCK_PRODUCTS;
  } catch (error) {
    console.warn("Using products fallback data:", error.message);
    return MOCK_PRODUCTS;
  }
};

export const getProductByIdApi = async (id) => {
  try {
    const response = await apiClient.get(`/products/items/${id}/`);
    return transformBackendProduct(response.data);
  } catch (error) {
    return MOCK_PRODUCTS.find((p) => p.id === id || String(p.id) === String(id)) || MOCK_PRODUCTS[0];
  }
};

export const createProductApi = async (productData) => {
  try {
    const response = await apiClient.post("/products/items/", productData);
    return transformBackendProduct(response.data);
  } catch (error) {
    console.warn("Backend create product fallback:", error.message);
    return { id: `prod-${Date.now()}`, ...productData };
  }
};

export const updateProductApi = async (id, productData) => {
  try {
    const response = await apiClient.put(`/products/items/${id}/`, productData);
    return transformBackendProduct(response.data);
  } catch (error) {
    return { id, ...productData };
  }
};

export const deleteProductApi = async (id) => {
  try {
    await apiClient.delete(`/products/items/${id}/`);
    return true;
  } catch (error) {
    return true;
  }
};

export const getCategoriesApi = async () => {
  try {
    const response = await apiClient.get("/products/categories/");
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        icon: c.icon || "bi-egg-fried",
        image: c.image || c.image_url || "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
        itemCount: c.item_count || 12,
        badge: c.badge || "Direct Farm Fresh"
      }));
    }
    return MOCK_CATEGORIES;
  } catch (error) {
    return MOCK_CATEGORIES;
  }
};

export const getFarmersApi = async () => {
  try {
    const response = await apiClient.get("/products/farmers/");
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data.map((f) => ({
        id: f.id,
        name: f.user?.first_name ? `${f.user.first_name} ${f.user.last_name}` : f.user?.username || "Verified Farmer",
        farmName: f.farm_name,
        location: f.location,
        state: f.state,
        rating: f.rating,
        reviewsCount: f.reviews_count,
        experience: `${f.experience_years}+ Years`,
        avatar: f.user?.avatar || f.user?.avatar_url || "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80",
        specialties: f.specialties || ["Organic Crops"]
      }));
    }
    return MOCK_FARMERS;
  } catch (error) {
    return MOCK_FARMERS;
  }
};

// ==========================================
// ORDERS & TRACKING API ENDPOINTS
// ==========================================

export const getOrdersApi = async () => {
  try {
    const response = await apiClient.get("/orders/");
    if (Array.isArray(response.data)) {
      return response.data;
    }
    return MOCK_ORDERS;
  } catch (error) {
    return MOCK_ORDERS;
  }
};

export const createOrderApi = async (orderData) => {
  try {
    const response = await apiClient.post("/orders/", orderData);
    return response.data;
  } catch (error) {
    console.warn("Create order API fallback:", error.message);
    return { id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`, ...orderData };
  }
};

export const trackOrderApi = async (orderId) => {
  try {
    const response = await apiClient.get(`/orders/${orderId}/track/`);
    return response.data;
  } catch (error) {
    return MOCK_ORDERS[0];
  }
};

// ==========================================
// ANALYTICS DASHBOARD API ENDPOINT
// ==========================================

export const getAnalyticsApi = async () => {
  try {
    const response = await apiClient.get("/analytics/dashboard/");
    return response.data || MOCK_ANALYTICS;
  } catch (error) {
    return MOCK_ANALYTICS;
  }
};

// Helper function to map Django backend field names to frontend properties
function transformBackendProduct(p) {
  if (!p) return null;
  return {
    id: p.id,
    name: p.name,
    category: p.category_name || p.category?.name || "Fresh Produce",
    categoryId: p.category?.id || p.category,
    price: Number(p.price),
    originalPrice: p.original_price ? Number(p.original_price) : null,
    discountPercentage: p.discount_percentage || 0,
    unit: p.unit || "kg",
    unitOptions: p.unit_options || ["1 kg", "2 kg crate"],
    stock: p.stock || 100,
    rating: Number(p.rating || 5.0),
    ratingCount: p.rating_count || 1,
    image: p.image || p.image_url || "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    farmer: p.farmer ? {
      name: p.farmer.first_name ? `${p.farmer.first_name} ${p.farmer.last_name}` : p.farmer.username,
      avatar: p.farmer.avatar || p.farmer.avatar_url || "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80"
    } : { name: "Rameshwar Patel", avatar: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80" },
    harvestDate: p.harvest_date || "Today (Morning)",
    isOrganic: p.is_organic ?? true,
    isDirectFromFarmer: p.is_direct_from_farmer ?? true,
    isFeatured: p.is_featured ?? false,
    isTodayDeal: p.is_today_deal ?? false,
    dealTimerHours: p.deal_timer_hours || 12,
    description: p.description || "",
    specifications: p.specifications || {}
  };
}
