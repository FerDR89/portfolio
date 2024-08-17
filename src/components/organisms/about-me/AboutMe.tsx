import React from "react";
import css from "./about.css";
import Text from "components/atoms/text/Text";
import Title from "components/molecules/title/Title";
import { aboutMe } from "constants/constants";

const AboutMe = () => {
  return (
    <section id="aboutMe" className={css.root}>
      <Title section="aboutMe" />
      <Text
        tag="text-body"
        text={aboutMe}
        customStyle={{ lineHeight: "1.4", whiteSpace: "pre-line" }}
      />
    </section>
  );
};

export default AboutMe;
