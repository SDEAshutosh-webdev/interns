import { useCart } from "../../../hooks/useCart";
import { useWishlist } from "../../../hooks/useWishlist";
import { formatPrice } from "../../../utils/formatters";

import "../../../styles/FoodCard.css";

function FoodCard({ item  , isOpen}) {
  const { addToCart } = useCart();

  // Wishlist
  const { toggleWishlist, isInWishlist } = useWishlist();

  const {
    id,
    image,
    title,
    description,
    price,
    isPopular,
    rating,
  } = item;

  const isFavorite = isInWishlist(id);

  return (
    <div className="food-card" onClick={isOpen}>
      <div className="food-image-wrapper">
        <img src={image} alt={title} className="food-image" />
        {isPopular && <span className="badge">Popular</span>}
        {rating && <span className="rating-badge">★ {rating}</span>}
      </div>
    <div className="food-card">

      {/* Wishlist Heart */}
      <button
        className="wishlist-button"
        onClick={() => toggleWishlist(item)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Food Image */}
      <img
        src={image}
        alt={title}
        className="food-image"
      />

      {/* Popular Badge */}
      {isPopular && (
        <span className="popular-badge">
          Popular
        </span>
      )}

      {/* Rating */}
      {rating && (
        <span className="food-rating">
          ★ {rating}
        </span>
      )}

      <div className="food-content">
        <h3 className="food-title">
          {title}
        </h3>

        <p className="food-description">
          {description}
        </p>

        <div className="food-footer">
          <span className="food-price">
            {formatPrice(price)}
          </span>

          <button
            className="food-btn"
            onClick={() => addToCart(item)}
          >
            + Add to Cart
          </button>
        </div>
      </div>

    </div>
  );
}

export default FoodCard;