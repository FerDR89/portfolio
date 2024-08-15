import React from "react";
import css from "./myFooter.css";
import SocialIcons from "components/molecules/social-icons/SocialIcons";
import Text from "components/atoms/text/Text";
import { contact } from "constants/constans";

export const MyFooter = () => {
  return (
    <article id="contacto" className={css.root}>
      <Text
        tag="text-bold"
        text={contact}
        customStyle={{ fontSize: "0.85rem" }}
      />
      <SocialIcons />
    </article>
  );
};
