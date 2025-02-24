import React from "react"; // default export

const Header = function () {
  return (
    <div className="header">
      <img src="../images/logo.png" alt="Sensure Logo" width="200px" />
      <div className="header-sections">
        <div className="current-section">Home</div>
        <a href="./pages/product.html">Product</a>
        <a href="./pages/news.html">News</a>
        <a href="./pages/contact.html">Contact</a>
        <a href="./pages/about.html">About Us</a>
      </div>
    </div>
  );
};

export default Header;
