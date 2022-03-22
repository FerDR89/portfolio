import React from "react";
import css from "components/welcome/welcome.css";
import { MyButton } from "ui/link-button/LinkButton";

export const Welcome = () => {
  return (
    <article id="welcome" className={css.root}>
      <div className={css.info__container}>
        <div className={css.text__container}>
          <h1 className={css.title}>Fernando de Row</h1>
          <h2 className={css.subtitle}>Desarrollador FullStack</h2>
        </div>
        <MyButton />
      </div>
      <div className={css.animation__container}>
        <iframe
          className={css.animation}
          src="https://embed.lottiefiles.com/animation/76616"
          aria-label="Animación de hombre programando"
        ></iframe>
      </div>
    </article>
  );
};
