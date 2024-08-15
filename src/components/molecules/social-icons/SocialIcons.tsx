import React from "react";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Icon from "components/atoms/icon/Icon";
import css from "./socialIcons.css";

const SocialIcons = () => {
  return (
    <div className={css.social_container}>
      <div className={css.icon_container}>
        <a href="mailto:ferderow@gmail.com">
          <Icon name={faEnvelope} height="40px" width="20px" />
        </a>
      </div>
      <div className={css.icon_container}>
        <a href="https://www.linkedin.com/in/fernando-de-row/" target="_blank">
          <Icon name={faLinkedinIn} height="40px" width="20px" />
        </a>
      </div>
      <div className={css.icon_container}>
        <a href="https://github.com/FerDR89" target="_blank">
          <Icon name={faGithub} height="30px" width="30px" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;