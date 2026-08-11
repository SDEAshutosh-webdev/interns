import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist in localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add or remove food
  const toggleWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(
        (food) => food.id === item.id
      );

      if (exists) {
        return prevWishlist.filter(
          (food) => food.id !== item.id
        );
      }

      return [...prevWishlist, item];
    });
  };

  // Check if food is already in wishlist
  const isInWishlist = (itemId) => {
    return wishlist.some(
      (food) => food.id === itemId
    );
  };

  // Remove food
  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter(
        (food) => food.id !== itemId
      )
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistProvider };