import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatters";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/CartPage.css";

function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="cart-page empty-cart-container">
        <div className="order-success-card">
          <span className="success-icon">🎉</span>
          <h2>Order Placed Successfully!</h2>
          <p>Your delicious food is being prepared and will be delivered shortly.</p>
          <Button text="Order More Food" variant="primary" onClick={() => { setOrderPlaced(false); navigate("/menu"); }} />
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Food Order Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty right now.</p>
          <Button text="Explore Food Menu" variant="primary" onClick={() => navigate("/menu")} />
        </div>
      ) : (
        <div className="cart-layout">
          {/* Cart Items List */}
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <span className="cart-item-price">{formatPrice(item.price)} each</span>
                </div>

                <div className="cart-qty-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

                <div className="cart-item-subtotal">
                  {formatPrice(item.price * item.quantity)}
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary Card */}
          <div className="cart-summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className="free-tag">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <Button text="Proceed to Checkout" variant="primary" onClick={handleCheckout} />
            <Button text="Clear Cart" variant="secondary" onClick={clearCart} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
