import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import ProductSection1 from "./components/ProductSection1";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
import Subscribe from "./components/Subscribe";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";
import Model from "./components/Model";

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Load user from localStorage when the app starts
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Add Product to Cart
  const addToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  // Remove Product from Cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Add Product to Wishlist
  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  return (
    <Router>
      {/* <Header cart={cart} wishlist={wishlist} setSelectedCategory={setSelectedCategory} /> */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Slider />
              <Banner />
              <ProductSection />
              <Banner1 />
              <ProductSection1 selectedCategory={selectedCategory} addToCart={addToCart} addToWishlist={addToWishlist} />
              <Blog />
              <Instagram />
              <Subscribe />
              <Banner2 />
              <Footer />
              <Model />
            </>
          }
        />

        {/* Login & Register Pages */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />

        {/* Protected Route: Header */}
        <Route
          path="/header"
          element={
            user ? (
              <>
                <Header cart={cart} wishlist={wishlist} setSelectedCategory={setSelectedCategory} />
                <Slider />
                <Banner />
                <ProductSection />
                <Banner1 />
                <ProductSection1 selectedCategory={selectedCategory} addToCart={addToCart} addToWishlist={addToWishlist} />
                <Blog />
                <Instagram />
                <Subscribe />
                <Banner2 />
                <Footer />
                <Model />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Category-based Product Page */}
        <Route path="/products" element={<ProductSection1 selectedCategory={selectedCategory} addToCart={addToCart} addToWishlist={addToWishlist} />} />

        {/* Cart & Wishlist Pages */}
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} addToCart={addToCart} />} />

        {/* Other Pages */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
