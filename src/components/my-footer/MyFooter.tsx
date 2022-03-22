import React from "react";
import css from "components/my-footer/myFooter.css";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lib/font-awesome/FontAwesome";

export const MyFooter = () => {
  return (
    <article id="contacto" className={css.root}>
      <div className={css.social__container}>
        <div className={css.icon__container}>
          <a href="mailto:ferderow@gmail.com">
            {MailIcon("20px", "40px", "whitesmoke")}
          </a>
        </div>
        <div className={css.icon__container}>
          <a
            href="https://www.linkedin.com/in/fernando-de-row/"
            target="_blank"
          >
            {LinkedinIcon("20px", "40px", "whitesmoke")}
          </a>
        </div>

        <div className={css.icon__container}>
          <a href="https://github.com/FerDR89" target="_blank">
            {GithubIcon("30px", "30px", "whitesmoke")}
          </a>
        </div>
      </div>
    </article>
  );
};
