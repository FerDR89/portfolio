import React, { ReactElement } from "react";
import css from "./myButton.css";

type ButtonProps = {
  children: string | ReactElement;
};

const MyButton = ({ children }: ButtonProps) => {
  return (
    <div className={css.button_container}>
      <button className={css.button}> {children}</button>
    </div>
  );
};

export default MyButton;
