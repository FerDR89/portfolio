import React from "react";
import css from "./experienceCard.css";
import Text from "components/atoms/text/Text";

interface ExperienceCardProps {
  company: string;
  position: string;
  date: string;
  description: string;
  techStack?: string[];
}

const ExperienceCard = ({
  company,
  position,
  date,
  description,
  techStack,
}: ExperienceCardProps) => {
  const chainedTechStack = techStack.join(", ");
  return (
    <li className={css.root}>
      <div>
        <Text
          tag="text-body"
          text={`${company} - ${position}`}
          customStyle={{
            fontWeight: "bolder",
            color: "var(--primary-font-color)",
            fontSize: "1.1rem",
          }}
        />
        <Text
          tag="text-body"
          text={date}
          customStyle={{ fontSize: "0.75rem" }}
        />
      </div>

      {chainedTechStack && (
        <Text
          tag="text-bold"
          text={`Tech Stack: ${chainedTechStack}`}
          customStyle={{ fontSize: "0.85rem" }}
        />
      )}

      <Text
        tag="text-body"
        text={description}
        customStyle={{ lineHeight: "1.4" }}
      />
    </li>
  );
};

export default ExperienceCard;
