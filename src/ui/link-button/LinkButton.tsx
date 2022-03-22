import React from "react";
import css from "./link-button.css";
import cv from "../../assets/cv.pdf";

export function MyButton() {
  return (
    <div className={css.button__container}>
      <a
        className={css.link}
        href={cv}
        download={"FullStack - de Row Fernando"}
      >
        Mi CV
      </a>
    </div>
  );
}
