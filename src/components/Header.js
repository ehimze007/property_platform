import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"; // Import CSS module

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Property Platform</div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/properties" className={styles.navLink}>
              Properties
            </Link>
          </li>
          <li>
            <Link to="/sign-up" className={styles.navLink}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className={styles.navLink}>
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
