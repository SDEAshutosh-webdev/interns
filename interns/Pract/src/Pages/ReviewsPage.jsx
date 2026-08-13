import React from "react";
import { useParams } from "react-router-dom";
import ReviewList from "../components/features/reviews/ReviewList";

const reviewsData = {
  "maharashtrian-poha": [
    {
      id: 1,
      name: "Yashshri",
      rating: 5,
      comment: "Best Poha! Fresh and tasty.",
    },
    {
      id: 2,
      name: "Aarav",
      rating: 4,
      comment: "Really enjoyed the flavor.",
    },
  ],

  "special-dum-biryani": [
    {
      id: 1,
      name: "Sneha",
      rating: 5,
      comment: "Amazing Biryani, full of spices.",
    },
  ],

  "shahi-paneer-curry": [
    {
      id: 1,
      name: "Rohit",
      rating: 4,
      comment: "Paneer was soft and creamy.",
    },
  ],

  "crispy-veg-burger": [
    {
      id: 1,
      name: "Priya",
      rating: 5,
      comment: "Burger was super crispy and delicious.",
    },
  ],

  "cheese-margherita-pizza": [
    {
      id: 1,
      name: "Karan",
      rating: 5,
      comment: "Cheese was perfectly melted.",
    },
  ],

  "samosa-chaat-(2-pcs)": [
    {
      id: 1,
      name: "Anjali",
      rating: 4,
      comment: "Crispy samosa and tasty chutney.",
    },
  ],
};

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