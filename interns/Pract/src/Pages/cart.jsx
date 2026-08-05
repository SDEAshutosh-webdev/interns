import React, { useState } from "react";

function Cart() {
  // Sample cart items
  const [items, setItems] = useState([
    { id: 1, name: "Shoes", price: 1200, qty: 1 },
    { id: 2, name: "T-Shirt", price: 500, qty: 2 },
    { id: 3, name: "Jeans", price: 1500, qty: 1 },
  ]);

  // Function to remove item
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Calculate total
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h1>🛒 Shopping Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price} × {item.qty}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;
