import React from "react";
import css from "./about.css";
import Text from "components/atoms/text/Text";
import Title from "components/molecules/title/Title";
import { aboutMe } from "constants/constants";
import programming from "assets/programming.png";

const AboutMe = () => {
  return (
    <section id="aboutMe" className={css.root}>
      <Title section="aboutMe" />
      <div className={css.container}>
        <div className={css.text_container}>
          <Text
            tag="text-body"
            text={aboutMe}
            customStyle={{ lineHeight: "1.4", whiteSpace: "pre-line" }}
          />
        </div>

        <div className={css.image_container}>
          <img
            src={programming}
            alt={"person programming"}
            className={css.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
