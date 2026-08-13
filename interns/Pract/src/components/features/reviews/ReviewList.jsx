import React, { useState } from "react";
import "../../../Styles/ReviewSection.css";
import AddReviewForm from "./AddReviewForm";

const ReviewList = ({ foodName, reviews }) => {
  const [reviewList, setReviewList] = useState(reviews || []);

const handleAddReview = (newReview) => {
  setReviewList([newReview, ...reviewList]);
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
    <span className="summary-stars">★★★★★</span>
    <span className="summary-count">
      ({reviewList.length} reviews)
    </span>
  </div>
</div>
      <AddReviewForm onAddReview={handleAddReview} />

      {reviewList.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="review-avatar">
            {review.name.charAt(0).toUpperCase()}
          </div>

          <div className="review-content">
            <div className="review-header">
              <div>
                <h4>{review.name}</h4>
                <span className="verified-user">✔ Verified Customer</span>
              </div>

              <div className="rating-badge">
                {review.rating} ★
              </div>
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;