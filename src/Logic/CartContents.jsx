import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
export const CartContext = createContext();

// Helper to get initial cart from localStorage
const getInitialCart = () => {
  try {
    const storedCart = localStorage.getItem('shoppingCart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return []; // Return empty array if parsing fails
  }
};

// 2. Create the Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart);

  // Effect to save cart items to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]); // Dependency array: runs whenever cartItems changes

  // --- Cart Management Functions ---

  /**
   * Adds a product to the cart or increases its quantity if it already exists.
   * @param {object} product - The product object to add.
   * @param {number} quantity - The quantity to add.
   */
  const addToCart = (item, quantity) => {
    setCartItems(prevItems => { // prevItems is guaranteed to be the latest state
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
        return newItems;
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  /**
   * Removes a product from the cart.
   * @param {string} productId - The ID of the product to remove.
   */
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  /**
   * Updates the quantity of a specific product in the cart.
   * @param {string} productId - The ID of the product to update.
   * @param {number} newQuantity - The new quantity for the product.
   */
  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 } // Ensure quantity is at least 1
          : item
      );
    });
  };

  /**
   * Clears all items from the cart.
   */
  const clearCart = () => {
    setCartItems([]);
  };

  // --- Cart Information Functions ---

  /**
   * Calculates the total number of items in the cart (sum of quantities).
   * @returns {number} The total number of items.
   */
  const getCartTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Calculates the total price of all items in the cart.
   * @returns {number} The total price.
   */
  const getCartTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // The value that will be provided to consumers of this context
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotalItems,
    getCartTotalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Optional: Custom hook for easier consumption of the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};