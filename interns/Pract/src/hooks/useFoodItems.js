import { useState, useEffect } from "react";
import { foodService } from "../api/foodService";

export const useFoodItems = (category = "All") => {
  const [dataState, setDataState] = useState({
    foodItems: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    foodService
      .getFoodByCategory(category)
      .then((data) => {
        if (isMounted) {
          setDataState({
            foodItems: data,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          setDataState((prev) => ({
            ...prev,
            loading: false,
            error: err.message || "Failed to load food items",
          }));
        }
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  return {
    foodItems: dataState.foodItems,
    loading: dataState.loading,
    error: dataState.error,
  };
};
