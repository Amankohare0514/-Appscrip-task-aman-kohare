// components/ProductCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";
import FilterModal from "./FilterModal";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recommended"); 

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  // Handle sorting
  useEffect(() => {
    const sortProducts = () => {
      let sortedProducts = [...filteredProducts];

      switch (sortOption) {
        case "recommended":
          sortedProducts = [...products];
          break;
        case "newest":
          sortedProducts.sort((a, b) => b.id - a.id);
          break;
        case "popular":
          sortedProducts.sort((a, b) => a.rating.count - b.rating.count);
          break;
        case "highToLow":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "lowToHigh":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }

      setFilteredProducts(sortedProducts);
    };

    sortProducts();
  }, [sortOption, filteredProducts, products]);

  const toggleFilterModal = () => {
    setFilterOpen(!isFilterOpen);
  };

  const applyFilters = (categories, priceRange) => {
    const filtered = products.filter(
      (product) =>
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.container}>
      <header className={styles.productHeader}>
        <div className={styles.both}>
          <h2 className={styles.title}>{filteredProducts.length} ITEMS</h2>
          <h2 className={styles.filtertext} onClick={toggleFilterModal}>
            Show Filters
          </h2>
        </div>
        <select
          className={styles.sortSelect}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="recommended">Recommended</option>
          <option value="newest">Newest First</option>
          <option value="popular">Popular</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
        </select>
      </header>
      <div className={styles.productGrid}>
        {error && <div className={styles.error}>{error}</div>}
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.cardContent}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productDescription}>
                {product.description.substring(0, 100)}...
              </p>
              <div className={styles.iconContainer}>
                <FaHeart className={styles.heartIcon} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FilterModal
        isOpen={isFilterOpen}
        onClose={toggleFilterModal}
        applyFilters={applyFilters}
      />
    </div>
  );
};

export default ProductCard;
