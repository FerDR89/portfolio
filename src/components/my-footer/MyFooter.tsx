import React from "react";
import css from "components/my-footer/myFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const MyFooter = () => {
  return (
    <article id="contacto" className={css.root}>
      <div className={css.social__container}>
        <p className={css.text}>Contacto</p>
        <div className={css.icon__container}>
          <a href="mailto:ferderow@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                width: "20px",
                height: "40px",
                color: "whitesmoke",
              }}
            />
          </a>
        </div>
        <div className={css.icon__container}>
          <a
            href="https://www.linkedin.com/in/fernando-de-row/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{
                width: "20px",
                height: "40px",
                color: "whitesmoke",
              }}
            />
          </a>
        </div>

        <div className={css.icon__container}>
          <a href="https://github.com/FerDR89" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                width: "30px",
                height: "30px",
                color: "whitesmoke",
              }}
            />
          </a>
        </div>
      </div>
    </article>
  );
};
