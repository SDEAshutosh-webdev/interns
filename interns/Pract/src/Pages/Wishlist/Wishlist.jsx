import { useWishlist } from "../../hooks/useWishlist";
import FoodCard from "../../components/features/food/FoodCard";

import "../../styles/Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h1>My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>No foods added to wishlist.</p>
      ) : (
        <div className="products-grid">
          {wishlist.map((food) => (
            <FoodCard key={food.id} item={food} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;