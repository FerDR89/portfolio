import React from "react";
import css from "./navbar.css";
import { navbarLinks } from "constants/constans";

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
          <a href="#projects" className={css.link}>
            {navbarLinks.projects}
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
