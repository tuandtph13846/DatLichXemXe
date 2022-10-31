import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes } from "react-router-dom";

import Product from "./pages/client/Product/Product";
import ProductDetail from "./pages/client/ProductDetail/ProductDetail";
import Signin from "./pages/client/Signin/Signin";
import Signup from "./pages/client/Signup/Signup";
import Booking from "./pages/client/Booking/Booking";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import Dashboard from "./pages/admin/Dashboard";
import Aboutpage from "./pages/client/AboutPage/Aboutpage";
import WebsiteLayout from "./layouts/client/WebsiteLayout.jsx";
import Homepage from "./pages/client/Homepage/Homepage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/productsd" element={<ProductDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<Aboutpage />} />
          
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
