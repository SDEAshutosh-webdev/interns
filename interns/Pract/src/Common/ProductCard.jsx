import '../Styles/ProductCard.css';

function ProductCard({ image, title, description, price }) {
  return (
    <div className="food-card">
      <div className="food-image-wrapper">
        <img src={image} alt={title} className="food-image" />
        <span className="badge">Popular</span>
      </div>

      <div className="food-content">
        <h2 className="food-title">{title}</h2>
        <p className="food-description">{description}</p>

        <div className="food-footer">
          <span className="food-price">Rs.{price}</span>
          <button className="food-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;