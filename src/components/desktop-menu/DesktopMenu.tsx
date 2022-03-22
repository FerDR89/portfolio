import React, { useState } from "react";
import css from "components/desktop-menu/desktopMenu.css";
import { useChangeNavColor } from "hooks/hooks";
import { MyButton } from "ui/link-button/LinkButton";

function DesktopMenu() {
  const navOption = useChangeNavColor();
  return (
    <article className={css.root}>
      <nav
        className={
          navOption ? `${css["nav"]} , ${css["nav-active"]} ` : css["nav"]
        }
      >
        {navOption ? <MyButton /> : <h2 className={css.logo}>FerDR89</h2>}
        <ul className={css.list}>
          <li className={css.item}>
            <a href="#welcome" className={css.link}>
              Home
            </a>
          </li>
          <li className={css.item}>
            <a href="#projects" className={css.link}>
              Proyectos
            </a>
          </li>
          <li className={css.item}>
            <a href="#about-me" className={css.link}>
              Acerca de mí
            </a>
          </li>
          <li className={css.item}>
            <a href="#contacto" className={css.link}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </article>
  );
}

export { DesktopMenu };
