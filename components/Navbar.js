// components/Navbar.js
import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/shop" className={styles.navLink}>
            SHOP
          </Link>
        </li>
        <li className={styles.navItem}>
          <a href="#skill" className={styles.navLink}>
            SKILL
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#stories" className={styles.navLink}>
            STORIES
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>
            ABOUT
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>
            CONTACT
          </a>
        </li>
      </ul>
      <hr className={styles.hr}/>
    </nav>
  );
};

export default Navbar;
