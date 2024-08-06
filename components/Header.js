// components/Header.js
import React from "react";
import styles from "../styles/Header.module.css"; // Import the CSS module
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure the path is correct


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.icons}>
                <i className={`fa-solid fa-vector-square  ${styles.icon1}`}></i>
            </div>
            <div className={styles.title}>
                <h1>APPSCRIP</h1>
            </div>
            <div className={styles.icons}>
                <i className={`fa fa-search  ${styles.icon}`}></i>
                <i className={`fa-solid fa-bag-shopping  ${styles.icon}`}></i>
                <i className={`fa-regular fa-heart ${styles.icon}`}></i>
                <i className={`fa-regular fa-user ${styles.icon}`}></i>
                <select className={styles.languageSelect}>
                    <option value="en">ENG</option>
                    <option value="hi">HINDI</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
