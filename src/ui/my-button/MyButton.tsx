import React from "react";
import css from "./myButton.css";

type ButtonProps = {
  children: string;
};

export function MyButton({ children }: ButtonProps) {
  return (
    <div className={css.button__container}>
      <button className={css.button}> {children}</button>
    </div>
  );
}
