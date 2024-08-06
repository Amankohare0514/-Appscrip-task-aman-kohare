// components/Footer.js

import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Footer Top Section */}
            <div className={styles.footerTop}>
                {/* Left Side: Search Bar and Subscribe Button */}
                <div className={styles.footerLeft}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                    <button className={styles.subscribeButton}>Subscribe</button>
                </div>

                {/* Right Side: Contact Details */}
                <div className={styles.footerRight}>
                    <h3>Contact Us</h3>
                    <p>Phone: +1 234 567 890</p>
                    <p>Email: contact@aman-ecommerce.com</p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className={styles.footerBottom}>
                {/* Three Columns */}
                <div className={styles.footerColumns}>
                    {/* Links Column */}
                    <div className={styles.footerColumn}>
                        <h3>mettā muse</h3>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#shop">Shop</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className={styles.footerColumn}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                            <li>
                                <a href="#shipping">Shipping</a>
                            </li>
                            <li>
                                <a href="#returns">Returns</a>
                            </li>
                            <li>
                                <a href="#support">Support</a>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div className={styles.footerColumn}>
                        <h3>Follow Us</h3>
                        <ul className={styles.socialLinks}>
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className={styles.footerContent}>
                <p>&copy; Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
