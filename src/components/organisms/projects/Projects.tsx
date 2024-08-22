import React from "react";
import css from "./projects.css";
import Title from "components/molecules/title/Title";
import ProjectCard from "components/molecules/project-card/ProjectCard";
import { useGetProjectsData } from "hooks/hooks";

const Projects = () => {
  const data = useGetProjectsData();
  return (
    <section className={css.root} id="projects">
      <Title section="projects" />
      <div className={css.container}>
        {data.map((x) => {
          return (
            <ProjectCard
              key={x.linkRepo}
              title={x.title}
              img={"https:" + x.image}
              linkRepo={x.linkRepo}
              description={x.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
