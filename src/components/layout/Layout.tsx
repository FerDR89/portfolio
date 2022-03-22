import React, { useState, useEffect } from "react";
import css from "components/layout/layout.css";
import { useWindowSize } from "hooks/hooks";
import { BurgerMenu } from "components/burger-menu/BurgerMenu";
import { DesktopMenu } from "components/desktop-menu/DesktopMenu";
import { Welcome } from "components/welcome/Welcome";
import { AboutMe } from "components/about-me/AboutMe";
import { Stack } from "components/stack/Stack";
import { Projects } from "components/projects/Projects";
import { MyFooter } from "components/my-footer/MyFooter";

function Layout() {
  const viewport = useWindowSize();
  return (
    <section>
      <header className={css.header}>
        {viewport ? <BurgerMenu /> : <DesktopMenu />}
      </header>
      <main className={css.main}>
        <Welcome />
        <Projects />
        <Stack />
        <AboutMe />
      </main>
      <footer className={css.footer}>
        <MyFooter />
      </footer>
    </section>
  );
}

export { Layout };
