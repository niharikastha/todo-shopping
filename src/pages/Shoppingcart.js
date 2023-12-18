// ShoppingCart.js
import React, { useState, useEffect } from 'react';
import './Shoppingcart.css'; // Import the ShoppingCart.css file for styling
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const navigate = useNavigate();

  // State to manage shopping cart items
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to add an item to the shopping cart
  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Function to navigate to the cart page
  const goToCart = () => {
    // Convert cart items to JSON string
    const cartItemsJSON = JSON.stringify(cartItems);

    // Encode the JSON string to make it URL-safe
    const encodedCartItems = encodeURIComponent(cartItemsJSON);

    // Navigate to the cart page with cart items in the URL
    navigate(`/cart?cartItems=${encodedCartItems}`);
  };

  // Fetch product data from the provided API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/appliances?size=20');
      const data = await response.json();
      // Assuming the API returns an array of objects with 'id', 'brand', and 'equipment' fields
      setProducts(data.map((item) => ({ id: item.id, brand: item.brand, equipment: item.equipment })));
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <nav className="tabs">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <button onClick={goToCart}>Go to Cart</button>
      </nav>
      <Header /><br />
      <h1 className="heading">Product Listing</h1>
      <section>
        <p className="description">
          Users can add items to the shopping cart.
        </p>

        {/* Display product items */}
        <div className="item-container">
          {products.map((item) => (
            <div className="item-box" key={item.id}>
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
