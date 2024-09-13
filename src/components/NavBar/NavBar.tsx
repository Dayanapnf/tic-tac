import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <h3>
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h3>
      </NavLink>
      <ul className={styles.linksList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Jogo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
