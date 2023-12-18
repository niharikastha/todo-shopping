// Cart.js
import React, { useState, useEffect } from 'react';
import './Shoppingcart.css'; // Import the ShoppingCart.css file for styling
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

const Cart = () => {
  // State to manage items in the cart
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  // Fetch data from the provided API
  const fetchData = async () => {
    try {
      // Retrieve cart items from URL parameters
      const params = new URLSearchParams(location.search);
      const cartItemsParam = params.get('cartItems');

      // If cart items are present, parse the JSON string into an array
      if (cartItemsParam !== null) {
        const decodedCartItems = decodeURIComponent(cartItemsParam);
        setCartItems(JSON.parse(decodedCartItems));

        // Store cart items in localStorage
        localStorage.setItem('cartItems', decodedCartItems);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  // useEffect to log the current cartItems whenever it changes
  useEffect(() => {
    console.log('Current Cart Items:', cartItems);

    // Save cartItems to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to remove an item from the cart
  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCart);
  };

  // Calculate total number of items in the cart
  const totalItems = cartItems.length;

  // Calculate subtotal (for example, assuming each item costs $10)
  const subtotal = totalItems * 10;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <Header /><br />
      <h1 className="heading">Shopping Cart</h1>
      <section>
        <p className="description">
          Users can view and manage items in the shopping cart.
        </p>

        {/* Display cart items */}
        <div className="item-container">
          {cartItems.map((item, index) => (
            <div className="item-box" key={index}>
              <h2>{item.brand}</h2>
              <p>{item.equipment}</p>
              <button onClick={() => removeItemFromCart(item)}>Remove from Cart</button>
            </div>
          ))}
        </div>

        {/* Display total number of items and subtotal */}
        <p>Total Items in Cart: {totalItems}</p>
        <p>Subtotal: ${subtotal}</p>
      </section>
    </div>
  );
};

export default Cart;
