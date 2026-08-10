import { MOCK_FOOD_ITEMS } from "./mockData";

// Data Service Layer (Abstracts future REST API calls)
export const foodService = {
  // Fetch all food items (simulates an API endpoint)
  getAllFoodItems: async () => {
    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 150));
    return MOCK_FOOD_ITEMS; 
  },

  // Fetch food item by ID
  getFoodItemById: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return MOCK_FOOD_ITEMS.find((item) => item.id === id) || null;
  },

  // Fetch food items by Category
  getFoodByCategory: async (category) => {
    await new Promise((resolve) => setTimeout(resolve, 150));
    if (!category || category === "All") return MOCK_FOOD_ITEMS;
    return MOCK_FOOD_ITEMS.filter((item) => item.category === category);
  },
};
