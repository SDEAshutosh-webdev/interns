import React, { useState } from "react";
import "../../../styles/CheckoutForm.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
    instructions: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone Number must be 10 digits";
    }

    if (!formData.street.trim()) {
      newErrors.street = "Street Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    }

    if (!formData.instructions.trim()) {
      newErrors.instructions = "Delivery Instructions are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Delivery Details Submitted Successfully!");

      console.log(formData);

      setFormData({
        fullName: "",
        phone: "",
        street: "",
        city: "",
        pincode: "",
        instructions: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="checkout-container">
      <h2>Delivery Details</h2>

      <form onSubmit={handleSubmit} className="checkout-form">

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && (
          <span className="error">{errors.fullName}</span>
        )}

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && (
          <span className="error">{errors.phone}</span>
        )}

        <label>Street Address</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {errors.street && (
          <span className="error">{errors.street}</span>
        )}

        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && (
          <span className="error">{errors.city}</span>
        )}

        <label>Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
        {errors.pincode && (
          <span className="error">{errors.pincode}</span>
        )}

        <label>Delivery Instructions</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
        ></textarea>
        {errors.instructions && (
          <span className="error">{errors.instructions}</span>
        )}

        <button type="submit">Place Order</button>

      </form>
    </div>
  );
};

export default CheckoutForm;