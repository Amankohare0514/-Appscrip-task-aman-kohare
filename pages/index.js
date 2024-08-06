// pages/index.js
import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FilterModal from "../components/FilterModal";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilterModal = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <Head>
        <title>Aman E-commerce - Discover Our Products</title>
        <meta
          name="description"
          content="Discover the best products in electronics, fashion, and more at Aman E-commerce. Shop now for great deals!"
        />
      </Head>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <ProductCard onFilterClick={toggleFilterModal} />
      </main>
      <FilterModal isOpen={isFilterOpen} onClose={toggleFilterModal} />
      <Footer />
    </div>
  );
}
