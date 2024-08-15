import React from "react";
import css from "./projects.css";
import { ProjectCard } from "components/molecules/project-card/ProjectCard";
import { useGetProjectsData } from "hooks/hooks";
import Text from "components/atoms/text/Text";

export const Projects = () => {
  const data = useGetProjectsData();
  return (
    <section className={css.root} id="projects">
      <div className={css.title_container}>
        <Text tag="subtitle" text="Mis proyectos" />
      </div>
      <div className={css.container}>
        {data.map((x) => {
          return (
            <ProjectCard
              key={x.linkRepo}
              title={x.title}
              img={"https:" + x.image}
              linkDeploy={x.linkDeploy}
              linkRepo={x.linkRepo}
            />
          );
        })}
      </div>
    </section>
  );
};
