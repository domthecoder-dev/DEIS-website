import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Logic/CartContents';
import '../styles/product-card.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // ⭐ New conditional check to see if the product is a service ⭐
  const isService = product.category === 'services';

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <Link to={`/shop/${product.id}`} className="product-card-content-link">
        <div className="product-image-container">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          {/* ⭐ Conditionally render the price based on whether it's a service ⭐ */}
          <p className="product-price">
            {isService ? `${product.price}` : `R${product.price}`}
          </p>
        </div>
      </Link>

      <div className="product-card-actions">
        {isService ? (
          // ⭐ Renders a "Get a Quote" button for services ⭐
          <Link to="/quote" >
           <button className="product-add-button"> Get a Quote</button> 
          </Link>
        ) : (
          // ⭐ Renders the original "Add to Cart" button for other products ⭐
          <button
            className={`product-add-button ${isAdded ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        )}
        <button className={'learn-more-button'}>
          <Link to={`/shop/${product.id}`} className="product-card-content-link">More About Product</Link>
        </button>
      </div>
    </div>
  );
}