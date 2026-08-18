import React from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../components/features/reviews/ReviewList";
import { reviewsData } from "../api/mockData";

const ReviewsPage = () => {
  const { foodId } = useParams();

  const reviews = reviewsData[foodId] || [];

  return (
    <div style={{ padding: "20px" }}>
      <ReviewList
        foodName={foodId.replace(/-/g, " ")}
        reviews={reviews}
      />
    </div>
  );
};

export default ReviewsPage;