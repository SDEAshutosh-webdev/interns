import "./FoodDetailsModal.css";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../utils/formatters";

function FoodDetailsModal({ item, closePopup }) {
  const { addToCart } = useCart();

  if (!item) {
    return null;
  }

  const {
    image,
    title,
    description,
    price,
    category,
    rating,
    isPopular,
  } = item;

  const handleAddToCart = () => {
    addToCart(item);
    closePopup();
  };

  return (
    <div className="food-modal-overlay" onClick={closePopup}>
      <div
        className="food-details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          className="food-modal-close"
          onClick={closePopup}
          aria-label="Close"
        >
          ✕
        </button>

      
        <div className="food-modal-image-wrapper">
          <img src={image} alt={title} className="food-modal-image" />

          {isPopular && (
            <span className="food-modal-popular">Popular</span>
          )}
        </div>


        <div className="food-modal-content">
          <div className="food-modal-header">
            <h2>{title}</h2>

            {rating && (
              <span className="food-modal-rating">★ {rating}</span>
            )}
          </div>

          {category && (
            <span className="food-modal-category">{category}</span>
          )}

          <p className="food-modal-description">{description}</p>


          <div className="food-modal-footer">
            <span className="food-modal-price">{formatPrice(price)}</span>

            <button
              className="food-modal-cart-btn"
              onClick={handleAddToCart}
            >
              + Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetailsModal;