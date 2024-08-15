import React from "react";
import css from "./about.css";
import Text from "components/atoms/text/Text";
import { aboutMe } from "constants/constans";

const AboutMe = () => {
  return (
    <section id="aboutMe" className={css.root}>
      <div className={css.title_container}>
        <Text tag="subtitle" text="Sobre mi" />
      </div>
      <Text
        tag="text-body"
        text={aboutMe}
        customStyle={{ lineHeight: "1.4", whiteSpace: "pre-line" }}
      />
    </section>
  );
};

export default AboutMe;
