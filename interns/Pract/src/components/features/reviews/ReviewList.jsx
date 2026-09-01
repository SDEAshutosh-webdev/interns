import React, { useState } from "react";
import "../../../Styles/ReviewSection.css";
import AddReviewForm from "./AddReviewForm";

const ReviewList = ({ foodName, reviews }) => {
  const [reviewList, setReviewList] = useState(reviews || []);

const handleAddReview = (newReview) => {
  const reviewWithDetails = {
    ...newReview,
    id: Date.now(),
    avatar: "/images/avatars/default.png",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    verified: false,
  };

  setReviewList((prev) => [reviewWithDetails, ...prev]);
};
  const averageRating =
    reviewList.length > 0
      ? (
          reviewList.reduce((sum, review) => sum + Number(review.rating), 0) /
          reviewList.length
        ).toFixed(1)
      : "0.0";

  const getEmoji = (rating) => {
    switch (Number(rating)) {
      case 5:
        return "🤩";
      case 4:
        return "😍";
      case 3:
        return "😐";
      case 2:
        return "😕";
      case 1:
        return "😡";
      default:
        return "🙂";
    }
  };

  return (
    <div className="review-section">
      <div className="review-summary">
  <h2>{foodName} Reviews & Ratings</h2>

  <div className="summary-rating">
    <span className="summary-score">{averageRating}</span>

    <span className="summary-stars">
  {"★".repeat(Math.round(Number(averageRating)))}
  {"☆".repeat(5 - Math.round(Number(averageRating)))}
    </span> 
    
    <span className="summary-count">
      ({reviewList.length} reviews)
    </span>
  </div>
</div>
      <AddReviewForm onAddReview={handleAddReview} />

      {reviewList.map((review) => (
        <div className="review-card" key={review.id}>
        <div className="review-avatar">
       <img
       src={review.avatar || "/images/avatars/default.png"}
       alt={`${review.name}'s avatar`}
       />
       </div>

          <div className="review-content">
            <div className="review-header">
  <div>
    <div className="review-name-row">
      <h4>{review.name}</h4>

      {review.verified && (
        <span className="verified-badge">✓</span>
      )}
    </div>

    {review.verified && (
      <span className="verified-user">
        ✓ Verified Customer
      </span>
    )}
  </div>

  <span className="review-date">
    {review.date}
  </span>
  </div>

            <div className="review-rating">
              {"★".repeat(Number(review.rating))}
              {"☆".repeat(5 - Number(review.rating))}
              <span className="review-emoji">
                {getEmoji(review.rating)}
              </span>
            </div>
 
            <p>{review.comment}</p>

            <div className="review-actions">
              <button className="like-btn">❤️ Helpful</button>

              <div className="rating-badge">
              {review.rating} ★
                 </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;