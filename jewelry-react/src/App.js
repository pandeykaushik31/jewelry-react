import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import Banner1 from "./components/Banner1";
import ProductSection1 from "./components/ProductSection1";
import Blog from "./components/Blog";
import Instagram from "./components/Instagram";
import Subscribe from "./components/Subscribe";
import Banner2 from "./components/Banner2";
import Modal from "./components/Modal";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage when the app starts
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page - Always accessible */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Slider />
              <Banner />
              <ProductSection />
              <Banner1/>
              <ProductSection1/>
              <Blog/>
              <Instagram/>
              <Subscribe/>
              <Banner2/>
              <Footer />
              <Modal/>
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Register Page */}
        <Route path="/register" element={<Register setUser={setUser} />} />

        {/* Protected Route - Header Page with all necessary components */}
        <Route
          path="/header"
          element={
            user ? (
              <>
                <Header />
                <Slider />
                <Banner />
                <ProductSection />
                <Footer />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
