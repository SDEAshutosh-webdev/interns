// Utility functions for formatting numbers, currency, and text

export const formatPrice = (amount) => {
  return `₹${amount}`;
};

export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
