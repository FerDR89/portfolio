import React from "react";
import css from "./welcome.css";
import Text from "components/atoms/text/Text";
import MyButton from "components/atoms/my-button/MyButton";
import {
  greeting,
  name,
  profession,
  download,
} from "../../../constants/constants";
import cv from "assets/cv.pdf";

const Welcome = () => {
  return (
    <section className={css.root}>
      <div>
        <Text
          tag="text-bold"
          text={greeting}
          customStyle={{
            fontSize: "1.3rem",
          }}
        />
        <Text
          tag="title"
          text={name}
          customStyle={{
            textShadow: "2px 2px 3px rgb(40 59 115)",
            fontSize: "3rem",
            margin: "30px 0px",
          }}
        />
        <Text
          tag="text-bold"
          text={profession}
          customStyle={{
            fontSize: "1.4rem",
          }}
        />
      </div>

      <div className={css.button_container}>
        <MyButton>
          <a
            className={css.link}
            href={cv}
            download={"React Native Developer - de Row Fernando"}
          >
            <Text tag="text-body" text={download} />
          </a>
        </MyButton>
      </div>
    </section>
  );
};

export default Welcome;
