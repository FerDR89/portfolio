import React from "react";
import css from "./experience.css";
import ExperienceCard from "components/molecules/experience-card/ExperienceCard";
import Text from "components/atoms/text/Text";
import { useGetExperience } from "hooks/hooks";

const Experience = () => {
  const data = useGetExperience();
  return (
    <section className={css.root} id="experience">
      <div className={css.title_container}>
        <Text tag="subtitle" text="Experiencia profesional" />
      </div>

      <ul className={css.container}>
        {data.map(
          ({ company, position, date, description, tech_stack }, index) => (
            <ExperienceCard
              key={`${company + index}`}
              company={company}
              date={date}
              description={description}
              position={position}
              techStack={tech_stack}
            />
          )
        )}
      </ul>
    </section>
  );
};

export default Experience;
