import apiClient from "./apiClient";
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_FARMERS } from "../data/mockData";

export const productService = {
  // Fetch all products with filtering & sorting fallback
  getProducts: async (filters = {}) => {
    try {
      const response = await apiClient.get("/products/", { params: filters });
      return response.data;
    } catch {
      // Fallback to rich mock data
      let result = [...MOCK_PRODUCTS];

      if (filters.category) {
        result = result.filter((p) => p.categoryId === filters.category || p.category.toLowerCase().includes(filters.category.toLowerCase()));
      }
      if (filters.search) {
        const query = filters.search.toLowerCase();
        result = result.filter((p) =>
          p.name.toLowerCase().includes(query) ||
          p.farmer.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
        );
      }
      if (filters.isOrganic) {
        result = result.filter((p) => p.isOrganic);
      }
      if (filters.maxPrice) {
        result = result.filter((p) => p.price <= Number(filters.maxPrice));
      }
      if (filters.sort) {
        if (filters.sort === "price-low") result.sort((a, b) => a.price - b.price);
        if (filters.sort === "price-high") result.sort((a, b) => b.price - a.price);
        if (filters.sort === "rating") result.sort((a, b) => b.rating - a.rating);
      }

      return { results: result, count: result.length };
    }
  },

  getProductById: async (id) => {
    try {
      const response = await apiClient.get(`/products/${id}/`);
      return response.data;
    } catch {
      return MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];
    }
  },

  getCategories: async () => {
    try {
      const response = await apiClient.get("/categories/");
      return response.data;
    } catch {
      return MOCK_CATEGORIES;
    }
  },

  getFarmers: async () => {
    try {
      const response = await apiClient.get("/farmers/");
      return response.data;
    } catch {
      return MOCK_FARMERS;
    }
  }
};
