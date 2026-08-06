import ProductCard from '../Common/ProductCard';
import '../App.css';

function ProductPage() {
  return (
    <div className="container">
      <ProductCard
        image="/images/poha.jpg"
        title="Poha"
        description="Fresh and healthy breakfast made with flattened rice."
        price={80}
      />
      <ProductCard
        image="/images/biryani.jpg"
        title="Biryani"
        description="Aromatic basmati rice with rich spices and vegetables."
        price={180}
      />
      <ProductCard
        image="/images/paneer.jpg"
        title="Paneer Curry"
        description="Soft paneer cubes cooked in creamy tomato gravy."
        price={220}
      />
    </div>
  );
}

export default ProductPage;