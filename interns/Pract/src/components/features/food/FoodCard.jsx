import { useCart } from "../../../hooks/useCart";
import { useWishlist } from "../../../hooks/useWishlist";
import { formatPrice } from "../../../utils/formatters";

import "../../../Styles/FoodCard.css";
import "../../../Styles/Wishlist.css";



function FoodCard({ item, isOpen }) {
  const { addToCart } = useCart();
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

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(item);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <div className="food-card" onClick={isOpen}>
      <div className="food-image-wrapper">
        <img src={image} alt={title} className="food-image" />
        {isPopular && <span className="badge">Popular</span>}
        {rating && <span className="rating-badge">★ {rating}</span>}
        
        {/* Wishlist Heart */}
        <button
          className="wishlist-button"
          onClick={handleWishlist}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="food-content">
        <h3 className="food-title">{title}</h3>
        <p className="food-description">{description}</p>

        <div className="food-footer">
          <span className="food-price">{formatPrice(price)}</span>
          <button
            className="food-btn"
            onClick={handleAddToCart}
          >
            + Add to Cart
          </button>
         
         
        </div>
      </div>
    </div>
  );
}

export default FoodCard;