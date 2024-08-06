// components/ProductCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import styles from "../styles/ProductCard.module.css";
import FilterModal from "./FilterModal";

const ProductCard = () => {
  const [products, setProducts] = useState([]); // Original fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Products after applying filters
  const [sortedProducts, setSortedProducts] = useState([]); // Products after applying sort
  const [error, setError] = useState(null);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("recommended"); // Default sorting option

  // Fetching the products from the API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
        setSortedProducts(response.data); // Initialize with all products
      })
      .catch((err) => setError(err.message));
  }, []);

  // Apply sorting based on the selected sort option
  useEffect(() => {
    const sortProducts = () => {
      let sorted = [...filteredProducts]; // Copy of the filtered products

      switch (sortOption) {
        case "recommended":
          // Recommended logic can be custom or default sorting.
          sorted = [...filteredProducts]; // Reset to filtered state
          break;
        case "newest":
          sorted.sort((a, b) => b.id - a.id); // Assuming 'id' relates to the newest items.
          break;
        case "popular":
          // As the API doesn't provide popularity, we'll simulate this by random sort.
          sorted.sort((a, b) => b.rating.count - a.rating.count);
          break;
        case "highToLow":
          sorted.sort((a, b) => b.price - a.price);
          break;
        case "lowToHigh":
          sorted.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }

      setSortedProducts(sorted); // Set the sorted products
    };

    sortProducts();
  }, [sortOption, filteredProducts]); // Trigger sorting whenever the filter or sort option changes

  // Toggle filter modal visibility
  const toggleFilterModal = () => {
    setFilterOpen(!isFilterOpen);
  };

  // Apply filters based on selected categories and price range
  const applyFilters = (categories, priceRange) => {
    const filtered = products.filter(
      (product) =>
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );

    setFilteredProducts(filtered); // Set filtered products
  };

  return (
    <div className={styles.container}>
      <header className={styles.productHeader}>
        <div className={styles.both}>
          <h2 className={styles.title}>{sortedProducts.length} ITEMS</h2> {/* Display the count of sorted products */}
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
        {sortedProducts.map((product) => ( // Render sorted products
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
