import React from "react";
import Text from "components/atoms/text/Text";
import { titles } from "constants/constans";
import css from "./title.css";

interface TitleProps {
  section: "aboutMe" | "projects" | "experience" | "stack";
}

const Title = ({ section }: TitleProps) => {
  return (
    <div className={css.title_container}>
      <Text tag="subtitle" text={titles[section]} />
    </div>
  );
};

export default Title;
