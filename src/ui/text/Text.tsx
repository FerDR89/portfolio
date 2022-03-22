import React from "react";
import css from "./text.css";

type TextProps = {
  tag: string;
  children: any;
};

function Text({ tag, children }: TextProps) {
  const tags =
    tag === "title" ? (
      <h1 className={css.text__title}>{children}</h1>
    ) : tag === "text-bold" ? (
      <h3 className={css.text__bold}>{children}</h3>
    ) : (
      <p className="text-body">{children}</p>
    );
  return <div className={css.text__container}>{tags}</div>;
}

export { Text };
