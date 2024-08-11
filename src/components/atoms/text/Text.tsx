import React, { CSSProperties } from "react";
import css from "./text.css";

type TextProps = {
  tag: "title" | "subtitle" | "text-bold" | "text-body";
  text: string;
  customStyle?: CSSProperties;
};

const Text = ({ tag, text, customStyle = {} }: TextProps) => {
  const tags = {
    title: (
      <h1 className={css.text_title} style={customStyle}>
        {text}
      </h1>
    ),
    subtitle: (
      <h2 className={css.text_subtitle} style={customStyle}>
        {text}
      </h2>
    ),
    ["text-bold"]: (
      <h3 className={css.text_bold} style={customStyle}>
        {text}
      </h3>
    ),
    ["text-body"]: (
      <p className={css.text_body} style={customStyle}>
        {text}
      </p>
    ),
  };
  return tags[tag];
};

export default Text;
