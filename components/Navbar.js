import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navLink}>
            SHOP
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/skills" className={styles.navLink}>
            SKILL
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/stories" className={styles.navLink}>
            STORIES
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>
            ABOUT
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/contact" className={styles.navLink}>
            CONTACT
          </a>
        </li>
      </ul>
      <hr className={styles.hr}/>
    </nav>
  );
};

export default Navbar;
