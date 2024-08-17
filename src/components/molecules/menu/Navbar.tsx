import React from "react";
import css from "./navbar.css";
import { navbarLinks } from "constants/constants";

function Navbar() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <a href="#experience" className={css.link}>
            {navbarLinks.experience}
          </a>
        </li>
        <li className={css.item}>
          <a href="#stack" className={css.link}>
            {navbarLinks.stack}
          </a>
        </li>
        <li className={css.item}>
          <a href="#aboutMe" className={css.link}>
            {navbarLinks.aboutMe}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
