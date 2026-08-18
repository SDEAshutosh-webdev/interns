import React, { useState } from "react";

const AddReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  const ratings = [
    { value: 1, emoji: "😡", label: "Terrible" },
    { value: 2, emoji: "😕", label: "Bad" },
    { value: 3, emoji: "😐", label: "Okay" },
    { value: 4, emoji: "😍", label: "Good" },
    { value: 5, emoji: "🤩", label: "Excellent" },
  ];

  const handleSubmit = (e) => {
  e.preventDefault();

  if (name.trim() === "" || rating === 0 || comment.trim() === "") {
    alert("Please fill all details");
    return;
  }

  const newReview = {
    id: Date.now(),
    name: name.trim(),
    rating,
    comment: comment.trim(),
  };

  onAddReview(newReview);

  setName("");
  setRating(0);      
  setComment("");
};

  const selectedRating =
  ratings.find((item) => item.value === rating) || {
    emoji: "⭐",
    label: "Tap a star to rate",
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>✍️ Write a Review</h3>

      {/* Name */}
      <label>Your Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Rating */}
      <div className="star-rating-section">
        <p>Rate your food</p>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? "filled blink" : ""}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="selected-rating">
          <span className="selected-emoji">{selectedRating.emoji}</span>
          <span className="selected-label">{selectedRating.label}</span>
        </div>
      </div>

      {/* Comment */}
      <label>Your Review</label>
      <textarea
        placeholder="Tell us about the food..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Submit */}
      <button type="submit" className="submit-review-btn">
        Submit Review
      </button>
    </form>
  );
};

export default AddReviewForm;