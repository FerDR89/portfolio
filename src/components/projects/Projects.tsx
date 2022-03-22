import React from "react";
import css from "components/projects/projects.css";
import { ProjectCard } from "components/project-card/ProjectCard";
import { projectsData } from "hooks/hooks";

export const Projects = () => {
  const data = projectsData();
  return (
    <article id="projects" className={css.root}>
      <h2 className={css.subtitle}>Mis proyectos</h2>
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
    </article>
  );
};
