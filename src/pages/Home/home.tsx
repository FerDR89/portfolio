import React from "react";
import { Layout } from "components/layout/Layout";

import css from "./home.css";

function Home() {
  return (
    <section className={css.home}>
      <Layout />
    </section>
  );
}
export { Home };
