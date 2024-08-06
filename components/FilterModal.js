import React, { useState } from "react";
import styles from "../styles/FilterModal.module.css"

const FilterModal = ({ isOpen, onClose, applyFilters }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleApply = () => {
    applyFilters(selectedCategories, priceRange);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Filter Options</h3>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.filterCategory}>
            <h4>Category</h4>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="electronics"
                  onChange={() => handleCategoryChange("electronics")}
                  checked={selectedCategories.includes("electronics")}
                />
                <label htmlFor="electronics">Electronics</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="jewelery"
                  onChange={() => handleCategoryChange("jewelery")}
                  checked={selectedCategories.includes("jewelery")}
                />
                <label htmlFor="jewelery">Jewelery</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="men's clothing"
                  onChange={() => handleCategoryChange("men's clothing")}
                  checked={selectedCategories.includes("men's clothing")}
                />
                <label htmlFor="men's clothing">Men's Clothing</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="women's clothing"
                  onChange={() => handleCategoryChange("women's clothing")}
                  checked={selectedCategories.includes("women's clothing")}
                />
                <label htmlFor="women's clothing">Women's Clothing</label>
              </li>
            </ul>
          </div>
          <div className={styles.filterPrice}>
            <h4>Price Range</h4>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([Number(e.target.value), priceRange[1]])
              }
              className={styles.rangeInput}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className={styles.rangeInput}
            />
            <div>
              <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.applyButton} onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
