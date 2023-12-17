// ShoppingCart.js
import React, { useState, useEffect } from 'react';
import './Shoppingcart.css'; // Import the ShoppingCart.css file for styling

const ShoppingCart = () => {
  // State to manage shopping cart items
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to add an item to the shopping cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the shopping cart
  const removeItemFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== itemToRemove);
    setCartItems(updatedCart);
  };

  // Fetch data from the provided API
  const fetchData = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/appliances?size=20');
      const data = await response.json();
      // Assuming the API returns an array of objects with 'brand' and 'equipment' fields
      const itemsFromAPI = data.map((item) => ({ brand: item.brand, equipment: item.equipment }));
      setCartItems(itemsFromAPI);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculate total number of items in the cart
  const totalItems = cartItems.length;

  // Calculate subtotal (for example, assuming each item costs $10)
  const subtotal = totalItems * 10;

  // useEffect to log the current cartItems whenever it changes
  useEffect(() => {
    console.log('Current Cart Items:', cartItems);
  }, [cartItems]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="main-heading">Shopping Cart</h1>
      <section>
        <p className="section-description">
          Users can add and remove items from the shopping cart. Display the total number of items and the subtotal.
        </p>
        {/* Display total number of items and subtotal */}
        <p>Total Items in Cart: {totalItems}</p>
        <p>Subtotal: ${subtotal}</p>

        {/* Display shopping cart items */}
        <div className="item-container">
          {cartItems.map((item, index) => (
            <div className="item-box" key={index}>
              <h2>{item.brand}</h2>
              <p>{item.equipment}</p>
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShoppingCart;
