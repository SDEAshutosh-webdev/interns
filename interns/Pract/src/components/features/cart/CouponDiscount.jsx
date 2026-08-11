import React, { useState } from "react";
import "../../../styles/CouponDiscount.css";

const CouponDiscount = ({ total, setDiscountedTotal }) => {
  const [coupon, setCoupon] = useState("");
  const [discountMessage, setDiscountMessage] = useState("");

  const applyCoupon = () => {
    let newTotal = total;

    if (coupon === "FOODIE50") {
      newTotal = total - 50;
      setDiscountMessage("₹50 off applied!");
    } else if (coupon === "WELCOME20") {
      newTotal = total - total * 0.2;
      setDiscountMessage("20% off applied!");
    } else {
      setDiscountMessage("Invalid Coupon Code");
    }

    setDiscountedTotal(newTotal);
  };

  return (
    <div className="coupon-container">
      <h3>Apply Coupon</h3>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <button onClick={applyCoupon}>Apply</button>
      {discountMessage && <p>{discountMessage}</p>}
    </div>
  );
};

export default CouponDiscount;
