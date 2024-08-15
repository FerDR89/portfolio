import React from "react";
import css from "./layout.css";
import { Navbar } from "components/molecules/menu/Navbar";
import { MyFooter } from "components/organisms/my-footer/MyFooter";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <Navbar />
      </header>
      <main className={css.main}>{children}</main>
      <footer className={css.footer}>
        <MyFooter />
      </footer>
    </>
  );
};

export default Layout;
