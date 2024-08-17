import React from "react";
import Layout from "components/templates/layout/Layout";
import Welcome from "components/organisms/welcome/Welcome";
import Experience from "components/organisms/experience/Experience";
import AboutMe from "components/organisms/about-me/AboutMe";
import Stack from "components/organisms/stack/Stack";

function Home() {
  return (
    <Layout>
      <Welcome />
      <Experience />
      <Stack />
      <AboutMe />
    </Layout>
  );
}
export { Home };
