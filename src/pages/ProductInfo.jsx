import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/product';
import { useCart } from '../Logic/CartContents'; // <--- Import useCart hook
import '../styles/product-info.css';

export default function ProductInfo() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // <--- Access addToCart from the cart context

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1); // State for quantity selector

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);
      if (foundProduct.images && foundProduct.images.length > 0) {
        setMainImage(foundProduct.images[0]);
      }
      setQuantity(1); // Reset quantity to 1 when a new product is loaded
    } else {
      navigate('/products');
    }
  }, [productId, navigate]);

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleQuantityChange = (e) => {
    const inputValue = e.target.value; // Get the raw string value

    // Allow empty string or numbers
    if (inputValue === '' || /^\d+$/.test(inputValue)) {
      setQuantity(inputValue); // Set state to raw string (empty or numeric string)
    }
    // Optionally, if you want to prevent non-digit input:
    // else if (!/^\d*$/.test(inputValue)) {
    //   // If it contains non-digits, don't update state
    //   return;
    // }
  };

  const handleQuantityBlur = () => {
    let numericQuantity = parseInt(quantity);
    if (isNaN(numericQuantity) || numericQuantity < 1) {
      setQuantity(1); // Default to 1 if empty or invalid after blurring
    } else {
      setQuantity(numericQuantity); // Ensure it's a number, not a string "1"
    }
  };

  const handleAddToCart = () => {
    if (product) {
      // ⭐ UPDATED: Ensure quantity is a valid number before adding to cart
      const quantityToAdd = parseInt(quantity);
      if (isNaN(quantityToAdd) || quantityToAdd < 1) {
        alert("Please enter a valid quantity (at least 1).");
        setQuantity(1); // Reset to 1 if invalid
        return;
      }
      addToCart(product, quantityToAdd);
      // Optionally reset quantity to 1 after adding to cart
    }
  };

  if (!product) {
    return (
      <div className="product-info-loading">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="product-info-page-container">
      <div className="product-info-grid">
        {/* Product Image Gallery */}
        <div className="product-image-gallery">
          <div className="main-image-container">
            <img src={mainImage} alt={product.name} className="main-product-image" />
          </div>
          <div className="thumbnail-gallery">
            {product.images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`thumbnail-image ${mainImage === imgSrc ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(imgSrc)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-details-name">{product.name}</h1>

          <div className="product-details-price">
            <p>R {product.price}</p>
          </div>

          <div className="product-description-section">
            <h3 className="section-title">Description</h3>
            <p className="product-description">{product.description}</p>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="product-features-section">
              <h3 className="section-title">Key Features</h3>
              <ul className="product-features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="product-specifications-section">
              <h3 className="section-title">Specifications</h3>
              <ul className="product-specifications-list">
                {product.specifications.waterproof && <li><strong>Waterproof: </strong> {product.specifications.waterproof}</li>}
                {product.specifications.RatedVoltage && <li><strong>Rated Voltage:</strong> {product.specifications.RatedVoltage}</li>}
                {product.specifications.Connectivity && <li><strong>Connectivity:</strong> {product.specifications.Connectivity}</li>}
                {product.specifications.HasNightVision && <li><strong>Has Night Vision:</strong> {product.specifications.HasNightVision}</li>}
              </ul>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="product-actions">
            <div className="quantity-selector">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="text" // ⭐ IMPORTANT: Use type="text" to allow empty string
                pattern="[0-9]*" // Suggests number input for mobile keyboards
                inputMode="numeric" // Suggests numeric keyboard on mobile
                id="quantity-input"
                min="1" // HTML5 min attribute is still good for validation/semantics
                value={quantity} // Bind to state, which can be ""
                onChange={handleQuantityChange}
                onBlur={handleQuantityBlur} // ⭐ NEW: Handle blur event
                className="quantity-input"
                aria-label="Product quantity"
              />
            </div>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          {/* Stock, Rating etc. can go here */}
          <div className="product-meta">
            {product.stock !== undefined && <p><strong>Stock:</strong> {product.stock === 'n/a' ? 'n/a' : product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>}
            {product.rating && <p><strong>Rating:</strong> {product.rating} </p>}
          </div>
        </div>
      </div>
    </div>
  );
}