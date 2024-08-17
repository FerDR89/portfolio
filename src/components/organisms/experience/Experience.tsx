import React from "react";
import css from "./experience.css";
import ExperienceCard from "components/molecules/experience-card/ExperienceCard";
import { useGetExperience } from "hooks/hooks";
import Title from "components/molecules/title/Title";

const Experience = () => {
  const data = useGetExperience();
  return (
    <section className={css.root} id="experience">
      <Title section="experience" />
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
